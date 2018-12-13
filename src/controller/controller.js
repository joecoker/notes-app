(function (exports) {

  function Controller(list) {
    this.view = list;
  }

  Controller.prototype.html = function(id) {
    var view = new ListView(this.view);
    document.addEventListener("DOMContentLoaded", function() {
      document.getElementById(id).innerHTML = view.htmlString();
    })
  }

  exports.Controller = Controller;
})(this);
