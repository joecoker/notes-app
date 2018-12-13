describe("List Model", function() {
  
  ListSetup();

  // describe(".list", function() {
  //   it("Should be an array", function() {
  //     expect(list.list).isArray(true);
  //   })
  // })

  // describe(".returnList()", function() {
  //   it("Should be an array", function() {
  //     expect(list.returnList()).isArray(true);
  //   })
  // })

  describe(".createNote()", function() {
    it("Should create a note and add it to the notes array", function() {
      list.createNote("Hello World");
      expect(list.returnList()[0].note).toEqual("Hello World");
    })
  })
})
