describe("Página de Inicio", () => {
  it("Verifica que la página cargue correctamente", () => {
    cy.visit("/");
    cy.contains("La mejor experiencia para tus tutorias te está esperando!", { timeout: 10000 }) ;
  });
});
