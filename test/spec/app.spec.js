/* Remember that blanket will only work with brackets live preview */
/* Try to maximise the coverage of the ParlaModel object */

describe("ParolaModel", function() {
    
    it("Testa la stringa ciao", function() {  
    
      expect(ParolaModel.getCurrentWord("ciao")).toBe(1);
    })
    
     it("Testa l'intero 12", function() {  
    
      expect(ParolaModel.getCurrentWord(12)).toBe(-1);
    })
     
     it("Testa la parola cdfc", function() {  
    
      expect(ParolaModel.getCurrentWord("cdfc")).toBe(2);
    })
     
     it("Testa null", function() {  
    
      expect(ParolaModel.getCurrentWord(null)).toBe(-1);
    })
      
 
});
