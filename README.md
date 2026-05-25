<div align="center">

<img src="https://github.com/Aditya24Kashyap/BrowserIDE/raw/main/public/vibe-code-editor-thumbnaail.svg" alt="Vibecode Editor" width="600"/>

# ⚡ Browser IDE - AI Vibecode Editor

### AI-Powered Browser IDE — Code, Run, and Chat without leaving your tab.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-83%25-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma)](https://www.prisma.io/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![WebContainers](https://img.shields.io/badge/WebContainers-StackBlitz-0066FF?logo=stackblitz)](https://webcontainers.io/)
[![Ollama](https://img.shields.io/badge/AI-Ollama%20%2F%20Gemini-orange)](https://ollama.com/)

[**Live Demo**](#-screenshots) · [**Report Bug**](https://github.com/Aditya24Kashyap/BrowserIDE/issues) · [**Request Feature**](https://github.com/Aditya24Kashyap/BrowserIDE/issues)

</div>

---

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Screenshots](#-screenshots)
- [Features](#-features)
- [Architecture](#-architecture)
- [Folder Structure](#-folder-structure)
- [Tech Stack](#-tech-stack)
- [AI Workflow](#-ai-workflow)
- [Getting Started](#-getting-started)
- [Deployment Guide](#-deployment-guide)
- [Vercel Deployment & AI Migration](#-vercel-deployment--ai-migration-roadmap)
- [Future Improvements](#-future-improvements)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🧠 About the Project

**Vibecode Editor** is a full-stack, AI-integrated web IDE that runs entirely in the browser. It combines the power of **Monaco Editor** (the engine behind VS Code), **WebContainers** for in-browser Node.js execution, a real **xterm.js terminal**, and **local AI assistance via Ollama** — all in a single Next.js application.

Users can spin up projects from popular templates (React, Next.js, Vue, Express, Hono, Angular), write and run code in real-time, interact with an AI chat assistant, and get inline code completions — without installing anything except the app itself.

> **Note on AI:** The current version uses Ollama (local LLMs) for AI chat and code completion. For cloud deployment, migration to **Google Gemini API (free tier)** is planned. See [Vercel Deployment & AI Migration Roadmap](#-vercel-deployment--ai-migration-roadmap).

---

## 📸 Screenshots

> _Add screenshots of your running app here. Suggested views:_

| View | Description |
|------|-------------|
| `screenshot-editor.png` | Monaco Editor with AI autocomplete active |
| `screenshot-terminal.png` | Embedded xterm.js terminal running a dev server |
| `screenshot-ai-chat.png` | AI Chat Assistant sidebar |
| `screenshot-templates.png` | Project template selection screen |
| `screenshot-file-explorer.png` | Custom file explorer with context menus |

```
<!-- To add a screenshot, upload the image to /public and reference it like: -->
![Editor View](public/screenshot-editor.png)
```

---

## 🚀 Features

### 🔐 Authentication
- OAuth 2.0 login via **Google** and **GitHub** using NextAuth v5
- Session management with Prisma adapter and MongoDB
- Protected routes via Next.js middleware

### 🧱 Project Templates
- Choose from **React, Next.js, Vue, Angular, Express, Hono** starter projects
- Template files are bootstrapped into the WebContainer file system on project creation
- Stored under `vibecode-starters/` for easy extension

### 🗂️ File Explorer
- Create, rename, delete files and folders
- Tree-view with collapsible directories
- Context menu (right-click) actions
- Active file tracking synced with the editor

### 🖊️ Monaco Editor
- Full VS Code-grade editing experience in the browser
- Syntax highlighting for all major languages
- Custom keybindings and formatting
- **AI autocomplete** powered by [monacopilot](https://github.com/nicktindall/monacopilot) — trigger with `Ctrl + Space` or double `Enter`, accept with `Tab`

### 🤖 AI Chat Assistant
- Conversational AI sidebar powered by a local Ollama model (e.g., `codellama`)
- **File sharing** — attach open files as context for the AI
- Supports markdown rendering with math (`remark-math`, `rehype-katex`) and GitHub Flavored Markdown
- Refactor, explain, or generate code via natural language

### ⚙️ WebContainers
- Runs a full **Node.js environment in the browser** via `@webcontainer/api`
- Install npm packages, run dev servers, execute scripts — all in-browser
- File system is synchronized with the editor in real time

### 💻 Terminal
- Fully interactive embedded terminal via **xterm.js**
- Addons: fit, search, web-links
- Connected to the WebContainer shell

### 🌗 UI / UX
- **Dark / Light mode** toggle via `next-themes`
- Built with **TailwindCSS v4** and **ShadCN UI** (Radix primitives)
- Resizable panels via `react-resizable-panels`
- Toast notifications via `sonner`
- Responsive and developer-first design

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                          Browser (Client)                           │
│                                                                     │
│  ┌──────────────┐   ┌───────────────┐   ┌──────────────────────┐   │
│  │  Monaco      │   │  xterm.js     │   │  AI Chat Sidebar     │   │
│  │  Editor      │   │  Terminal     │   │  (react-markdown)    │   │
│  │  + monacopilot│   │               │   │                      │   │
│  └──────┬───────┘   └──────┬────────┘   └──────────┬───────────┘   │
│         │                  │                        │               │
│         └──────────────────┼────────────────────────┘               │
│                            │                                        │
│                   ┌────────▼────────┐                               │
│                   │  WebContainer   │  ← Node.js in browser         │
│                   │  (StackBlitz)   │                               │
│                   └─────────────────┘                               │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │              React State (Zustand)                           │   │
│  │   fileTree · activeFile · editorContent · terminal · chat   │   │
│  └──────────────────────────────────────────────────────────────┘   │
└─────────────────────────┬───────────────────────────────────────────┘
                          │ HTTP / API Routes
┌─────────────────────────▼───────────────────────────────────────────┐
│                   Next.js App Router (Server)                       │
│                                                                     │
│  ┌──────────────┐   ┌──────────────┐   ┌──────────────────────┐   │
│  │  /api/auth   │   │  /api/ai     │   │  Server Components   │   │
│  │  (NextAuth)  │   │  (Ollama /   │   │  & Server Actions    │   │
│  │              │   │   Gemini*)   │   │                      │   │
│  └──────┬───────┘   └──────┬───────┘   └──────────────────────┘   │
│         │                  │                                        │
└─────────┼──────────────────┼────────────────────────────────────────┘
          │                  │
┌─────────▼──────┐  ┌────────▼──────────────────────┐
│   MongoDB      │  │  Ollama (Local Docker)         │
│   (Prisma ORM) │  │  e.g. codellama model          │
│   Users/Auth   │  │  * → Gemini API (future)       │
└────────────────┘  └───────────────────────────────┘
```

**Key architectural decisions:**

- **App Router (Next.js 15):** All routes are server components by default; interactive editor/terminal panels are client components. API routes handle AI proxying and auth callbacks.
- **WebContainers:** The in-browser Node runtime is initialized once and kept alive for the session. Files are written to its virtual FS, which mirrors the editor's file tree.
- **Zustand:** Global state store manages file tree, active file, editor content, and terminal/AI state across deeply nested components without prop drilling.
- **Prisma + MongoDB:** Used for user session persistence. No project files are stored server-side — all execution is local/in-browser.
- **Ollama (local LLM):** The AI routes proxy requests from the browser to a locally running Ollama Docker container. In production, this will be replaced by the Gemini API.

---

## 📁 Folder Structure

```
BrowserIDE/
├── app/                        # Next.js App Router
│   ├── (auth)/                 # Auth pages (login, register)
│   ├── (protected)/            # Protected routes (IDE, dashboard)
│   │   └── editor/             # Main IDE page
│   ├── api/                    # API Route Handlers
│   │   ├── auth/               # NextAuth route handler
│   │   └── ai/                 # AI chat + code completion endpoints
│   ├── globals.css             # Global styles
│   └── layout.tsx              # Root layout (theme provider, fonts)
│
├── components/                 # Reusable React components
│   ├── ui/                     # ShadCN UI base components (Button, Dialog, etc.)
│   ├── editor/                 # Monaco Editor wrapper + AI completion config
│   ├── file-explorer/          # File tree, context menus, rename/delete
│   ├── terminal/               # xterm.js terminal component
│   ├── ai-chat/                # Chat sidebar, message list, file attachment
│   └── layout/                 # IDE shell, panels, resizable layout
│
├── hooks/                      # Custom React hooks
│   ├── use-webcontainer.ts     # WebContainer init, FS sync, shell
│   ├── use-ai-chat.ts          # AI chat state and streaming
│   └── use-file-tree.ts        # File tree CRUD operations
│
├── lib/                        # Utilities and shared logic
│   ├── auth.ts                 # NextAuth config helpers
│   ├── db.ts                   # Prisma client singleton
│   └── utils.ts                # cn(), misc utilities
│
├── modules/                    # Feature-level business logic modules
│   ├── ai/                     # AI provider abstraction (Ollama → Gemini)
│   └── webcontainer/           # WebContainer service layer
│
├── prisma/                     # Database schema and migrations
│   └── schema.prisma           # User, Account, Session models
│
├── public/                     # Static assets
│   └── vibe-code-editor-thumbnaail.svg
│
├── vibecode-starters/          # Project template files
│   ├── react/
│   ├── nextjs/
│   ├── vue/
│   ├── angular/
│   ├── express/
│   └── hono/
│
├── auth.ts                     # NextAuth initialization
├── auth.config.ts              # OAuth provider config (Google, GitHub)
├── middleware.ts               # Route protection middleware
├── next-auth.d.ts              # NextAuth type extensions
├── routes.ts                   # Public / protected route definitions
├── next.config.ts              # Next.js config (headers for WebContainers COOP/COEP)
├── components.json             # ShadCN UI config
└── .env.example                # Environment variable template
```

> **Note:** WebContainers requires specific HTTP headers (`Cross-Origin-Opener-Policy: same-origin` and `Cross-Origin-Embedder-Policy: require-corp`) set in `next.config.ts` to enable `SharedArrayBuffer` in the browser.

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | Next.js 15 (App Router) | Full-stack React framework |
| Language | TypeScript | Type safety across the codebase |
| Styling | TailwindCSS v4 + ShadCN UI | Utility-first styling + accessible component primitives |
| Auth | NextAuth v5 (Google + GitHub OAuth) | Session management and OAuth flows |
| Database | MongoDB + Prisma ORM | User/session persistence |
| Editor | Monaco Editor + monacopilot | VS Code-grade editing + AI completions |
| Runtime | WebContainers API | In-browser Node.js execution |
| Terminal | xterm.js | Interactive embedded terminal |
| AI (local) | Ollama (codellama or similar) | AI chat and code completion via local LLM |
| AI (cloud) | Google Gemini API _(planned)_ | Cloud AI for Vercel deployment |
| State | Zustand | Client-side global state management |
| Forms | React Hook Form + Zod | Form validation and schema enforcement |
| UI Extras | react-resizable-panels, sonner, next-themes | Resizable layout, toasts, dark mode |

---

## 🤖 AI Workflow

### Local Development (Current)

```
User types in Monaco Editor
        │
        ▼
monacopilot triggers on Ctrl+Space or double Enter
        │
        ▼
POST /api/ai/complete
        │
        ▼
Next.js API Route proxies to Ollama (localhost:11434)
        │
        ▼
Ollama runs codellama (or other model) locally via Docker
        │
        ▼
Completion streamed back → displayed in editor as ghost text
        │
User presses Tab to accept
```

### AI Chat Flow

```
User types message in Chat Sidebar
(optionally attaches open file as context)
        │
        ▼
POST /api/ai/chat  with { messages, fileContext? }
        │
        ▼
Ollama generates response (streaming)
        │
        ▼
Response rendered as Markdown in the sidebar
(supports GFM, code blocks, math via KaTeX)
```

### Cloud Deployment Flow (Planned — Gemini)

```
Same flow as above, but:
POST /api/ai/complete → Google Gemini API (free tier)
POST /api/ai/chat    → Google Gemini API (free tier)

The modules/ai/ abstraction layer makes this a config swap,
not a rewrite.
```

---

## 🏁 Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x
- **MongoDB** (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) free tier)
- **Ollama** + **Docker** (for local AI features)
- Google and/or GitHub OAuth app credentials

### 1. Clone the Repository

```bash
git clone https://github.com/Aditya24Kashyap/BrowserIDE.git
cd BrowserIDE
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in all values:

```env
# Database
DATABASE_URL="mongodb+srv://<user>:<password>@cluster.mongodb.net/vibecode"

# NextAuth
AUTH_SECRET="your-random-secret-32-chars"          # openssl rand -base64 32
NEXTAUTH_URL="http://localhost:3000"

# GitHub OAuth  (github.com → Settings → Developer settings → OAuth Apps)
AUTH_GITHUB_ID="your_github_client_id"
AUTH_GITHUB_SECRET="your_github_client_secret"

# Google OAuth  (console.cloud.google.com → APIs & Services → Credentials)
AUTH_GOOGLE_ID="your_google_client_id"
AUTH_GOOGLE_SECRET="your_google_client_secret"
```

### 4. Set Up the Database

```bash
npx prisma generate
npx prisma db push
```

### 5. Start Ollama (for AI features)

Make sure [Ollama](https://ollama.com/) is installed, then pull and run a code model:

```bash
ollama pull codellama
ollama run codellama
# Ollama listens on http://localhost:11434 by default
```

> **Tip:** You can swap `codellama` for any Ollama-compatible model (e.g., `deepseek-coder`, `qwen2.5-coder`).

### 6. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + Space` | Trigger AI code suggestion |
| `Double Enter` | Trigger AI code suggestion |
| `Tab` | Accept AI suggestion |
| `Ctrl + S` | Save / format file |

---

## 🚀 Deployment Guide

### Option A: Self-Hosted (VPS / Docker)

1. **Build the app:**
   ```bash
   npm run build
   ```

2. **Required HTTP headers** (set in your Nginx/Caddy/proxy or `next.config.ts`):
   ```
   Cross-Origin-Opener-Policy: same-origin
   Cross-Origin-Embedder-Policy: require-corp
   ```
   These are **required** for WebContainers to work. Without them, the in-browser Node.js runtime will not initialize.

3. **Run Ollama** on the same host (or a sidecar container) and point the app's AI API routes to it.

4. **Start the server:**
   ```bash
   npm start
   ```

### Option B: Vercel (see AI migration note below)

> ⚠️ **WebContainers run entirely in the browser** — they don't need a server. Vercel is fine for the Next.js app itself. The only blocker for Vercel deployment is the **Ollama AI dependency** (Ollama is a local process and can't be called from Vercel's serverless edge). See the roadmap below for the Gemini migration plan.

---

## ☁️ Vercel Deployment & AI Migration Roadmap

### The Problem

Ollama runs as a local Docker process (`localhost:11434`). When deployed to Vercel, there is no local Ollama server to call — so AI chat and AI code completion **will not work out of the box**.

### The Solution: Google Gemini API (Free Tier)

The plan is to swap the AI backend from Ollama to **Google Gemini** using the free tier, with a clean provider abstraction:

#### Step 1 — Add Gemini to environment variables

```env
# Add to .env.local (and Vercel env)
GEMINI_API_KEY="your_gemini_api_key"
AI_PROVIDER="gemini"   # or "ollama" for local dev
```

Get a free key at [aistudio.google.com](https://aistudio.google.com/app/apikey).

#### Step 2 — Create an AI provider abstraction in `modules/ai/`

```typescript
// modules/ai/provider.ts
import { ollamaComplete, ollamaChat } from './ollama'
import { geminiComplete, geminiChat } from './gemini'

const provider = process.env.AI_PROVIDER ?? 'ollama'

export const aiComplete = provider === 'gemini' ? geminiComplete : ollamaComplete
export const aiChat     = provider === 'gemini' ? geminiChat     : ollamaChat
```

#### Step 3 — Implement Gemini provider

```typescript
// modules/ai/gemini.ts
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })  // free tier model

export async function geminiChat(messages: Message[]) {
  const chat = model.startChat({ history: toGeminiHistory(messages) })
  const result = await chat.sendMessage(messages.at(-1)!.content)
  return result.response.text()
}
```

#### Step 4 — Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Set all env vars in the Vercel dashboard (Settings → Environment Variables), including `GEMINI_API_KEY` and `AI_PROVIDER=gemini`.

#### Free Tier Limits (Gemini 1.5 Flash as of 2025)

| Limit | Value |
|-------|-------|
| Requests per minute | 15 |
| Requests per day | 1,500 |
| Input tokens per minute | 1,000,000 |

For a personal/portfolio project, these limits are more than sufficient.

---

## 🔮 Future Improvements

### AI Enhancements
- [ ] **Gemini API integration** — replace Ollama for cloud deployment (see roadmap above)
- [ ] **Streaming chat responses** — stream tokens in real time rather than waiting for full completion
- [ ] **Context-aware completions** — pass the full file tree and related files as context to the AI
- [ ] **AI-powered code actions** — "Fix this error", "Write tests for this function" as right-click actions in the editor
- [ ] **Agent mode** — let the AI make multi-step changes across multiple files

### Editor & IDE
- [ ] **Multi-tab editor** — open multiple files in tabs simultaneously
- [ ] **Find & Replace** — global search across all files in the project
- [ ] **Git integration** — show diff, stage/commit changes from within the IDE
- [ ] **Language Server Protocol (LSP)** — IntelliSense, go-to-definition, error diagnostics
- [ ] **Custom keybinding configuration**

### Infrastructure & Collaboration
- [ ] **Project persistence** — save file trees to MongoDB so users can resume sessions
- [ ] **Real-time collaboration** — multi-user editing via CRDTs (e.g., Yjs)
- [ ] **Shareable workspaces** — generate a link to share a project snapshot
- [ ] **Docker-based execution** — for heavier runtimes (Python, Go, Rust) beyond Node.js
- [ ] **Usage analytics dashboard** — track AI token usage per user

### UX & Polish
- [ ] **Command palette** (`Ctrl+P`) — fuzzy-find files and commands
- [ ] **Diff viewer** — side-by-side comparison of AI-suggested changes
- [ ] **Mobile-responsive layout** — basic editing on tablet/mobile
- [ ] **Onboarding tour** — interactive walkthrough for first-time users

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature-name`
3. Make your changes and commit: `git commit -m 'feat: add your feature'`
4. Push the branch: `git push origin feat/your-feature-name`
5. Open a Pull Request

Please follow the existing code style (TypeScript, ESLint config) and keep PRs focused on a single feature or fix.

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for details.

---

## 🙏 Acknowledgements

- [Monaco Editor](https://microsoft.github.io/monaco-editor/) — the VS Code editor engine
- [WebContainers](https://webcontainers.io/) by StackBlitz — in-browser Node.js runtime
- [Ollama](https://ollama.com/) — local LLM inference
- [xterm.js](https://xtermjs.org/) — browser terminal emulator
- [NextAuth.js](https://next-auth.js.org/) — authentication for Next.js
- [monacopilot](https://github.com/nicktindall/monacopilot) — Copilot-style completions for Monaco
- [ShadCN UI](https://ui.shadcn.com/) — accessible component system
- [Prisma](https://www.prisma.io/) — next-generation ORM

---

<div align="center">

Built with ❤️ by [Aditya Kashyap](https://github.com/Aditya24Kashyap)

⭐ **Star this repo if you found it useful!** ⭐

</div>
