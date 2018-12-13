describe("Note View", function(){
  
  NoteSetup();
  
  it(".htmlString()", function(){
    expect(noteView.htmlString()).toEqual("<div>A</div>")
  })
});
