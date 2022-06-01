import { shallowMount, VueWrapper } from "@vue/test-utils";
import ImageModal from "@/components/ImageModal.vue";
import { MockImage } from "../utils";

describe("ImageModal.vue", () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = shallowMount(ImageModal, {
      props: {
        image: MockImage,
        show: true,
      },
      global: { stubs: { CloseIcon: true } },
    });
  });

  it("renders modal", () => {
    expect(wrapper.find(".modal").exists()).toBeTruthy();
  });

  it("shows the modal when the show prop is true", () => {
    expect(wrapper.find(".modal.show").exists()).toBeTruthy();
  });

  it("hides the modal when the show prop is false", () => {
    const hiddenWrapper = shallowMount(ImageModal, {
      props: {
        show: false,
      },
      global: { stubs: { CloseIcon: true } },
    });
    expect(hiddenWrapper.find(".modal").exists()).toBeTruthy();
    expect(hiddenWrapper.find(".modal.show").exists()).toBeFalsy();
  });

  it("should emit onClose when modal overlay or close icon is clicked", () => {
    const modalOverlay = wrapper.find(".overlay");
    const closeIcon = wrapper.find(".close");

    modalOverlay.trigger("click");
    expect(wrapper.emitted().onClose[0]).toEqual([]);

    closeIcon.trigger("click");
    expect(wrapper.emitted().onClose[1]).toEqual([]);
  });

  it("renders ImageBlur", () => {
    expect(wrapper.find("image-blur-stub").exists()).toBeTruthy();
  });

  it("renders image regular url as image src", () => {
    const image = wrapper.find(".modal-image");
    expect(image.attributes().src).toBe(MockImage.urls.regular);
  });

  it("renders modal-desc with details", () => {
    const modalDesc = wrapper.find(".modal-desc");
    expect(modalDesc.exists()).toBeTruthy();
    expect(modalDesc.find(".user-name").text()).toBe(MockImage.user.name);
    expect(modalDesc.find(".user-location").text()).toBe(
      MockImage.user.location
    );
  });
});
