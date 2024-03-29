import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import { data } from "./data"
import Split from "react-split"
import {nanoid} from "nanoid"


export default function App() {
    const [notes, setNotes] = React.useState(
        // here we will get the last saved notes from localstorage and only if no notes exist in localstorage we will set notes to empty array 
        () => JSON.parse(localStorage.getItem("notes")) ||
        [])
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )

    // to update the localstorage everytime note is updated we use useEffect hook
    React.useEffect(() => { 
        localStorage.setItem("notes",JSON.stringify(notes));
    },[notes]);
    
    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }
    
    function updateNote(text) {

        setNotes(oldNotes => { 
            //* pseudocode for sorting the recently modified note to top
            // create a new empty array
            const newArray = []
            // Loop over the original array
            oldNotes.forEach(oldNote => {                
                // if the id matches
                if (oldNote.id === currentNoteId) {
                    // put the updated note at beginning of new array
                    const updatedNote = { ...oldNote, body: text }
                    newArray.unshift(updatedNote)
                } else {
                    // else
                    // push the old note to the end of new array 
                    newArray.push(oldNote)
                }
            });
            // return new array 
            return newArray
        })

        // ? This doesn't rearrage the recently modified note to top
        // setNotes(oldNotes => oldNotes.map(oldNote => {
        //     return oldNote.id === currentNoteId
        //         ? { ...oldNote, body: text }
        //         : oldNote
        // }))
    }
    
    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }

    function deleteNote(event, noteId) { 
        // ? This will prevent propagating click event to parent element when child element is clicked
        event.stopPropagation()
        // deleting notes by using filter method
        // only keep the notes whose delete was not clicked while removing all other notes from the list
        setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId));
    }
    
    return (
        <main>
        {
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
                            notes={notes}
                            currentNote={findCurrentNote()}
                            setCurrentNoteId={setCurrentNoteId}
                            newNote={createNewNote}
                            deleteNote={ deleteNote}    
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()} 
                        updateNote={updateNote} 
                    />
                }
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }
        </main>
    )
}
