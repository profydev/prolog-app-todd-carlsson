describe("Footer", () => {
  beforeEach(() => {
    //open dashboard page
    cy.visit(`http://localhost:3000/dashboard`);
  });
  it("all items are present", () => {
    cy.get("footer").contains(/docs/i);
    cy.get("footer").contains(/api/i);
    cy.get("footer").contains(/help/i);
    cy.get("footer").contains(/community/i);
    cy.get("footer img")
      .should("be.visible")
      .should("have.attr", "src")
      .should("include", "/icons/logo-small.svg");
    cy.get("footer").contains("14.5.2");
  });
});
