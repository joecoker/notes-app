(function (exports) {

  function NoteView(note) {
    this.view = note;
  }

  NoteView.prototype.htmlString = function() {
    var string = "";

    string += "<div>";
    string += this.view.note;
    string += "</div>";

    return string;
  }

  exports.NoteView = NoteView;
})(this);
