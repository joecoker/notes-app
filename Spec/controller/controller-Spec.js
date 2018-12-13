describe("Controller", function() {

  ControllerSetup();

  // describe(".noteList", function() {
  //   it("Should be an object", function() {
  //     expect(controller.view).isObject(true);
  //   })
  // })

  describe(".html()", function() {
    it("Should update the html of the page", function() {
      controller.html("test");
      document.addEventListener("DOMContentLoaded", function() {
        expect(document.getElementById("test").innerHTML).toEqual("<ul><li><div>Hello World</div></li></ul>");
      })
    })
  })
})