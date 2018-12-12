describe('SingleNoteView', function(){
  it('showNote', function(){
    SpecSetup();
    var snv = new SingleNoteView(note);
    expect(snv.showNote()).toEqual("<div>Hello World</div>")

  })
});
