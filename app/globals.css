@tailwind base;
@tailwind components;
@tailwind utilities;

html { scroll-behavior: smooth; }
body { @apply bg-white text-ink antialiased dark:bg-night dark:text-slate-200; }
:focus-visible { outline: 2px solid #1a56db; outline-offset: 3px; }

/* The one orchestrated moment: the search query types itself on load. */
.type { display: inline-block; overflow: hidden; white-space: nowrap; border-right: 2px solid currentColor;
  width: 0; animation: typing 1.4s steps(17, end) .3s forwards, caret .7s step-end 4; }
@keyframes typing { to { width: 17ch; } }
@keyframes caret { 50% { border-color: transparent; } }
.result { opacity: 0; animation: show .5s ease 1.8s forwards; }
@keyframes show { to { opacity: 1; } }
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .type { width: 17ch; animation: none; border: 0; }
  .result { opacity: 1; animation: none; }
}
