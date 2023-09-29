import capitalize from "lodash/capitalize";
import { ProjectStatus } from "@api/projects.types";
import mockProjects from "../fixtures/projects.json";

const statusColors: { [key: string]: string } = {
  info: "#027A48",
  warning: "#B54708",
  error: "#B42318",
};

function hexToRGB(hex: string) {
  const m: RegExpMatchArray | null = hex.match(
    /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i,
  );
  if (m !== null)
    return {
      r: parseInt(m[1], 16),
      g: parseInt(m[2], 16),
      b: parseInt(m[3], 16),
    };
}

const statusNames: { [key: string]: string } = {
  [ProjectStatus.stable]: "stable",
  [ProjectStatus.warning]: "warning",
  [ProjectStatus.critical]: "critical",
};

describe("Project List", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");

    // wait for request to resolve
    cy.wait("@getProjects");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders the projects", () => {
      const languageNames = ["React", "Node.js", "Python"];

      // get all project cards
      cy.get("main")
        .find("li")
        .each(($el, index) => {
          // check that project data is rendered
          cy.wrap($el).contains(mockProjects[index].name);
          cy.wrap($el).contains(languageNames[index]);
          cy.wrap($el).contains(mockProjects[index].numIssues);
          cy.wrap($el).contains(mockProjects[index].numEvents24h);
          cy.wrap($el).contains(
            capitalize(statusNames[mockProjects[index].status]),
          );
          cy.wrap($el)
            .get('[data-test="project-card-badge"]')
            .should(
              "have.css",
              hexToRGB(statusColors[mockProjects[index].status]),
            );
          cy.wrap($el)
            .find("a")
            .should("have.attr", "href", "/dashboard/issues");
        });
    });
  });
});
