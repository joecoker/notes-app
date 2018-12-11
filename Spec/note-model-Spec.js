note = new Note("sample text")

Test("Test 1: Should return 'sample text'", expect(note.text).toEqual("sample text"));

Test("Test 2: Should return 'sample text'", expect(note.returnText()).toEqual("sample tex"));
