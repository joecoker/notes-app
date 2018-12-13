(function (exports) {

  function ListView(list) {
    this.view = list;
  }

  ListView.prototype.htmlString = function() {
    var i;
    var string = "";
    var listLength = this.view.list.length;

    string += "<ul>";
    for (i = 0; i < listLength; i++) {
      string += "<li><div>" + this.view.list[i].note.substring(0, 20) + "</div></li>";
    }
    string += "</ul>";

    return string;
  }

  exports.ListView = ListView;
})(this);
