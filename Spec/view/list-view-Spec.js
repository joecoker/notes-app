describe("List View", function() {

  ListSetup();

  // describe(".view", function() {
  //   it("Should be an object", function() {
  //     expect(listView.view).isObject(true);
  //   })
  // })

  // describe(".view.notes", function() {
  //   it("Should be an array", function() {
  //     expect(listView.view.list).isArray(true);
  //   })
  // })

  describe(".htmlString()", function() {
    // it("Should return html for an empty unordered list", function() {
    //   expect(listView.htmlString()).toEqual(
    //     "<ul>" + 
    //     "</ul>"
    //   );
    // })

    // it("Should return html for an unordered list with one list item", function() {
      list.list.push(note);
    //   expect(listView.htmlString()).toEqual(
    //     "<ul>" + 
    //       "<li><div>A</div></li>" +
    //     "</ul>"
    //   );
    // })

    // it("Should return html for an unordered list with three list items", function() {
      MultiNoteSetup();
    //   expect(listView.htmlString()).toEqual(
    //     "<ul>" +
    //       "<li><div>A</div></li>" +
    //       "<li><div>B</div></li>" +
    //       "<li><div>C</div></li>" +
    //     "</ul>"
    //   );
    // })

    it("Should return html for an unordered list with line line longer than 20 characters", function() {
      list.list.push(new Note("qwertyuiopasdfghjklzxcvbnm"));
      expect(listView.htmlString()).toEqual(
        "<ul>" +
          "<li><div>A</div></li>" +
          "<li><div>B</div></li>" +
          "<li><div>C</div></li>" +
          "<li><div>qwertyuiopasdfghjklz</div></li>" +
        "</ul>"
      );
    })
  })
})
