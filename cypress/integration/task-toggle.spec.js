describe("Toggle Task", () => {
  it("add a new item on submit of form, and one checkbox", () => {
      cy.visit("/");
      const text = "BUY MILK";

      
      cy.server();
      cy.route("POST", "/api/task", {
        title: text,
        id: 1,
        completed: false,
      });
    cy.get(".task-input").type(text).type("{enter}");

    cy.get(".task-list li").should("have.length", 1).and("contain", text);

    cy.get('[type="checkbox"]').check()       // Check checkbox element

    // cy.get(".status").check()
  });
});
