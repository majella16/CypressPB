class NewsPage 

{
   allContentFilter = '[data-testid=news-filter-button]'

   getFeaturedContentHeader() { return cy.get('[data-testid=page-body] > :nth-child(1)').invoke('text') }
   getAllContentHeader() { return cy.get('[data-testid=page-body] > :nth-child(3)').invoke('text') }
   getFeaturedContentNewsBlock() { return cy.get('[data-testid=page-body] > :nth-child(2)') }
   getAllContentNewsBlock() { return cy.get('[data-testid=page-body] > :nth-child(4)') }
   getallContentnewsgrid() { return cy.get(':nth-child(4) > .card-grid') }
   
   setfilterContent() 
   {
      cy.get(this.allContentFilter).trigger('mouseover')
      return cy.get('[data-testid=news-filter-popover]').contains('Webinar').click({ force: true })

   }
}
export default NewsPage;