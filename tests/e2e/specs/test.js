// https://docs.cypress.io/api/table-of-contents
import yaml from 'js-yaml'

describe('Viewer', () => {
  it('should work on every url', () => {
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
          - j
      j:
        exclude: 
          - i
      k:`

    const testOject = yaml.load(testData)
    const maxNumberOfExcludes = 2
    const numberTests = Object.keys(testOject).length - 1 - maxNumberOfExcludes// Can be between 1-(n-1-e)
    for (let i = 1; i <= numberTests; i++) {//Test every feasible amount of gift assignments
      cy.visit('/')
      cy.get('#input-0').clear().type(i) // Can be between 1-(n-1-e)
      cy.get('textarea').invoke('val', testData).trigger('input') // Input data
      cy.get('button').click().wait(500) // Let the ui process the data
      cy.get('ul li code').each((link) => { // Open all the links to make sure they work
        cy.visit(link.text())
        cy.contains('You have been assigned:') // Make sure the dialog comes up
        cy.get('ul li').should('have.length', i) // Make sure the number of assignments is correct
      })
    }
  })
})
