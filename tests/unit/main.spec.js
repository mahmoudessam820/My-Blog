import { shallowMount } from "@vue/test-utils";
import TheMain from "@/components/TheMain.vue";

describe("TheMain.vue", () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(TheMain, {});
  });

  it("renders the main component", () => {
    expect(wrapper.exists()).toBe(true);
  });

});