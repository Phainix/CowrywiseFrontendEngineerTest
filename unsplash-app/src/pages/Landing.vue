<template>
  <div>
    <TopBar>
      <form @submit.prevent="onSubmit">
        <div class="input-group">
          <button type="submit" id="search-btn"><SearchIcon /></button>
          <input
            type="text"
            name="query"
            id="query"
            placeholder="Search for photo"
            v-model="query"
          />
        </div>
      </form>
    </TopBar>
    <ImageGrid :loading="loading" :images="images" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TopBar from "@/components/TopBar.vue";
import ImageGrid from "@/components/ImageGrid.vue";
import SearchIcon from "@/assets/vector/search.svg?inline";
import { Image } from "@/types";

@Options({
  components: {
    TopBar,
    ImageGrid,
    SearchIcon,
  },
})
export default class Landing extends Vue {
  images: number[] = [];
  loading = true;
  query = "";

  created(): void {
    setTimeout(() => {
      this.loading = false;
      this.images = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0,
      ];
    }, 10000);
  }

  onSubmit(): void {
    console.log(this.query);
    this.$router.push({ path: "search", query: { query: this.query } });
  }
}
</script>
