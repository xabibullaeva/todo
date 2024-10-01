import React, { useContext, useState } from 'react'
import { FaListUl } from "react-icons/fa";
import { MdGridOn } from "react-icons/md";
import { Context } from '../Context/Context';

import NotesCard from './NotesCard';

const Notes = () => {
    const [grid, setGrid] = useState(true)
    const { lang, notes, value } = useContext(Context)
    const notesFilter = notes.filter(note => {
        if (value.trim() == '') {
            return note
        } else if (note.title.toLowerCase().includes(value.toLowerCase())) {
            return note
        }
    })
    if (notesFilter.length) {
        return (
            <div className="notes">
                <div className="container">
                    <div className="notes_top">
                        <h2 className="notes_top_title">{lang.infobar}</h2>
                        <button className="notes_top_btn" onClick={() => setGrid(!grid)}>
                            {
                                grid ?
                                    <>
                                        <FaListUl />
                                        <span>{lang.list}</span>
                                    </>
                                    :
                                    <>
                                        <MdGridOn />
                                        <span>{lang.grid}</span>
                                    </>
                            }
                        </button>
                    </div>
                    <div className={`notes_box ${!grid && 'active'}`}>
                        {notesFilter.map(note => (
                            <NotesCard key={note.id} note={note} />
                        ))}
                    </div>
                </div>
            </div>
        )
    } else return <h2 style={{textAlign:'center',marginTop:30,fontWeight:400}}>{lang.nonote}</h2>
}

export default Notes