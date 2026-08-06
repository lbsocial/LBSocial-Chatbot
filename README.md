> [!IMPORTANT]
> **Archived legacy project**
>
> This repository documents an earlier LBSocial chatbot built with **Wix Chat** and the **OpenAI Assistants API**.
>
> It is no longer used in production and is not actively maintained. LBSocial has moved to a newer Wix-based smart chatbot implementation.
>
> This repository remains public because it supports an earlier LBSocial tutorial and preserves the original implementation for educational and historical reference.

# LBSocial Chatbot — Legacy Wix Chat Integration

This project previously integrated an AI-powered chatbot into [LBSocial.net](https://lbsocial.net) using Wix Chat and the OpenAI Assistants API. The chatbot retrieved answers from LBSocial YouTube video captions and served as an interactive learning assistant for data analytics and AI topics.

## Historical tutorial

This repository accompanies the earlier tutorial:

📌 [Building an AI Chatbot for LBSocial: OpenAI + Wix Chat Integration](https://www.lbsocial.net/post/building-an-ai-chatbot-for-lbsocial-openai-wix-chat-integration)

The tutorial describes the legacy implementation preserved here. It does not represent the chatbot currently used by LBSocial.

## How the legacy chatbot worked

1. **Retrieve video captions from YouTube**
   - [`video_captions_retrive.ipynb`](video_captions_retrive.ipynb) fetched YouTube captions through the YouTube API.
   - The extracted captions were used as the chatbot's source material.

2. **Upload captions to an OpenAI vector store**
   - Captions were manually uploaded to OpenAI for retrieval.

3. **Configure an OpenAI Assistant**
   - An OpenAI Assistant retrieved relevant caption content and generated responses.
   - A separate thread was created for each user conversation to preserve context.

4. **Connect the assistant to Wix Chat**
   - Wix frontend and backend code connected the site chat interface to the OpenAI Assistant.
   - Each Wix user had a dedicated chat channel for conversation history.

The Wix implementation was originally informed by this tutorial:

📌 [How to Turn the Native Wix Chat (App Market) into ChatGPT with OpenAI](https://www.youtube.com/watch?v=2Vn5fQjx4Y8&t=690s)

## Project files

### Wix frontend and backend

- [`chatbot.jsw`](chatbot.jsw) — Legacy backend logic for OpenAI API communication.
- [`front-end.js`](front-end.js) — Legacy Wix Chat interaction and response display code.

### OpenAI Assistant and data processing

- [`assistant-instructions.txt`](assistant-instructions.txt) — Instructions used by the legacy OpenAI Assistant.
- [`video_captions_retrive.ipynb`](video_captions_retrive.ipynb) — Notebook used to retrieve YouTube captions.

### Documentation and licensing

- [`README.md`](README.md) — Project status and historical documentation.
- [`LICENSE`](LICENSE) — Open-source license.

## Maintenance status

- No active development is planned.
- The code is not used by the current LBSocial production chatbot.
- Dependencies and external APIs may have changed since the tutorial was published.
- The repository is retained as a historical and educational reference.

## License

This project is licensed under the MIT License. See [`LICENSE`](LICENSE) for details.
