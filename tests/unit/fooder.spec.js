import { shallowMount } from "@vue/test-utils";
import TheFooter from "@/components/TheFooter.vue";

describe("TheFooder.vue", () => {

    let wrapper = null;
    beforeEach(() => {
        wrapper = shallowMount(TheFooter, () => { });
    });

    it("render footer component", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("find p element", () => {
        expect(wrapper.find('p').text()).toBe('Read about Web performance, and Database management Programming languages.');
    });


}); 