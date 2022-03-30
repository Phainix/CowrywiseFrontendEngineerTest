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
import axiosInstance from "@/services/axios.ts";
import { Image } from "@/types/image";

@Options({
  components: {
    TopBar,
    ImageGrid,
    SearchIcon,
  },
})
export default class Landing extends Vue {
  images: Image[] = [];
  loading = true;
  query = "";

  created(): void {
    axiosInstance
      .get("/photos")
      .then(({ data }) => {
        this.images = data as Image[];
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.loading = false;
      });
  }

  onSubmit(): void {
    if (this.query == "") return;
    this.$router.push({ path: "search", query: { query: this.query } });
  }
}
</script>
