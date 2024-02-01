/// <reference types="cypress" />

describe('Testes para a home', () => {
    beforeEach(() => {
      cy.visit('https://agenda-contatos-react.vercel.app/')
    })
  
    it('Deve incluir um novo contato', () => {
      cy.get('[type="text"]').type('Dirlan Teste')
      cy.get('[type="email"]').type('teste@teste.com')
      cy.get('[type="tel"]').type('31999999999')
      cy.get('.adicionar').click()
      cy.get('.sc-beqWaB').last().should('contain', 'teste@teste.com')
    })
  
    it('Deve editar um contato', () => {
      cy.get('.sc-beqWaB').last().find('.edit').click()
      cy.get('[type="text"]').clear().type('Dirlan Teste Editado')
      cy.get('.alterar').click()
      cy.get('.sc-beqWaB').last().should('contain', 'Dirlan Teste Editado')
    })
  
    it('Deve excluir um contato', () => {
      cy.get('.sc-beqWaB').last().find('.delete').click()
      cy.get('.sc-beqWaB').last().should('not.contain', 'teste@teste.com') 
    })
  })