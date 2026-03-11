<template>
  <div class="space-y-2">
    <div v-for="i in 3" :key="i" class="flex gap-2 items-start opacity-70">
      <div class="w-6 h-6 bg-slate-200 dark:bg-white/10 rounded-full shrink-0"></div>
      <div class="flex-1 space-y-1">
        <div class="h-1.5 w-1/4 bg-slate-300 dark:bg-white/20 rounded"></div>
        <div class="h-1 w-full bg-slate-100 dark:bg-white/5 rounded"></div>
      </div>
    </div>
  </div>
</template>
