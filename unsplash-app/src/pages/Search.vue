<template>
  <div>
    <TopBar>
      <div class="search-results">
        Search Results for <span class="search-keyword">"{{ query }}"</span>
      </div>
    </TopBar>
    <ImageGrid :loading="loading" :images="images" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TopBar from "@/components/TopBar.vue";
import ImageGrid from "@/components/ImageGrid.vue";
import SearchIcon from "@/assets/vector/search.svg?inline";

@Options({
  components: {
    TopBar,
    ImageGrid,
    SearchIcon,
  },
})
export default class Search extends Vue {
  images: number[] = [];
  loading = true;
  query = "";

  created(): void {
    this.query = this.$route.query?.query as string;
    setTimeout(() => {
      this.loading = false;
      this.images = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0,
      ];
    }, 10000);
  }
}
</script>
