import { createContext, useEffect, useState } from "react"
import { ru, uz } from '../lang';
import { v4 } from "uuid";
export const Context = createContext()
const ContextProvider = ({ children }) => {
    const id = v4().slice(0, 8)
    const [notes, setNotes] = useState(getNotes)
    const [lang, setLang] = useState(uz)
    const [active, setActive] = useState(true)
    const [modal, setModal] = useState(false)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [value, setValue] = useState('')
    const [update, setUpdate] = useState({ note: null, edit: false })


    useEffect(() => {
        sessionStorage.setItem('notes', JSON.stringify(notes))
    },[notes])
    function getNotes() {
        let notes = sessionStorage.getItem('notes')
        if (notes) {
            return JSON.parse(notes)
        } else {
            return []
        }
    }
    const changeLang = (str) => {
        setActive(!active)
        str == 'uz' ? setLang(ru) : setLang(uz)
    }

    const addNote = () => {
        if (title.trim().length > 1 && text.trim().length > 1) {
            const newNote = {
                id: update.edit ? update.note.id : id,
                title: title,
                text: text,
                date: new Date().toLocaleDateString()
            }
            if (update.edit) {
                setNotes(notes.map(note => note.id == update.note.id ? newNote : note))
                setUpdate({ note: null, edit: false })
            } else {
                setNotes([...notes, newNote])
            }
            setModal(false)
            setText('')
            setTitle('')
        }
    }
    const changeNote = (note) => {
        setModal(true)
        setTitle(note.title)
        setText(note.text)
        setUpdate({ note: note, edit: true })
    }
    return (
        <Context.Provider value={{
            value, setValue,
            setUpdate, update, changeNote, setNotes,
            addNote, lang, active, changeLang, notes, modal, setModal, title, setTitle, text, setText
        }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider