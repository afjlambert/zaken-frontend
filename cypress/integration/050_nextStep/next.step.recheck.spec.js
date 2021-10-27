import debrief from "../../fixtures/debrief.json"
import address from "../../fixtures/address.json"

describe('Select Next Step - closing case"', () => {

  it("Go to Adresoverzicht and check address", () => {
    const url = `${Cypress.env("baseUrlAcc")}addresses/*/cases/?open_cases=true`
    cy.intercept(url).as('getCases')
    cy.visit(`/adres/${address.bagId}`)
    cy.wait('@getCases').then(() => {
      cy.get("h1")
        .contains(`${address.street}, ${address.zipCode}`)
    })
  })

  it("Select case by caseId", () => {
    cy.scrollTo(0, 400)
    cy.getCaseId().then((e) => {
      cy.log('caseId =>', e.id)
      cy.get("tbody>tr")
        .contains("td", e.id)
        .click()
    })
  })

  it("Select to close this case", () => {
    const url = `${Cypress.env("baseUrlAcc")}cases/*/tasks/`
    cy.intercept(url).as('getNextTask')

    cy.wait('@getNextTask').then(() => {

    // check dueDate
    cy.get("tbody>tr>td").eq(3)
      .should("contain", "-")
    
    cy.get('button')
      .contains("Taak afronden")
      .should("have.length", 1)
      .click({force: true})
    })
    
    cy.get(`[role="dialog"]`)
      .should('have.length', 1)
      .and("contain", debrief.closingTask1)
    cy.get('[data-e2e-id="next_step"]')
      .select(debrief.closingTask3)

    cy.get(`[data-e2e-id="submit"]`)
      .click()
  })

  it("Request is successfully processed", () => {
    const url = `${Cypress.env("baseUrlAcc")}cases/*/events/`
    cy.intercept(url).as('getEvents')
    cy.wait('@getEvents').then(() => {
    cy.get("h1").contains("Zaakdetails")
    cy.get("tbody>tr>td").eq(1)
      .should("contain", "Inplannen Hercontrole")
    cy.history("Uitzetten vervolgstap", "Uitvoerder")
    })
  })

})
