import { version } from "package.json";
import { footerLinkProps } from "@features/layout";
import uuid from "react-uuid";

const footerLinks: footerLinkProps[] = [
  {
    id: uuid(),
    name: "Docs",
    href: "#",
  },
  {
    id: uuid(),
    name: "API",
    href: "#",
  },
  {
    id: uuid(),
    name: "Help",
    href: "#",
  },
  {
    id: uuid(),
    name: "Community",
    href: "#",
  },
];

describe("Footer", () => {
  beforeEach(() => {
    //open dashboard page
    cy.visit(`http://localhost:3000/dashboard`);
  });
  it("all items are present", () => {
    //check that each link is working and in the correct order
    cy.get("footer")
      .find("a")
      .each(($el, index) => {
        cy.wrap($el)
          .contains(footerLinks[index].name)
          .should("have.attr", "href");
      });
    //check for logo image
    cy.get("footer img")
      .should("be.visible")
      .should("have.attr", "src")
      .should("include", "/icons/logo-small.svg");
    cy.get("footer").contains(`Version: ${version}`);
  });
});
