import { shallowMount } from "@vue/test-utils";
import TopBar from "@/components/TopBar.vue";

describe("TopBar.vue", () => {
  it("renders content passed into it", () => {
    const wrapper = shallowMount(TopBar, {
      slots: {
        default: [
          '<div id="test-content">Test content in top bar</div>'
        ]
      }
    });
    expect(wrapper.find('.top-bar').exists()).toBeTruthy();
    expect(wrapper.find('#test-content').exists()).toBeTruthy();
    expect(wrapper.find('#test-content').text()).toContain("Test content in top bar");
  });
});
