import { flushPromises, mount } from "@vue/test-utils"
import axios from "axios"
import Controls from '../../src/components/Controls.vue'

describe('testing Controls component', () => {

    jest.spyOn(axios,'get').mockResolvedValue({data:9})

    test('rendering component', () => {
        const wrapper = mount(Controls,{})

        expect(wrapper.findAll('button').length).toBe(3)
    })
    test('emit add event', async() => {
        const wrapper = mount(Controls,{})

        const addBtn = wrapper.find('[data-testid="addBtn"]')
       
       await addBtn.trigger('click')
        expect(wrapper.emitted()).toHaveProperty('add')
        expect(wrapper.emitted('add')![0]).toEqual([1])
    })
    test('emit sub event', async() => {
        const wrapper = mount(Controls,{})
        const subBtn = wrapper.find('[data-testid="subBtn"]')
        await subBtn.trigger('click')
        expect(wrapper.emitted()).toHaveProperty('add')
        expect(wrapper.emitted('add')![0]).toEqual([-1])

       
    })
    // test('emit rnd event', async() => {
    //     const wrapper = mount(Controls,{})

    //     const rndBtn = wrapper.find('[data-testid="rndBtn"]')
      
    //     await rndBtn.trigger('click')
    //     await flushPromises()
    //     expect(wrapper.emitted()).toHaveProperty('add')
    //     expect(wrapper.emitted('add')![0]).toEqual([9])
    // })
})