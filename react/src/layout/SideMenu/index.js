import './sidemenu.scss';
import {useEffect, useState} from "react";
import Link from "next/link";

const SideMenu=(props)=>{
    const [menuList,setMenuList] = useState([]);
    useEffect(() => {
        return setMenuList(props.menuItems);
    }, [menuList]);
    return(
        <aside className={`mi-sidemenu ${props.active && 'active'}`}>
            <div className="mi-sidemenu__inner">
                <nav className="mi-sidemenu__nav">
                    <ul className="mi-sidemenu__list">
                        {menuList.map((menuItem,index)=>(
                            <li key={index} className="mi-sidemenu__item"><Link href={menuItem.link}><a className="mi-sidemenu__link">{menuItem.name}</a></Link></li>
                        ))}
                    </ul>
                </nav>
            </div>
        </aside>
    )
}
export default SideMenu;