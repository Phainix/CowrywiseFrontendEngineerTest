<template>
  <div class="image-item">
    <ImageBlur
      :hash="image?.blur_hash"
      :width="image?.width"
      :height="image?.height"
    />
    <img :src="thumbnail" alt="" srcset="" class="image" />
    <div class="image-overlay">
      <span class="user-name">{{ name }}</span>
      <small class="user-location">{{ location ?? bio }}</small>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Image } from "@/types/image";
import ImageBlur from "@/components/ImageBlur.vue";

@Options({
  props: {
    image: Object,
  },
  components: {
    ImageBlur,
  },
})
export default class ImageItem extends Vue {
  image!: Image;
  thumbnail = "";
  name = "";
  location = "";
  bio = "";

  created(): void {
    if (this.image) {
      this.thumbnail = this.image.urls?.small;
      this.name = this.image.user?.name;
      this.location = this.image.user?.location;
      this.bio = this.image.user?.bio;
    }
  }
}
</script>
