<template>
  <div class="flex gap-2 h-full">
    <div v-for="i in 2" :key="i" class="flex-1 border border-slate-200 dark:border-white/10 rounded-lg p-2 flex flex-col gap-2" :class="i===2 ? 'bg-blue-500/5 border-blue-500/30' : ''">
      <div class="h-1.5 w-1/2 bg-slate-300 dark:bg-white/10 rounded"></div>
      <div class="h-4 w-3/4 bg-slate-400 dark:bg-white/20 rounded"></div>
      <div class="space-y-1 mt-auto">
        <div class="h-1 w-full bg-slate-100 dark:bg-white/5 rounded"></div>
        <div class="h-1 w-full bg-slate-100 dark:bg-white/5 rounded"></div>
      </div>
    </div>
  </div>
</template>
