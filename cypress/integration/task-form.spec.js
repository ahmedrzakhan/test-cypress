describe("Task input form", () => {
  beforeEach(() => {
    // cy.server();

    // cy.route("GET", "/api/task", "fixture:tasks");
    cy.visit("/");
  });

  it("visit home page focus on input box", () => {
    cy.focused().should("have.class", "task-input"); //selector
  });

  it("type value into input tag", () => {
    const text = "BUY BREAD";

    cy.get(".task-input").type(text).should("have.value", text);
  });
});
