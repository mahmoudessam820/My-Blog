import { shallowMount } from "@vue/test-utils";
import TheHeader from "@/components/TheHeader.vue";

describe("TheHeader.vue", () => {

  let wrapper = null;
  beforeEach(() => {
    wrapper = shallowMount(TheHeader, {});
  });

  it("renders header component", () => {
    expect(wrapper.exists()).toBe(true);
  });

});
