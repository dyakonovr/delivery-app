<template>
  <div class="container"><slot /></div>
</template>

<style scoped>
.container {
  max-width: var(--container-width);
  padding-left: var(--container-offset);
  padding-right: var(--container-offset);
  margin: 0 auto;
}
</style>
