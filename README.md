# English Master App Walkthrough

🚀 **Live Demo**: https://english-master-jhab.vercel.app/

## Completed Features
We have successfully built a comprehensive English learning application with three core pillars:

1.  **Vocabulary Feature** (`/vocabulary`)
    -   Interactive 3D Flashcards.
    -   Mock data integration.
    -   Pronunciation and example sentences.

2.  **Conversation Feature** (`/conversation`)
    -   Chat Interface with User/Bot distinctions.
    -   Mock AI response logic with typing effect.
    -   Auto-scrolling chat history.

3.  **Verification Feature** (`/test`)
    -   Multiple-choice Quiz component.
    -   Real-time validation (Correct/Incorrect feedback).
    -   Score summary and Reset functionality.

## Technical Highlights
-   **Architecture**: Next.js App Router with Component-based design.
-   **Styling**: Vanilla CSS Modules with a central Design System (`globals.css`).
-   **Git Workflow**: Feature-branch workflow (`feature/*` -> `main`).

## Verification Steps
To verify the final application:

1.  **Run Development Server**:
    ```bash
    npm run dev
    ```
2.  **Open Browser**:
    Navigate to [http://localhost:3000](http://localhost:3000).
3.  **Test Flows**:
    -   Click "Vocabulary", flip a card.
    -   Go home, click "Conversation", type "Hello".
    -   Go home, click "Test", answer questions, check score.
