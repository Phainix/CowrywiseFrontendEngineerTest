<template>
  <div class="modal" v-bind:class="{ show: show }">
    <div class="overlay" v-on:click="closeModal"></div>
    <span v-on:click="closeModal" class="close">
      <CloseIcon />
    </span>
    <div class="modal-content">
      <ImageBlur
        :hash="image?.blur_hash"
        :width="image?.width"
        :height="image?.height"
      />
      <img :src="image?.urls.regular" class="modal-image" />
      <div class="modal-desc">
        <span class="user-name">{{ image?.user.name }}</span>
        <span class="user-location">{{
          image?.user.location ?? image?.user.bio
        }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Image } from "@/types/image";
import CloseIcon from "@/assets/vector/close.svg?inline";
import ImageBlur from "@/components/ImageBlur.vue";

@Options({
  props: {
    image: Object,
    show: Boolean,
  },
  components: {
    CloseIcon,
    ImageBlur,
  },
  emits: ["onClose"],
})
export default class ImageModal extends Vue {
  image!: Image;
  show = false;

  closeModal(): void {
    this.$emit("onClose");
  }
}
</script>
