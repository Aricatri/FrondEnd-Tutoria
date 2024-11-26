describe('Verificar flujo de Stripe en el componente Verify', () => {
  beforeEach(() => {
    cy.intercept('POST', '/api/user/verifyStripe', (req) => {
      req.reply({
        statusCode: 200,
        body: {
          success: true,
          message: 'Pago exitoso. Cita confirmada.',
        },
      });
    }).as('verifyStripe');
  });

  it('Debe verificar el pago correctamente y redirigir a "my-appointments"', () => {
    cy.visit('/verify?success=true&appointmentId=12345');

    cy.get('.animate-spin').should('be.visible');

    // Espera a que la solicitud POST se complete
    cy.wait('@verifyStripe');

    cy.contains('Pago exitoso. Cita confirmada.').should('be.visible');

    // Verificamos que se haya realizado la redirección a la página "my-appointments"
    cy.url().should('include', '/my-appointments');
  });

  it('Debe manejar errores cuando la verificación de Stripe falla', () => {

    cy.intercept('POST', '/api/user/verifyStripe', (req) => {
      req.reply({
        statusCode: 400,
        body: {
          success: false,
          message: 'Error al verificar el pago.',
        },
      });
    }).as('verifyStripeError');

    // Visitar la página con parámetros de error
    cy.visit('/verify?success=false&appointmentId=12345');

    cy.get('.animate-spin').should('be.visible');

    // Esperar a que la solicitud POST se complete
    cy.wait('@verifyStripeError');

    // Verificar que la notificación de error aparezca
    cy.contains('Error al verificar el pago.').should('be.visible');

    cy.url().should('include', '/verify');
  });
});
