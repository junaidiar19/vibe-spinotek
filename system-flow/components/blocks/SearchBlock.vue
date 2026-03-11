<template>
  <div class="space-y-3">
    <div class="h-10 w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl flex items-center px-3 gap-2">
      <div class="w-3.5 h-3.5 border-2 border-slate-300 dark:border-white/20 rounded-full"></div>
      <div class="h-1.5 w-1/4 bg-slate-100 dark:bg-white/10 rounded"></div>
    </div>
    <div v-for="i in 2" :key="i" class="flex gap-3 items-center opacity-60">
      <div class="w-8 h-8 bg-slate-200 dark:bg-white/5 rounded-lg"></div>
      <div class="flex-1 space-y-1.5">
        <div class="h-1.5 w-1/3 bg-slate-300 dark:bg-white/20 rounded"></div>
        <div class="h-1 w-1/2 bg-slate-100 dark:bg-white/10 rounded"></div>
      </div>
    </div>
  </div>
</template>
