import { shallowMount } from "@vue/test-utils";
import ImageItem from "@/components/ImageItem.vue";
import { MockImage, IncompleteMockImage } from "../utils";

describe("ImageItem.vue", () => {
  it("renders image-item", () => {
    const wrapper = shallowMount(ImageItem, {
      props: {
        image: IncompleteMockImage,
      },
    });
    expect(wrapper.find(".image-item").exists()).toBeTruthy();
  });

  it("renders ImageBlur", () => {
    const wrapper = shallowMount(ImageItem, {
      props: {
        image: null,
      },
    });
    expect(wrapper.find("image-blur-stub").exists()).toBeTruthy();
  });

  it("renders image small url as image src", () => {
    const wrapper = shallowMount(ImageItem, {
      props: {
        image: MockImage,
      },
    });
    const image = wrapper.find(".image");
    expect(image.attributes().src).toBe(MockImage.urls.small);
  });

  it("renders image-overlay with details", () => {
    const wrapper = shallowMount(ImageItem, {
      props: {
        image: MockImage,
      },
    });
    const imageItem = wrapper.find(".image-item");
    expect(imageItem.exists()).toBeTruthy();
    expect(imageItem.find(".user-name").text()).toBe(MockImage.user.name);
    expect(imageItem.find(".user-location").text()).toBe(
      MockImage.user.location
    );
  });
});
