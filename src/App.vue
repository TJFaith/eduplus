<template>
  <div id="app">
   <app-header></app-header>
    <div class="pageHight">
      <router-view/>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<style>
  .pageHight{
    min-height: 100vh;
  }
</style>
