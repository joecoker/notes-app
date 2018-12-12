(function (exports) {

function SingleNoteView (note){
  this.note = note.text;
};

SingleNoteView.prototype.showNote = function () {
  result = "<div>" + this.note + "</div>"
  return result;
};

  exports.SingleNoteView = SingleNoteView;
})(this);
