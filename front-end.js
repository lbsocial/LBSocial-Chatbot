import wixUsers from 'wix-users';
import { handleUserMessage, sendBotWarningMessage } from 'backend/chatbot';

$w.onReady(function () {
    let messages = [];

    const logMessage = (role, content) => {
        messages.push({ role, content });
    };

    $w('#wixChat').onMessageSent(async (message) => {
        // Only respond to messages sent by the visitor
        if (message.direction !== "VisitorToBusiness") {
            return;
        }

        const channelId = message.channelId;
        const userMessage = message.payload.text;

        // ❗ If user is not logged in, send a warning from backend
        if (!wixUsers.currentUser.loggedIn) {
            await sendBotWarningMessage(channelId);
            return;
        }

        logMessage("user", userMessage);

        // ✅ User is logged in, proceed with assistant logic
        await handleUserMessage(userMessage, channelId);
    });

    // Optional: log bot replies
    $w('#wixChat').onMessageReceived((message) => {
        if (message.direction === "BusinessToVisitor") {
            logMessage("bot", message.payload.text);
        }
    });
});
