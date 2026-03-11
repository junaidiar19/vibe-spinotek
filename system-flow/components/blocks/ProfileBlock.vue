<template>
  <div class="flex flex-col items-center gap-3">
    <div class="w-16 h-16 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 flex items-center justify-center relative overflow-hidden">
      <div class="absolute inset-0 bg-blue-500/10 animate-pulse"></div>
      <svg class="w-8 h-8 text-slate-400 dark:text-white/20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
    </div>
    <div class="h-2 w-1/3 bg-slate-200 dark:bg-white/10 rounded"></div>
    <div class="flex gap-2 w-full mt-1">
      <div class="h-5 flex-1 bg-blue-500/20 rounded"></div>
      <div class="h-5 flex-1 bg-slate-100 dark:bg-white/5 rounded border border-slate-200 dark:border-white/10"></div>
    </div>
  </div>
</template>
