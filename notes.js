const fs = require('fs')

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    });

    if (duplicateNotes.length == 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log("New note added!");
    } else {
        console.log("Note title taken!");
    }
}

const saveNotes = function (notes) {
    fs.writeFileSync("notes.json", JSON.stringify(notes));
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        return JSON.parse(dataBuffer.toString());
    } catch (e) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}