import React, { useContext } from 'react'
import { Context } from '../Context/Context'

const Modal = () => {
    const { lang, modal, setModal, title, setTitle, text, setText, addNote, update, setUpdate } = useContext(Context)
    const close = () => {
        setModal(false)
        setText('')
        setTitle('')
        setUpdate({ note: null, edit: false })
    }
    return (
        <div className={`modal ${modal && 'active'}`}>
            <div className="modal_card">
                <h2 className="modal_card_title">{update.edit ? lang.titlewindowedit : lang.titlewindow}</h2>
                <label className='modal_card_label'>
                    <span>Title</span>
                    <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label className='modal_card_label'>
                    <span>Content</span>
                    <input type="text" placeholder='Content' value={text} onChange={(e) => setText(e.target.value)} />
                </label>
                <div className="modal_btns">
                    <button className="btn btn_danger" onClick={close}>Bekor qilish</button>
                    <button className="btn btn_primary" onClick={addNote}>{update.edit ? lang.editwindowbtn : lang.addbtn}</button>
                </div>
            </div>
        </div>
    )
}

export default Modal