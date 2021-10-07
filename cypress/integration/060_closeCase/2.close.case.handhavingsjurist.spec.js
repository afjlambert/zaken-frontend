import address from "../../fixtures/address.json"

describe('Select Next Step - closing case as handhavingsjurist', () => {

  it("Login as handhavingsjurist", () => {
    cy.loginAsHhj()
  })

  it("Go to Adresoverzicht and check address", () => {
    const url = `${Cypress.env("baseUrlAcc")}addresses/*/cases/?open_cases=true`
    cy.intercept(url).as('getCases')
    cy.visit(`/adres/${address.bagId}`)
    cy.wait('@getCases').then(() => {
      cy.get("h1")
        .contains(`${address.street}, ${address.zipCode}`)
    })
  })

  it("Adresoverzicht has right address", () => {
    cy.get("h1")
      .contains(`${address.street}, ${address.zipCode}`)
  })

  it('Get first case with task "Afsluiten zaak"', () => {
    cy.scrollTo(0, 400)
    cy.get("tbody>tr")
      .contains("td", "Afsluiten zaak")
      .click()
  })

  it("Handhavingsjurist should not be able to close the case", () => {
    const url = `${Cypress.env("baseUrlAcc")}cases/*/tasks/`

    cy.request({
      method: 'GET',
      url: url,
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(401)
    })
  })
})