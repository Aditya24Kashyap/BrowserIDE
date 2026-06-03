// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { ArrowUpRight } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// export default function Home() {
   
//   return (
//     <div className=" z-20 flex flex-col items-center justify-start min-h-screen py-2 mt-10">
      
//       <div className="flex flex-col justify-center items-center my-5">
//       <Image src={"/hero.svg"} alt="Hero-Section" height={500}  width={500}/>
      
//       <h1 className=" z-20 text-6xl mt-5 font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-red-500 to-pink-500 dark:from-rose-400 dark:via-red-400 dark:to-pink-400 tracking-tight leading-[1.3] ">
//         Vibe Code With with Intelligence
//       </h1>
//       </div>
     

//       <p className="mt-2 text-lg text-center text-gray-600 dark:text-gray-400 px-5 py-10 max-w-2xl">
//         VibeCode Editor is a powerful and intelligent code editor that enhances
//         your coding experience with advanced features and seamless integration.
//         It is designed to help you write, debug, and optimize your code
//         efficiently.
//       </p>
//       <Link href={"/dashboard"}>
//         <Button variant={"brand"} className="mb-4" size={"lg"}>
//           Get Started
//           <ArrowUpRight className="w-3.5 h-3.5" />
//         </Button>
//       </Link>
//     </div>
//   );
// }

import { Button } from "@/components/ui/button";
import { ArrowUpRight, Terminal, Cpu, Globe, FolderCode, Zap, GitBranch } from "lucide-react";
import Link from "next/link";

const FEATURES = [
  { icon: FolderCode, t: "6 Project Templates", d: "React, Next.js, Express, Hono, Vue, Angular — ready in one click." },
  { icon: Cpu,        t: "Monaco Editor",        d: "VS Code engine. Syntax, IntelliSense, formatting, AI autocomplete." },
  { icon: Terminal,   t: "Embedded Terminal",    d: "xterm.js. Run dev servers, install packages, execute scripts." },
  { icon: Zap,        t: "Local AI (Ollama)",    d: "CodeLlama runs on your machine. No API key, no rate limit." },
  { icon: Globe,      t: "WebContainers",        d: "Node.js in the browser. Zero server cost, zero setup." },
  { icon: GitBranch,  t: "OAuth Login",          d: "GitHub & Google via NextAuth. Secure sessions out of the box." },
];

const CODE = [
  [[" 1", ""], ["import", "text-blue-400"], [" { useState } ", "text-zinc-300 dark:text-zinc-300"], ["from", "text-blue-400"], [' "react"', "text-emerald-500 dark:text-emerald-400"]],
  [[" 2", ""]],
  [[" 3", ""], ["export default function", "text-violet-400"], [" App()", "text-zinc-300 dark:text-zinc-300"], [" {", "text-zinc-500"]],
  [[" 4", ""], ["  const", "text-blue-400"], [" [count, setCount] = ", "text-zinc-300 dark:text-zinc-300"], ["useState", "text-violet-400"], ["(0)", "text-orange-400"]],
  [[" 5", ""]],
  [[" 6", ""], ["  return", "text-blue-400"], [" (", "text-zinc-500"]],
  [[" 7", ""], ["    <button", "text-blue-400"], [" onClick", "text-cyan-400"], ["={() => setCount(c+1)}", "text-orange-400"], [">", "text-blue-400"]],
  [[" 8", ""], ["      Count: ", "text-zinc-300 dark:text-zinc-300"], ["{count}", "text-orange-400"]],
  [[" 9", ""], ["    </button>", "text-blue-400"]],
  [["10", ""], ["  )", "text-zinc-500"]],
  [["11", ""], ["}", "text-zinc-500"]],
];

const TERM = [
  ["$ npm run dev",                  "text-blue-400"],
  ["  ▲ Next.js 15.1.0",            "text-zinc-500"],
  ["  ✓ Ready in 847ms",            "text-emerald-500"],
  ["  ○ Compiling /app/page ...",   "text-zinc-500"],
  ["  ✓ Compiled in 112ms",         "text-emerald-500"],
];

function IDEPreview() {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-zinc-200 dark:border-white/[0.08] bg-white dark:bg-zinc-900 shadow-[0_32px_80px_-16px_rgba(0,0,0,0.3)] dark:shadow-[0_32px_80px_-16px_rgba(0,0,0,0.6)]">
      {/* Chrome bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-200 dark:border-white/[0.06] bg-zinc-50 dark:bg-zinc-900">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <div className="flex-1 mx-3 rounded-md bg-zinc-200/70 dark:bg-white/[0.05] px-3 py-0.5 text-center">
          <span className="text-[11px] text-zinc-400 dark:text-zinc-500">localhost:3000 — BrowserIDE</span>
        </div>
      </div>

      <div className="flex" style={{height:248}}>
        {/* File tree */}
        <div className="w-36 shrink-0 border-r border-zinc-200 dark:border-white/[0.06] bg-zinc-50 dark:bg-zinc-950/60 p-3">
          <p className="mb-2 text-[9px] font-semibold uppercase tracking-wider text-zinc-400">Explorer</p>
          {[
            {n:"src",       folder:true,  d:0},
            {n:"App.tsx",   active:true,  d:1},
            {n:"index.css", d:1},
            {n:"main.tsx",  d:1},
            {n:"package.json", d:0},
          ].map((f,i)=>(
            <div key={i} className={`flex items-center gap-1.5 rounded px-1 py-0.5 mb-0.5 ${f.active?"bg-blue-500/10":""}`} style={{paddingLeft:f.d*10+4}}>
              {f.folder
                ? <span className="text-[10px]">📁</span>
                : <span className={`h-1.5 w-1.5 rounded-full ${f.active?"bg-blue-500":"bg-zinc-400 dark:bg-zinc-600"}`}/>
              }
              <span className={`text-[11px] ${f.active?"text-blue-600 dark:text-blue-400":"text-zinc-500"}`}>{f.n}</span>
            </div>
          ))}
        </div>

        {/* Code panel */}
        <div className="flex-1 overflow-hidden p-4 bg-white dark:bg-zinc-950 font-mono text-[11px] leading-[22px]">
          {CODE.map((line,i)=>(
            <div key={i} className="flex">
              <span className="mr-4 w-4 text-right text-[10px] text-zinc-300 dark:text-zinc-700 select-none">{line[0][0]}</span>
              <span>{line.slice(1).map(([t,c],j)=><span key={j} className={c}>{t}</span>)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Terminal */}
      <div className="border-t border-zinc-200 dark:border-white/[0.06] bg-zinc-950 px-4 py-3">
        <div className="flex items-center gap-2 mb-2">
          <Terminal className="h-3 w-3 text-zinc-500" />
          <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">Terminal</span>
        </div>
        <div className="font-mono text-[11px] space-y-0.5">
          {TERM.map(([t,c],i)=><div key={i} className={c}>{t}</div>)}
          <div className="flex items-center text-blue-400">
            <span>$ </span>
            <span className="ml-0.5 inline-block h-[13px] w-[6px] bg-blue-400 ide-cursor" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="relative px-4 sm:px-6 pt-20 pb-16 flex flex-col items-center text-center overflow-hidden">
        {/* Blue radial glow — dark only */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] opacity-0 dark:opacity-100"
          style={{background:"radial-gradient(ellipse at top,rgba(59,130,246,0.12) 0%,rgba(139,92,246,0.06) 40%,transparent 70%)"}}/>

        {/* Badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_6px_#3b82f6]"/>
          <span className="text-xs text-blue-600 dark:text-blue-400">WebContainers + Monaco + Ollama AI</span>
        </div>

        {/* Headline */}
        <h1 className="max-w-2xl text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.1] mb-4 text-zinc-900 dark:text-white">
          A full IDE that runs{" "}
          <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
            in your browser.
          </span>
        </h1>

        <p className="max-w-lg text-base sm:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
          Write, run, and debug React, Next.js, Express and more — without leaving the tab. No install. No Docker. No config.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          <Link href="/dashboard">
            <Button variant="brand" size="lg" className="gap-2 shadow-[0_0_24px_rgba(59,130,246,0.3)] hover:shadow-[0_0_32px_rgba(59,130,246,0.4)] transition-shadow">
              Open IDE <ArrowUpRight className="h-4 w-4"/>
            </Button>
          </Link>
          <Link href="https://github.com/Aditya24Kashyap/BrowserIDE" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="gap-2 dark:border-zinc-700 dark:bg-transparent dark:text-zinc-300 dark:hover:bg-white/[0.05] dark:hover:text-white">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              View on GitHub
            </Button>
          </Link>
        </div>

        <IDEPreview />
      </section>

      {/* Features */}
      <section id="features" className="border-t border-zinc-200 dark:border-white/[0.06] py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 dark:text-blue-400 mb-3">Capabilities</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Everything you need. Nothing you don&apos;t.</h2>
            <p className="mt-3 text-zinc-500 max-w-md mx-auto">Built on WebContainers. No server-side Node.js required.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200 dark:bg-white/[0.04] rounded-xl overflow-hidden border border-zinc-200 dark:border-white/[0.06]">
            {FEATURES.map(({icon:Icon,t,d})=>(
              <div key={t} className="group relative bg-white dark:bg-zinc-900/60 p-6 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors overflow-hidden">
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{background:"radial-gradient(circle at 0 0,rgba(59,130,246,0.05) 0,transparent 60%)"}}/>
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 dark:border-white/[0.08] bg-zinc-50 dark:bg-white/[0.04] text-blue-500 dark:text-blue-400">
                  <Icon className="h-4 w-4"/>
                </div>
                <h3 className="mb-1.5 text-sm font-semibold text-zinc-900 dark:text-zinc-100">{t}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI section */}
      <section className="border-t border-zinc-200 dark:border-white/[0.06] py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-2xl border border-zinc-200 dark:border-white/[0.06] bg-white dark:bg-zinc-900/40 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 dark:text-blue-400 mb-3">AI-Native</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">Local AI. Zero latency.<br/>Full privacy.</h2>
              <p className="text-zinc-500 mb-6 leading-relaxed">Ollama runs CodeLlama on your machine. Your code never leaves your device — no cloud, no rate limits, no API key needed.</p>
              <ul className="space-y-2.5">
                {[
                  "Ctrl+Space or double Enter → AI suggestions",
                  "Tab to accept completions",
                  "AI chat with full file context",
                  "Works offline",
                ].map(i=>(
                  <li key={i} className="flex items-center gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-500/10">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden>
                        <path d="M1.5 4l2 2 3-3" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>

            {/* Chat mockup */}
            <div className="border-t md:border-t-0 md:border-l border-zinc-200 dark:border-white/[0.06] bg-zinc-50 dark:bg-zinc-950/60 p-6 flex flex-col justify-center gap-3">
              <p className="text-[11px] text-zinc-400 dark:text-zinc-600 font-mono mb-1">AI Assistant — codellama:latest</p>
              <div className="self-end max-w-[85%] rounded-lg border border-blue-200 dark:border-blue-500/20 bg-blue-50 dark:bg-blue-500/10 px-3.5 py-2.5">
                <p className="text-xs text-blue-700 dark:text-blue-300">Refactor this fetch into async/await with error handling</p>
              </div>
              <div className="self-start max-w-[90%] rounded-lg border border-zinc-200 dark:border-white/[0.08] bg-white dark:bg-zinc-800/60 px-3.5 py-2.5">
                <p className="text-xs text-zinc-500 mb-2">Here you go:</p>
                <pre className="font-mono text-[10.5px] leading-5 text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap">{`const fetchData = async (url) => {
  try {
    const res = await fetch(url)
    return await res.json()
  } catch (err) {
    console.error(err)
  }
}`}</pre>
              </div>
              <div className="mt-1 flex items-center gap-2 rounded-lg border border-zinc-200 dark:border-white/[0.08] bg-white dark:bg-zinc-800/60 px-3 py-2">
                <span className="flex-1 text-xs text-zinc-400">Ask the AI...</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-blue-500"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-zinc-200 dark:border-white/[0.06] py-20 px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-4">Start coding in 10 seconds.</h2>
        <p className="text-zinc-500 mb-8">No install. No config. Just open and build.</p>
        <Link href="/dashboard">
          <Button variant="brand" size="lg" className="gap-2 shadow-[0_0_28px_rgba(59,130,246,0.25)] hover:shadow-[0_0_40px_rgba(59,130,246,0.35)] transition-shadow">
            Launch BrowserIDE <ArrowUpRight className="h-4 w-4"/>
          </Button>
        </Link>
      </section>
    </div>
  );
}
