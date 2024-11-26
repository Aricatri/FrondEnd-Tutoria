describe('Verificar formulario de inicio de sesión', () => {
  it('El formulario debe permitir ingresar credenciales y hacer login', () => {
    // Visita la página de login (cambia la URL si es diferente)
    cy.visit('/login');

    // Verifica que el formulario de login esté visible
    cy.get('form').should('be.visible');

    // Completa el formulario de login
    cy.get('input[name="email"]').type('usuario@ejemplo.com');
    cy.get('input[name="password"]').type('contraseña');

    // Envía el formulario
    cy.get('form').submit();

    // Espera que se realice la redirección (suponiendo que redirige después de login)
    cy.url().should('include', '/dashboard'); // Cambia esto según la URL de redirección

    // Verifica que el mensaje de bienvenida esté presente
    cy.contains('Bienvenido');  // Cambia esto según el texto en tu página de destino
  });
});
