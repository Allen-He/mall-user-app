<template>
  <div
    class="item"
    :style="{
      transform: `translate(${moveX}px,${moveY}px) scale(${sx},${sy})`,
      width: width + 'px',
      height: height + 'px',
      opacity,
    }"
    v-if="exist"
  >
    <img :src="imgSrc" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.item {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  transition: all .7s;
}
.item > img {
  width: 100%;
  border-radius: 50%;
}
</style>
