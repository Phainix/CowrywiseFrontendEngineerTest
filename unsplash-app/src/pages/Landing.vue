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
    <VueEternalLoading :load="loadMorePhotos"></VueEternalLoading>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TopBar from "@/components/TopBar.vue";
import ImageGrid from "@/components/ImageGrid.vue";
import SearchIcon from "@/assets/vector/search.svg?inline";
import axiosInstance from "@/services/axios.ts";
import { Image } from "@/types/image";
import { VueEternalLoading, LoadAction } from "@ts-pro/vue-eternal-loading";

const PAGE_SIZE = 20;

@Options({
  components: {
    TopBar,
    ImageGrid,
    SearchIcon,
    VueEternalLoading,
  },
})
export default class Landing extends Vue {
  images: Image[] = [];
  loading = true;
  query = "";
  page = 1;

  async created(): Promise<void> {
    const images: Image[] = await this.getPhotos();
    this.images.push(...images);
  }

  async getPhotos(): Promise<Image[]> {
    let images: Image[] = [];
    await axiosInstance
      .get(`/photos/random?count=${PAGE_SIZE}&page=${this.page}`)
      .then(({ data }) => {
        images = data as Image[];
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

  onSubmit(): void {
    if (this.query == "") return;
    this.$router.push({ path: "search", query: { query: this.query } });
  }
}
</script>
