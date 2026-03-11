<template>
  <div class="h-full flex flex-col justify-center items-center gap-4">
    <div class="flex gap-2">
      <div v-for="i in 4" :key="i" class="w-8 h-10 border-2 border-slate-200 dark:border-white/10 rounded-lg bg-white/50 dark:bg-black/20 flex items-center justify-center">
        <div class="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
      </div>
    </div>
    <div class="h-1.5 w-1/2 bg-slate-200 dark:bg-white/10 rounded"></div>
  </div>
</template>
