<template>
  <div>
    <TopBar>
      <div class="search-results">
        <router-link to="/">
          <span class="back-btn"
            ><LeftArrowIcon class="icon" /></span></router-link
        >Search Results for <span class="search-keyword">"{{ query }}"</span>
      </div>
    </TopBar>
    <ImageGrid :loading="loading" :images="images" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TopBar from "@/components/TopBar.vue";
import ImageGrid from "@/components/ImageGrid.vue";
import LeftArrowIcon from "@/assets/vector/left.svg?inline";
import axiosInstance from "@/services/axios.ts";
import { Image } from "@/types/image";

@Options({
  components: {
    TopBar,
    ImageGrid,
    LeftArrowIcon,
  },
})
export default class Search extends Vue {
  images: Image[] = [];
  loading = true;
  query = "";

  created(): void {
    this.query = this.$route.query?.query as string;
    axiosInstance
      .get("/search/photos?per_page=20&query=" + this.query)
      .then(({ data }) => {
        this.images = data.results as Image[];
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
</script>
