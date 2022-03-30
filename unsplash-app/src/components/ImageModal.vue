<template>
  <div class="modal" v-bind:class="{ show: show }">
    <div class="overlay" v-on:click="closeModal"></div>
    <span v-on:click="closeModal" class="close">
      <CloseIcon />
    </span>
    <div class="modal-content">
      <img src="@/assets/image/photo-5.jpeg" class="modal-image" />
      <div class="modal-desc">
        <span class="user-name">Jordan Okeke</span>
        <span class="user-location">Pretoria, South Africa</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Image } from "@/types";
import CloseIcon from "@/assets/vector/close.svg?inline";

@Options({
  props: {
    image: Object,
    show: Boolean,
  },
  components: {
    CloseIcon,
  },
  emits: ["onClose"],
})
export default class ImageModal extends Vue {
  image!: Image;
  show = false;

  created(): void {
    console.log(Image, this.image);
  }

  closeModal(): void {
    this.$emit("onClose");
  }
}
</script>
