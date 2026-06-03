// import Link from "next/link";
// import { Github as LucideGithub } from "lucide-react";




// export function Footer() {
//   const socialLinks = [
//     {
//       href: "#",
//       icon: (
//         <LucideGithub className="w-5 h-5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" />
//       ),
//     },
//   ];

//   return (
//     <footer className="border-t border-zinc-200 dark:border-zinc-800">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 flex flex-col items-center space-y-6 text-center">
//         {/* Social Links */}
//         <div className="flex gap-4">
//           {socialLinks.map((link, index) => (
//             <Link
//               key={index}
//               href={link.href || "#"}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {link.icon}
//             </Link>
//           ))}
//         </div>

//         {/* Copyright Notice */}
//         <p className="text-sm text-zinc-500 dark:text-zinc-400">
//           &copy; {new Date().getFullYear()} Codesnippet. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-white/[0.06] mt-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <Image src="/logo.svg" alt="BrowserIDE" height={22} width={22} />
              <span className="font-bold text-sm text-zinc-900 dark:text-white">BrowserIDE</span>
            </Link>
            <p className="text-xs text-zinc-500 max-w-[180px] leading-relaxed">
              Full-stack browser IDE powered by WebContainers + Ollama AI.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">Product</p>
              <ul className="space-y-2">
                {[["Dashboard", "/dashboard"], ["Docs", "/docs/components/background-paths"], ["API", "/api"]].map(([l, h]) => (
                  <li key={l}><Link href={h} className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">{l}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">Stack</p>
              <ul className="space-y-2 text-zinc-500">
                {["WebContainers", "Monaco Editor", "xterm.js", "Ollama AI"].map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">Links</p>
              <ul className="space-y-2">
                <li>
                  <Link href="https://github.com/Aditya24Kashyap/BrowserIDE" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
                    <Github className="h-3.5 w-3.5" />GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-zinc-200 dark:border-white/[0.06] pt-6">
          <p className="text-xs text-zinc-400 dark:text-zinc-600">© {new Date().getFullYear()} BrowserIDE. MIT License.</p>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="text-xs text-zinc-400 dark:text-zinc-600">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
