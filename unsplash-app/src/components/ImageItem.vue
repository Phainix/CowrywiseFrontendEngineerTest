<template>
  <div class="image-item">
    <img :src="thumbnail" alt="" srcset="" />
    <div class="image-overlay">
      <span class="user-name">{{ name }}</span>
      <small class="user-location">{{ location }}</small>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Image } from "@/types";

@Options({
  props: {
    image: Object,
  },
})
export default class ImageItem extends Vue {
  image!: Image;
  thumbnail = "";
  name = "";
  location = "";

  created(): void {
    console.log(this.image);
    if (this.image) {
      this.thumbnail = this.image.urls.thumbnail;
      this.name = this.image.user.name;
      this.location = this.image.user.location;
    }
  }
}
</script>
