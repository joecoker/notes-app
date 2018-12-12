describe("Note", function() {
  
  SpecSetup();
  
  describe(".text", function() {
    it("Should return 'Hello World'", function() {
      expect(note.text).toEqual("Hello World");
    }) 
  })

  describe(".returnText()", function() {
    it("Should return 'Hello World'", function() {
      expect(note.returnText()).toEqual("Hello World");
    })
  })

  describe(".id()", function() {
    it("Should correct id", function() {
      expect(note.id).toEqual(0);
    })
  })
})