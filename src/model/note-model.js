(function (exports) {

  var i = 0;

  function Note(string) {
    this.note = string;
    this.id = i;
    i++;
  }
  
  Note.prototype.returnNote = function() {
    return this.note;
  }

  exports.Note = Note;
})(this);
