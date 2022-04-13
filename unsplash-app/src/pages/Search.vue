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
    <VueEternalLoading :load="loadMorePhotos"></VueEternalLoading>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TopBar from "@/components/TopBar.vue";
import ImageGrid from "@/components/ImageGrid.vue";
import LeftArrowIcon from "@/assets/vector/left.svg?inline";
import axiosInstance from "@/services/axios.ts";
import { Image } from "@/types/image";
import { VueEternalLoading, LoadAction } from "@ts-pro/vue-eternal-loading";

const PAGE_SIZE = 20;

@Options({
  components: {
    TopBar,
    ImageGrid,
    LeftArrowIcon,
    VueEternalLoading,
  },
})
export default class Search extends Vue {
  images: Image[] = [];
  loading = true;
  query = "";
  page = 1;

  async created(): Promise<void> {
    this.query = this.$route.query?.query as string;
    const images: Image[] = await this.getPhotos();
    this.images.push(...images);
  }

  async getPhotos(): Promise<Image[]> {
    let images: Image[] = [];
    await axiosInstance
      .get(
        `/search/photos?query=${this.query}&per_page=${PAGE_SIZE}&page=${this.page}`
      )
      .then(({ data }) => {
        images = data.results as Image[];
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.loading = false;
      });

    return images;
  }

  async loadMorePhotos({ loaded }: LoadAction): Promise<void> {
    this.page = this.page + 1;
    this.loading = true;

    const images: Image[] = await this.getPhotos();
    this.images.push(...images);
    loaded(images.length, PAGE_SIZE);
  }
}
</script>
