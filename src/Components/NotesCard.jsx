import React, { useContext } from 'react'
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { Context } from '../Context/Context';
const NotesCard = ({ note }) => {
    const { lang, notes, setNotes,changeNote } = useContext(Context)
    const delNote = (id) => {
        setNotes(notes.filter(note => note.id !== id))
    }
    return (
        <div className="notes_card">
            <h2 className="notes_card_title">{note.title}</h2>
            <p className="notes_card_date">{note.date}</p>
            <p className="notes_card_text">
                {note.text}
            </p>
            <div className="notes_card_btns">
                <button className="btn btn_primary" onClick={()=>changeNote(note)}>
                    <span> <FaPencilAlt /></span>
                    {lang.editbtn}
                </button>
                <button className="btn btn_danger" onClick={() => delNote(note.id)}>
                    <span> <FaTrashAlt /></span>
                    {lang.deledit}
                </button>
            </div>
        </div>
    )
}

export default NotesCard