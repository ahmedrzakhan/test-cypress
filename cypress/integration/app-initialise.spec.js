describe("App initialization", () => {
  it("should load data on loading", () => {
    cy.server();

    cy.route("GET", "/api/task", "fixture:tasks");
    cy.visit("/");

    cy.get(".task-list li").should("have.length", 5);
  });
});
