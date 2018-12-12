describe("NoteList", function() {
  
  describe(".notes", function() {
    it("Should be an array", function() {
      SpecSetup();
      expect(notes.notes).isArray(true);
    })
  })

  describe(".returnNotes()", function() {
    it("Should be an array", function() {
      SpecSetup();
      expect(notes.returnNotes()).isArray(true);
    })
  })

  describe(".createNote()", function() {
    it("Should create a note and add it to the notes array", function() {
      SpecSetup();
      notes.createNote("Hello World");
      expect(notes.notes[0].text).toEqual("Hello World");
    })
  })
})
