<template>
  <div class="space-y-2">
    <div v-for="i in 3" :key="i" class="p-2 border border-slate-100 dark:border-white/5 rounded-lg flex justify-between items-center bg-white dark:bg-white/[0.02]">
      <div class="h-1.5 w-3/4 bg-slate-300 dark:bg-white/10 rounded"></div>
      <div class="w-2 h-2 border-r border-b border-slate-400 dark:border-white/20 rotate-45 mb-1"></div>
    </div>
  </div>
</template>
