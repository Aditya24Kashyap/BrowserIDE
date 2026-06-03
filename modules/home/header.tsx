// import Link from "next/link";
// import Image from "next/image";
// // import { ThemeToggle } from "@/components/ui/toggle-theme";
// import UserButton from "../auth/components/user-button";
// import { ThemeToggle } from "@/components/ui/theme-toggle";

// export function Header() {
//   return (
//     <>
//       <div className="sticky top-0 left-0 right-0 z-50">
//         <div className="bg-white dark:bg-black/5 w-full">
//           {/* Rest of the header content */}
//           <div className="flex items-center justify-center w-full flex-col">
//             <div
//               className={`
//                             flex items-center justify-between
//                             bg-linear-to-b from-white/90 via-gray-50/90 to-white/90
//                             dark:from-zinc-900/90 dark:via-zinc-800/90 dark:to-zinc-900/90
//                             shadow-[0_2px_20px_-2px_rgba(0,0,0,0.1)]
//                             backdrop-blur-md
//                             border-x border-b 
//                             border-[rgba(230,230,230,0.7)] dark:border-[rgba(70,70,70,0.7)]
//                             w-full sm:min-w-[800px] sm:max-w-[1200px]
//                             rounded-b-[28px]
//                             px-4 py-2.5
//                             relative
//                             transition-all duration-300 ease-in-out
//                         `}
//             >
//               <div className="relative z-10 flex items-center justify-between w-full gap-2">
//                 {/* Logo Section with Navigation Links */}
//                 <div className="flex items-center gap-6 justify-center">
//                   <Link
//                     href="/"
//                     className="flex items-center gap-2 justify-center"
//                   >
//                     <Image
//                       src={"/logo.svg"}
//                       alt="Logo"
//                       height={60}
//                       width={60}
//                     />

//                     <span className="hidden sm:block font-extrabold text-lg">
//                       BrowserIDE
//                     </span>
//                   </Link>
//                   <span className="text-zinc-300 dark:text-zinc-700">|</span>
//                   {/* Desktop Navigation Links */}
//                   <div className="hidden sm:flex items-center gap-4">
//                     <Link
//                       href="/docs/components/background-paths"
//                       className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
//                     >
//                       Docs
//                     </Link>
//                     {/* <Link
//                                             href="/pricing"
//                                             className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
//                                         >
//                                             Pricing
//                                         </Link> */}
//                     <Link
//                       href="https://codesnippetui.pro/templates?utm_source=codesnippetui.com&utm_medium=header"
//                       target="_blank"
//                       className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors flex items-center gap-2"
//                     >
//                       API
//                       <span className="text-green-500 dark:text-green-400 border border-green-500 dark:border-green-400 rounded-lg px-1 py-0.5 text-xs">
//                         New
//                       </span>
//                     </Link>
//                   </div>
//                 </div>

//                 {/* Right side items */}
//                 <div className="hidden sm:flex items-center gap-3">
//                   <span className="text-zinc-300 dark:text-zinc-700">|</span>
//                   {/* <HeaderPro /> */}
//                   <ThemeToggle />
//                   <UserButton />
//                 </div>

//                 {/* Mobile Navigation remains unchanged */}
//                 <div className="flex sm:hidden items-center gap-4">
//                   <Link
//                     href="/docs/components/action-search-bar"
//                     className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
//                   >
//                     Docs
//                   </Link>
//                   <Link
//                     href="/pricing"
//                     className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
//                   >
//                     API
//                   </Link>
//                   <ThemeToggle />
//                   <UserButton />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import UserButton from "../auth/components/user-button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/50 dark:border-white/[0.06] bg-white/75 dark:bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 select-none">
          <Image src="/logo.svg" alt="BrowserIDE" height={26} width={26} />
          <span className="font-bold text-sm text-zinc-900 dark:text-white tracking-tight">
            BrowserIDE
          </span>
          <span className="hidden sm:inline rounded-full border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 text-[10px] font-medium text-blue-500 dark:text-blue-400">
            beta
          </span>
        </Link>

        <nav className="hidden sm:flex items-center gap-1">
          {/* <Link href="/docs/components/background-paths" className="px-3 py-1.5 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-white/[0.05] rounded-md transition-colors">
            Docs
          </Link> */}
          <Link
            href="https://github.com/Aditya24Kashyap/BrowserIDE#readme"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-white/[0.05] rounded-md transition-colors"
          >
            Docs
          </Link>
          {/* <Link href="/api" className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-white/[0.05] rounded-md transition-colors">
            API
            <span className="rounded border border-emerald-500/40 bg-emerald-500/10 px-1 py-px text-[9px] font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">New</span>
          </Link> */}
          <Link
            href="https://github.com/Aditya24Kashyap/BrowserIDE#readme"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-white/[0.05] rounded-md transition-colors"
          >
            API
            <span className="rounded border border-emerald-500/40 bg-emerald-500/10 px-1 py-px text-[9px] font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
              New
            </span>
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <UserButton />
        </div>
      </div>
    </header>
  );
}
