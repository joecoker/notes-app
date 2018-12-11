describe("Note", function() {
  describe(".text", function() {
    it("Should return 'Hello World'", function() {
      var note = new Note("Hello World");
      expect(note.text).toEqual("Hello World");
    }) 
  })

  describe(".returnText()", function() {
    it("Should return 'Hello World'", function() {
      var note = new Note("Hello World");
      expect(note.returnText()).toEqual("Hello World");
    })
  })
})