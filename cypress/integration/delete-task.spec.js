describe("App initialization", () => {
  it("delete task from todos", () => {
    cy.server();
    cy.route("GET", "/api/task", "fixture:tasks");
    cy.visit("/");

    cy.get(".task-list li").should("have.length", 5);
    cy.get("#1").click();
    cy.get(".task-list li").should("have.length", 4);
  });
});
