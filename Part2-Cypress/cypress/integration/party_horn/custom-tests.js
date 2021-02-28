describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(($el)=>{
      expect($el).to.have.value(75);
    })
  });

  it('Volume input changes when slider changes', () => {    
    cy.get('#volume-slider').invoke('val','33').trigger('input');
    cy.get('#volume-number').then(($el)=>{
      expect($el).to.have.value(33);
    })
  });


  it('volume of audio element change wehn change value of', () => {    
    cy.get('#volume-slider').invoke('val','33').trigger('input');
    cy.get('#horn-sound').then(($el)=>{
      expect($el).to.have.prop('volume',0.33);
    })
    });


    //Rest of the tests that are need to implement:
    
  it('image and sound change as we select the party horn radio button', () => {    
    cy.get('#radio-party-horn').click();

    cy.get('#horn-sound').then(($el)=>{
      expect($el).to.have.attr('src','./assets/media/audio/party-horn.mp3');
    })

    cy.get('#sound-image').then(($el)=>{
      expect($el).to.have.attr('src','./assets/media/images/party-horn.svg');
    })
    });


    it('volume image changes when increasing volumes', () => {    

      cy.get('#volume-number').clear().type('0');
      cy.get('#volume-image').then(($el)=>{
        expect($el).to.have.attr('src','./assets/media/icons/volume-level-0.svg');
      })
      
      cy.get('#volume-number').clear().type('1');
      cy.get('#volume-image').then(($el)=>{
        expect($el).to.have.attr('src','./assets/media/icons/volume-level-1.svg');
      })
      cy.get('#volume-number').clear().type('33');
      cy.get('#volume-image').then(($el)=>{
        expect($el).to.have.attr('src','./assets/media/icons/volume-level-1.svg');
      })

      cy.get('#volume-number').clear().type('34');
      cy.get('#volume-image').then(($el)=>{
        expect($el).to.have.attr('src','./assets/media/icons/volume-level-2.svg');
      })

      cy.get('#volume-number').clear().type('50');
      cy.get('#volume-image').then(($el)=>{
        expect($el).to.have.attr('src','./assets/media/icons/volume-level-2.svg');
      })
      
      cy.get('#volume-number').clear().type('66');
      cy.get('#volume-image').then(($el)=>{
        expect($el).to.have.attr('src','./assets/media/icons/volume-level-2.svg');
      })

      cy.get('#volume-number').clear().type('67');
      cy.get('#volume-image').then(($el)=>{
        expect($el).to.have.attr('src','./assets/media/icons/volume-level-3.svg');
      })

      cy.get('#volume-number').clear().type('100');
      cy.get('#volume-image').then(($el)=>{
        expect($el).to.have.attr('src','./assets/media/icons/volume-level-3.svg');
      })

    

     
    });



    it('honk button is disabled when the textbox input is empty or a non-number', () => {   
      
      cy.get('#volume-number').invoke('val','').trigger('input');
      cy.get('#honk-btn').then(($el)=>{
           expect($el).to.have.prop('disabled',true);
          })

      cy.get('#volume-number').invoke('val','A').trigger('input');
      cy.get('#honk-btn').then(($el)=>{
          expect($el).to.have.prop('disabled',true);
          })
      });
    


      it('error shows when type the number outside of the range for textbox input', () => {    

      cy.get('#volume-number').clear().type('123');
      cy.get('#volume-number').then($el =>
        $el[0].checkValidity()).should('be.false')

      cy.get('#volume-number').invoke('prop', 'validationMessage')
      .should('equal', 'Value must be less than or equal to 100.')
})
  ;
});
