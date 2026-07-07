# Stack Overflow Clone (Full-Stack)

A full-stack Stack Overflow clone built with modern web technologies, showcasing modern user experiences, structured backend integrations, and type-safe development practices.

## 🚀 Key Features
- **User Authentication**: Secure sign-up, login, and session persistence powered by Appwrite.
- **Question & Answer Flow**: Create, edit, and view programming questions with support for code blocks.
- **Voting System**: Real-time Upvote/Downvote system for both questions and answers.
- **Tagging & Filtering**: Organize and browse questions by tags.
- **Markdown Editor**: Rich-text editing with preview capability using `@uiw/react-md-editor`.
- **User Reputation & Leaderboard**: Gamified system tracking user contributions and reputation scores.

## 🛠️ Tech Stack
- **Frontend**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS
- **Database, Auth & Storage**: Appwrite (BaaS)
- **Animations**: Framer Motion & MagicUI
- **State Management**: Zustand

---

## ⚡ Quick Start

### 1. Prerequisites
- Node.js (v18 or higher)
- Appwrite Cloud or Local Instance

### 2. Configuration
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
APPWRITE_API_KEY=your_api_key
```

### 3. Setup & Installation
```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
