<template>
  <div class="text-a--red">
    aaaa
    <component :is="'style'" lang="scss"
      >.text-a{ &--red{ color: red } }</component
    >
  </div>
</template>

<script>
export default {
  auth: false,
};
</script>

<style lang="scss" scoped>
.text-a {
  &--red {
    color: red;
  }
}
</style>
