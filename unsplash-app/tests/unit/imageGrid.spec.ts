import { shallowMount } from "@vue/test-utils";
import ImageGrid from "@/components/ImageGrid.vue";
import { MockImage } from "../utils";

describe("TopBar.vue", () => {
  it("renders image-container", () => {
    const wrapper = shallowMount(ImageGrid, {
      props: {},
    });
    expect(wrapper.find(".image-container").exists()).toBeTruthy();
  });

  it("renders image-item-loading if the loading prop is true", () => {
    const wrapper = shallowMount(ImageGrid, {
      props: {
        loading: true,
      },
    });
    expect(wrapper.find(".image-container.loading").exists()).toBeTruthy();
    expect(wrapper.find(".image-item-loading").exists()).toBeTruthy();
  });

  it("renders image-items if the images prop is passed", () => {
    const wrapper = shallowMount(ImageGrid, {
      props: {
        images: [MockImage],
      },
      global: { stubs: { ImageItem: false } },
    });
    expect(wrapper.find(".image-container").exists()).toBeTruthy();
    const imageItem = wrapper.find(".image-item");
    expect(imageItem.exists()).toBeTruthy();
    expect(imageItem.find(".user-name").text()).toBe(MockImage.user.name);
    expect(imageItem.find(".user-location").text()).toBe(MockImage.user.location);
  });
});
