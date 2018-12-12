describe("ListView", function() {

  SpecSetup();

  describe(".view", function() {
    it("Should be an object", function() {
      expect(view.view).isObject(true);
    })
  })

  describe(".view.notes", function() {
    it("Should be an array", function() {
      expect(view.view.notes).isArray(true);
    })
  })

  describe(".htmlString()", function() {
    it("Should return html for an empty unordered list", function() {
      expect(view.htmlString()).toEqual("<ul></ul>");
    })

    it("Should return html for an unordered list with one list item", function() {
      notes.notes.push(note);
      expect(view.htmlString()).toEqual("<ul><li><div>Hello World</div></li></ul>");
    })

    it("Should return html for an unordered list with three list items", function() {
      MultiNote();
      expect(view.htmlString()).toEqual(
        "<ul>" +
          "<li><div>A</div></li>" +
          "<li><div>B</div></li>" +
          "<li><div>C</div></li>" +
        "</ul>"
      );
    })

    it("Should return html of no more than 20 characters", function() {
      longNotes = new NoteList()
      longNotes.createNote("qwertyuiopasdfghjklzxcvbnm");
      truncView = new ListView(longNotes)
      expect(truncView.htmlString()).toEqual(
        "<ul>" +
          "<li><div>qwertyuiopasdfghjklz</div></li>" +
        "</ul>"
      );
    })

  })
})
