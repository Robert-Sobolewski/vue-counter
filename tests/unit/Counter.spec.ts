import { mount } from "@vue/test-utils"
import Counter from '../../src/components/Counter.vue'

describe('testing Counter component', () => {

    test('render component', async() => {

        const wrapper = mount(Counter,{})

        const h1 = wrapper.get('h1')
        const addBtn = wrapper.find('[data-testid="addBtn"]')
        await addBtn.trigger('click')
        expect(wrapper.get('h1').text()).toEqual("1")
    })
})