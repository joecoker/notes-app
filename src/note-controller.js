(function (exports) {

  function Controller(noteList) {
    this.control = noteList;
    this.control.createNote("Favourite drink: seltzer")
  }

  Controller.prototype.html = function() {
    var listView = new ListView(this.control);
    document.addEventListener("DOMContentLoaded", function() {
      document.getElementById("app").innerHTML = listView.htmlString();
    })
  }




  exports.Controller = Controller;
})(this);

noteList = new NoteList()
controller = new Controller(noteList);
controller.html();
