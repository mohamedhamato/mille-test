import {Container} from "reactstrap";
import './header.scss';
import HeaderBrand from "../../components/HeaderBrand";
import {useEffect, useState} from "react";
import MiButton from "../../components/Button";
import Link from "next/link";
import SideMenu from "../SideMenu";
const Header =(props)=>{
    const [menuList,setMenuList] = useState([]);
    const [slideMenu,setSlideMenu] = useState(false);
    const toggleMenu = (e)=>{
        e.preventDefault();
        setSlideMenu(!slideMenu);
    };
    useEffect(() => {
        return setMenuList(props.headerInfo.menuItems);
    }, []);
    return(
        <>
            <header className="mi-header">
                <Container>
                    <div className="mi-header__content">
                        <HeaderBrand title={props.headerInfo.title} logo={props.headerInfo.logo}/>
                        <div className="mi-header__inner ml-auto">
                            <nav className="mi-header__nav">
                                <ul className="mi-header__list">
                                    {menuList.map((menuItem,index)=>(
                                        <li key={index} className="mi-header__item"><Link href={menuItem.link}><a className="mi-header__link">{menuItem.name}</a></Link></li>
                                    ))}
                                </ul>
                            </nav>
                            <div className="mi-header__addons">
                                <MiButton link={props.headerInfo.btnUrl} rounded="true" text={props.headerInfo.btnName}/>
                                <a href="#" onClick={(e)=>{toggleMenu(e)}} className={`mi-menu-btn ${slideMenu && 'active'}`}><span/><span/><span/></a>
                            </div>
                        </div>
                    </div>
                </Container>
            </header>
            <SideMenu active={slideMenu ? 1 : 0 } menuItems={menuList}/>
        </>
    )
}

export default Header;