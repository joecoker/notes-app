describe("ListView", function() {

  describe(".view", function() {
    it("Should be an object", function() {
      SpecSetup();
      expect(view.view).isObject(true);
    })
  })

  describe(".view.notes", function() {
    it("Should be an array", function() {
      SpecSetup();
      expect(view.view.notes).isArray(true);
    })
  })

  describe(".htmlString()", function() {
    it("Should return html for an empty unordered list", function() {
      SpecSetup();
      expect(view.htmlString()).toEqual("<ul></ul>");
    })

    it("Should return html for an unordered list with one list item", function() {
      SpecSetup();
      notes.notes.push(note);
      expect(view.htmlString()).toEqual("<ul><li><div>Hello World</div></li></ul>");
    })

    it("Should return html for an unordered list with three list items", function() {
      SpecSetup();
      MultiNote();
      expect(view.htmlString()).toEqual(
        "<ul>" +
          "<li><div>A</div></li>" +
          "<li><div>B</div></li>" +
          "<li><div>C</div></li>" +
        "</ul>"
      );
    })
  })
})