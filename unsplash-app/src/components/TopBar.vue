<template>
  <div class="top-bar">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {},
})
export default class TopBar extends Vue {}
</script>
