describe('Visit ClearScore Website', function() {
    it('Home Page', function() {
      cy.visit('https://www.clearscore.com/')

      cy.get('.cookieNotice--3nPfx').should('be.visible')
      cy.get('.component--2CB2l').contains('No problem').click()
      cy.get('.cookieNotice--3nPfx').should('not.visible')
    })

  })

    describe('Sign Up', function() {
      it('Sign Up Page', function() {
        cy.visit('https://www.clearscore.com/')
        cy.get('.component--2CB2l').contains('Log in').click()

        cy.get('.text-link__Oy7O').contains('Create new account').click()
  
      })
      it('Test require field', function() {
        cy.visit('https://www.clearscore.com/')
        cy.get('.component--2CB2l').contains('Log in').click()

        cy.get('.text-link__Oy7O').contains('Create new account').click()
        cy.get('input').click()
        cy.get('.text_5h7tK').contains('Sign up').click()
        cy.get('.text_5h7tK').contains('Required field')
  
      })
      it('Test Invalid email', function() {
        cy.visit('https://www.clearscore.com/')
        cy.get('.component--2CB2l').contains('Log in').click()
        cy.get('.text-link__Oy7O').contains('Create new account').click()
        cy.get('input').type('efe')
        cy.get('.text_5h7tK').contains('Sign up').click()
        cy.get('.text_5h7tK').contains('Please enter a valid email address')
  
      })
      it('Test Valid email', function() {
        cy.visit('https://www.clearscore.com/')
        cy.get('.component--2CB2l').contains('Log in').click()
        cy.get('.text-link__Oy7O').contains('Create new account').click()
        cy.get('input').type('efe@test.com')
        cy.get('.text_5h7tK').contains('Get started').click()
        cy.get('.styles_1SrmQ').contains('1')
      })
      it('Exiting Email Address Notification', function() {
        cy.visit('https://www.clearscore.com/')
        cy.get('.component--2CB2l').contains('Log in').click()
        cy.get('.text-link__Oy7O').contains('Create new account').click()
        cy.get('input').type('test@test.com')
        cy.get('.text_5h7tK').contains('Get started').click()
        cy.get('.notification_3nKuR').should('be.visible')
        


      })
    })
