(function (exports) {

  var counter = 0;

  function Note(string) {
    this.text = string;
    this.id = counter;
    counter++;
  }
  
  Note.prototype.returnText = function() {
    return this.text;
  };

  exports.Note = Note;
})(this);