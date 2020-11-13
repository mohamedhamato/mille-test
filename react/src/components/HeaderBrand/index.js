import Link from "next/link";
const HeaderBrand =(props)=>{
    return(
        <div className="mi-header__logo">
            <Link href="#"><img src={props.logo} alt={props.title}/></Link>
        </div>
    )
}
export default HeaderBrand;