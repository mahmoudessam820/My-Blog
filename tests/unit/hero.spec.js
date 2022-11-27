import { shallowMount } from "@vue/test-utils";
import TheHero from "@/components/TheHero.vue";

describe("TheHero.vue", () => {

    let wrapper = null;
    beforeEach(() => {
        wrapper = shallowMount(TheHero, () => { });
    });

    it("render hero component", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("find p element", () => {
        expect(wrapper.find('p').text()).toBe("Specialized in web-development");
    });
});