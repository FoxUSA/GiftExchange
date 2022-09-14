import { shallowMount } from '@vue/test-utils'
import Generator from '../../src/components/Generator.vue' // Required a npm install --save-dev @babel/preset-env to work
import yaml from 'js-yaml'

describe('Generator.vue', () => {
  it('respects exclusion', () => {
    const testData = `
      mom:
        exclude:
          - dad
          - sister
      dad:
        exclude:
          - mom
      sister:
        exclude:
          - dad
      brother:`

    const expected = `
      mom:
        - brother
      dad:
        - sister
      sister:
        - mom
      brother:
        - dad`

    const wrapper = shallowMount(Generator)
    const testOject = yaml.load(testData)
    expect(wrapper.vm.match(testOject)).toMatchObject(yaml.load(expected))
    expect(() => { wrapper.vm.match(testOject, 2) }).toThrowError(/Failed to come up with a solution/)
  })

  it('should work', () => {
    const testData = `
      a:
        exclude: 
          - b
          - c
      b:
        exclude:
          - a
          - c
      c:
        exclude: 
          - a
          - b
      d:
        exclude: 
          - e
      e:
        exclude: 
          - d
      f:
      g:
        exclude: 
          - h
      h:
        exclude: 
          - g
      i:
        exclude: 
          - 🛑j
      🛑j:
        exclude: 
          - i
      k:`

    const wrapper = shallowMount(Generator)
    const testOject = yaml.load(testData)

    const numberTests = 1000
    const maxNumberOfExcludes = 2
    for (let i = 0; i < numberTests; i++) {
      const giftNumber = Math.floor(Math.random() * (Object.keys(testOject).length - 1 - maxNumberOfExcludes)) + 1 // Can be between 1-(n-1-e)
      console.log(`Number of keys ${Object.keys(testOject).length}. Picked test number: ${giftNumber}`)
      const output = wrapper.vm.match(testOject, giftNumber)

      for (const person in output) {
        expect(output[person].length).toBe(giftNumber)// Test we did indeed get a match

        if (testOject[person] && testOject[person].exclude && testOject[person].exclude.length) {
          expect(output[person]).toEqual(
            expect.not.arrayContaining(testOject[person].exclude) // Test to make sure none of our excluded people were picked
          )
        }

        expect(output[person]).toEqual(
          expect.not.arrayContaining([person]) // Make sure we didn't pick ourselves
        )
      }
    }
  })

  // it('renders props.msg when passed', () => {
  //   const msg = 'new message'
  //   const wrapper = shallowMount(HelloWorld, {
  //     props: { msg }
  //   })
  //   expect(wrapper.text()).toMatch(msg)
  // })
})
