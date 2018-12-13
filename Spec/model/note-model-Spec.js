describe("Note Model", function() {
  
  NoteSetup();
  
  // describe(".note", function() {
  //   it("Should return 'A'", function() {
  //     expect(note.note).toEqual("A");
  //   }) 
  // })

  // describe(".id()", function() {
  //   it("Should return id = 0", function() {
  //     expect(note.id).toEqual(0);
  //   })
  // })

  describe(".returnNote()", function() {
    it("Should return 'A'", function() {
      expect(note.returnNote()).toEqual("A");
    })
  })
})
