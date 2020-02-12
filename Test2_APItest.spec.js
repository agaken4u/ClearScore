describe('API Testing', () => {
    Cypress.config('baseUrl', 'https://app.clearscore.com/lhttps://app.clearscore.com/api/global/login-service/v3/authorise ')
    it('GET - read',() => { 
        cy.request('Get', '/login-service').then((response) => {
           expect(response).to.have.property('status',200)  
           expect(response.body).to.not.be.null
        })
    })
     it('Post - create',() => { 
        const item = {"email":"agaken4unow@yahoo.com","password":"test1"}
         cy.request('Get', '/https://app.clearscore.com/api/global/login-service/v3/authorise/Post' , item)
})
it('PUT - Update',() => { 
    const item = {"email":"agaken4unow@yahoo.com","password":"test1"}
     cy.request('Get', '/https://app.clearscore.com/api/global/login-service/v3/authorise/update' , item)
})
})