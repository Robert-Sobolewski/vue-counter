import { mount } from "@vue/test-utils"
import CounterDisplay from './../../src/components/CounterDisplay.vue'
describe('test CounterDisplay component', () => {

    test('render component without props',()=>{
        
        const wrapper = mount(CounterDisplay,{})
        // expect(wrapper.html()).toContain(`<div>
        // <h1></h1>
        // </div>`)
        expect(wrapper.findAll('h1').length).toBe(1)
    }),
    test('pass props to component',()=>{

        const wrapper = mount(CounterDisplay,{
            props:{
                value:7
            }
        })

        expect(wrapper.get('h1').text()).toBe("7")
    })
})