<template>
  <div class="image-container" v-bind:class="{ loading: loading }">
    <div class="image-item" v-for="(image, index) in images" v-bind:key="index">
      <img src="@/assets/image/photo-1.jpeg" alt="" srcset="" />
      <div class="image-overlay">
        <span class="user-name">Jordan Okeke</span>
        <small class="user-location">Pretoria, South Africa</small>
      </div>
    </div>
    <template v-if="loading && images.length == 0">
      <div class="image-item" v-for="num in 10" v-bind:key="num"></div>
    </template>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Image } from "@/types";

@Options({
  props: {
    images: Array,
    loading: Boolean,
  },
})
export default class ImageGrid extends Vue {
  images!: Image[];
  loading!: boolean;
}
</script>
