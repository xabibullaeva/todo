import React, { useContext, useState } from 'react'
import uzFlag from "../assets/images/Uzbekistan-flag.webp";
import ruFlag from "../assets/images/russia.png";
import { MdOutlineSearch } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Context } from '../Context/Context';



const Nav = () => {
    const { lang, changeLang, active, value, setValue } = useContext(Context)
    const [search, setSearch] = useState(false)
    return (
        <>
            <nav className="nav">
                <div className="nav_lang">
                    <button className={`nav_lang_btn  ${active && 'active'}`} onClick={() => changeLang('uz')} >
                        <span>Uz</span>
                        <img src={uzFlag} alt="" />
                    </button>
                    <button className={`nav_lang_btn ${!active && 'active'}`} onClick={() => changeLang('ru')}>
                        <span>Ru</span>
                        <img src={ruFlag} alt="" />
                    </button>
                </div>
                <h2 className="nav_title">{lang.appbartitle}</h2>
                <button className="nav_search" onClick={() => setSearch(true)}>
                    <MdOutlineSearch />
                </button>
            </nav>
            <nav className={`nav search ${search && 'active'}`}>
                <button className="nav_back" onClick={() => setSearch(false)}>
                    <FaArrowLeft />
                </button>
                <div className="container">
                    <input
                        className='nav_input'
                        type="text"
                        placeholder={lang.appbarseacrch}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </div>
                <button className="nav_clear">
                    <IoMdCloseCircleOutline />
                </button>
            </nav>
        </>
    )
}
export default Nav