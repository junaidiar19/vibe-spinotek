<template>
  <div class="h-2 w-1/3 bg-slate-200 dark:bg-white/10 rounded self-center mb-2"></div>
  <div class="space-y-2 w-3/4 self-center">
    <div class="h-5 w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded"></div>
    <div class="h-5 w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded"></div>
    <div v-if="type === 'register'" class="h-5 w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded"></div>
    <div class="h-5 w-full bg-blue-500/20 rounded mt-1"></div>
  </div>
</template>

<script setup>
defineProps(['type']);
</script>
