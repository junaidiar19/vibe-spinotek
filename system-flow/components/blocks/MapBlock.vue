<template>
  <div class="h-full relative overflow-hidden rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(59,130,246,0.05)_100%)]"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-red-500 animate-bounce">
      <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
    </div>
    <div class="absolute bottom-2 left-2 right-2 h-6 bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-lg flex items-center px-2">
      <div class="h-1 w-1/2 bg-slate-200 dark:bg-white/10 rounded"></div>
    </div>
  </div>
</template>
