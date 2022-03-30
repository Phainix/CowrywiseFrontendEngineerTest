<template>
  <div class="image-container" v-bind:class="{ loading: loading }">
    <ImageItem
      v-for="(image, index) in images"
      v-bind:key="index"
      :image="image"
      v-on:click="openModal"
    />
    <template v-if="loading && images.length == 0">
      <ImageItem v-for="num in 10" v-bind:key="num" />
    </template>
  </div>
  <ImageModal :show="showModal" :image="selectedImage" @onClose="closeModal" />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Image } from "@/types";
import ImageItem from "@/components/ImageItem.vue";
import ImageModal from "@/components/ImageModal.vue";

@Options({
  props: {
    images: Array,
    loading: Boolean,
  },
  components: {
    ImageItem,
    ImageModal,
  },
})
export default class ImageGrid extends Vue {
  images!: Image[];
  loading!: boolean;
  selectedImage: Image | null = null;
  showModal = false;

  openModal(): void {
    console.log("parent modal");
    this.showModal = true;
  }

  closeModal(): void {
    console.log("closing modal");
    this.showModal = false;
  }
}
</script>
