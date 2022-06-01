<template>
  <canvas ref="canvas" class="image-canvas" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { decode, isBlurhashValid } from "blurhash";

@Options({
  props: {
    hash: String,
    width: Number,
    height: Number,
  },
  watch: {
    hash() {
      this.draw();
    },
  },
})
export default class ImageBlur extends Vue {
  hash!: string;
  width!: number;
  height!: number;

  mounted(): void {
    this.draw();
  }

  draw(): void {
    const canvasWidth = Math.floor(this.width / 10);
    const canvasHeight = Math.floor(this.height / 10);
    if (this.hash && isBlurhashValid(this.hash)) {
      const pixels = decode(this.hash, canvasWidth, canvasHeight);
      const canvas = this.$refs.canvas as HTMLCanvasElement;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const imageData = ctx.createImageData(canvasWidth, canvasHeight);
        imageData.data.set(pixels);
        ctx.putImageData(imageData, 0, 0);
      }
    }
  }
}
</script>
