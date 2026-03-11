<template>
  <div class="space-y-4">
    <div v-for="i in 3" :key="i" class="relative pl-4 border-l border-slate-200 dark:border-white/10">
      <div class="absolute left-[-4.5px] top-0 w-2 h-2 rounded-full border border-blue-500 bg-white dark:bg-black"></div>
      <div class="space-y-1">
        <div class="h-1.5 w-1/4 bg-slate-200 dark:bg-white/10 rounded"></div>
        <div class="h-1 w-3/4 bg-slate-100 dark:bg-white/5 rounded"></div>
      </div>
    </div>
  </div>
</template>
