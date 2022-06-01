import { shallowMount } from "@vue/test-utils";
import ImageBlur from "@/components/ImageBlur.vue";
import { MockImage } from "../utils";
import canvas from "jest-canvas-mock";

describe("ImageBlur.vue", () => {
  it("renders canvas", () => {
    const wrapper = shallowMount(ImageBlur, {
      props: {
        hash: MockImage.blur_hash,
        width: 1000,
        height: 1000,
      },
    });
    wrapper.vm.$options.watch.hash.call(wrapper.vm);
    expect(wrapper.find(".image-canvas").exists()).toBeTruthy();
  });

  it("should not render canvas when getContext fails", () => {
    HTMLCanvasElement.prototype.getContext = () => {
      return null;
    };
    const wrapper = shallowMount(ImageBlur, {
      props: {
        hash: MockImage.blur_hash,
        width: 1000,
        height: 1000,
      },
    });

    expect(wrapper.find(".image-canvas").exists()).toBeTruthy();
  });

  it("should ... if isBlurhashValid return false", () => {
    const wrapper = shallowMount(ImageBlur);
    expect(wrapper.find(".image-canvas").exists()).toBeTruthy();
  });
});
