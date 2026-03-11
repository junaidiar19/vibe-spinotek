<template>
  <div class="flex flex-col gap-2">
    <div class="flex justify-between items-center mb-1">
      <div class="h-2 w-1/4 bg-slate-200 dark:bg-white/10 rounded"></div>
      <div class="flex gap-1"><div class="w-2 h-2 bg-slate-200 dark:bg-white/10 rounded"></div><div class="w-2 h-2 bg-slate-200 dark:bg-white/10 rounded"></div></div>
    </div>
    <div class="grid grid-cols-7 gap-1 text-center">
      <div v-for="i in 21" :key="i" class="aspect-square bg-slate-50 dark:bg-white/[0.03] rounded-md flex items-center justify-center border border-slate-100 dark:border-white/5">
        <div v-if="[4, 12, 18].includes(i)" class="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_4px_rgba(59,130,246,0.5)]"></div>
      </div>
    </div>
  </div>
</template>
