describe('SingleNoteView', function(){
  
  SpecSetup();
  
  it('showNote', function(){
    var snv = new SingleNoteView(note);
    expect(snv.showNote()).toEqual("<div>Hello World</div>")

  })
});
