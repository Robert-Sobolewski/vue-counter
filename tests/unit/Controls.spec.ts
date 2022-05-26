import { mount } from "@vue/test-utils"
import Controls from '../../src/components/Controls.vue'

describe('testing Controls component', () => {

    test('rendering component', () => {
        const wrapper = mount(Controls,{})

        expect(wrapper.findAll('button').length).toBe(3)
    })
    test('emit add event', async() => {
        const wrapper = mount(Controls,{})

        const addBtn = wrapper.find('[data-testid="addBtn"]')
        const subBtn = wrapper.find('[data-testid="subBtn"]')
        const rndBtn = wrapper.find('[data-testid="rndBtn"]')
       await addBtn.trigger('click')
        expect(wrapper.emitted()).toHaveProperty('add')
        expect(wrapper.emitted('add')![0]).toEqual([1])

        await subBtn.trigger('click')
        expect(wrapper.emitted()).toHaveProperty('add')
        expect(wrapper.emitted('add')![1]).toEqual([-1])

        await rndBtn.trigger('click')
        expect(wrapper.emitted()).toHaveProperty('add')
    })
})