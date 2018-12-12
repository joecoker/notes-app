describe("Note", function() {
  
  describe(".text", function() {
    it("Should return 'Hello World'", function() {
      SpecSetup();
      expect(note.text).toEqual("Hello World");
    }) 
  })

  describe(".returnText()", function() {
    it("Should return 'Hello World'", function() {
      SpecSetup();
      expect(note.returnText()).toEqual("Hello World");
    })
  })
})