(function (exports) {

  function ListView(noteList) {
    this.view = noteList;
  }

  ListView.prototype.htmlString = function() {
    var i;
    var string = "";
    var numberOfNotes = this.view.notes.length;

    string += "<ul>";
    for (i = 0; i < numberOfNotes; i++) {
      string += "<li><div>" + this.view.notes[i].text.slice(0,20) + "</div></li>";
    }
    string += "</ul>";

    return string;
  };

  exports.ListView = ListView;
})(this);
