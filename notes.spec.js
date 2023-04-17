const app = require('./notes.js')
const fs = require('fs')

describe('Notes Test Suite', () => {
    beforeEach(() => {
        fs.unlinkSync('notes.json');
    })

    it('should add a new note', async () => {
        const title = 'My title'
        const body = 'My body'

        
        app.addNote(title, body)
        const notes = app.getNotes()
        expect(notes.length).toBe(1)
        expect(notes[0].title).toBe(title)
        expect(notes[0].body).toBe(body)
    })

    it('should remove a note', async () => {
        const title = 'My title'
        const body = 'My body'

        app.addNote(title, body)
        app.removeNote(title)
        const notes = app.getNotes()
        expect(notes.length).toBe(0)
    })

    it('should not remove a note', async () => {
        const title = 'My title'
        const body = 'My body'

        app.addNote(title, body)
        app.removeNote('some other title')
        const notes = app.getNotes()
        expect(notes.length).toBe(1)
    })

    it('should not add a duplicate note', async () => {
        const title = 'My title'
        const body = 'My body'

        app.addNote(title, body)
        app.addNote(title, body)
        const notes = app.getNotes()
        expect(notes.length).toBe(1)
    })
})
