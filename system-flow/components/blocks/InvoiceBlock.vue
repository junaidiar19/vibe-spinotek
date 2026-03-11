<template>
  <div class="flex flex-col gap-2 py-1">
    <div class="flex justify-between items-center mb-1">
      <div class="h-2 w-1/4 bg-slate-400 dark:bg-white/20 rounded"></div>
      <div class="h-1.5 w-1/5 bg-slate-200 dark:bg-white/10 rounded"></div>
    </div>
    <div v-for="i in 3" :key="i" class="flex justify-between border-b border-slate-100 dark:border-white/5 pb-1">
      <div class="h-1 w-1/2 bg-slate-100 dark:bg-white/5 rounded"></div>
      <div class="h-1 w-4 bg-slate-100 dark:bg-white/5 rounded"></div>
    </div>
    <div class="flex justify-between items-center mt-auto pt-1">
      <div class="h-2 w-1/4 bg-blue-500/20 rounded"></div>
      <div class="h-3 w-1/3 bg-blue-500/10 rounded"></div>
    </div>
  </div>
</template>
