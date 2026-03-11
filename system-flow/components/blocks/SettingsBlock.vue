<template>
  <div class="space-y-2.5">
    <div v-for="i in 3" :key="i" class="flex items-center justify-between p-1.5 bg-white dark:bg-white/5 rounded-lg border border-slate-100 dark:border-white/5">
      <div class="h-1.5 w-1/3 bg-slate-200 dark:bg-white/10 rounded"></div>
      <div class="w-5 h-2.5 bg-blue-500/20 rounded-full flex items-center px-0.5">
        <div class="w-1.5 h-1.5 bg-blue-500 rounded-full" :class="i === 2 ? 'ml-auto' : ''"></div>
      </div>
    </div>
  </div>
</template>
