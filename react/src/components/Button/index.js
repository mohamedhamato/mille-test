import './button.scss';
import Link from "next/link";
const MiButton = (props)=>{
    if(props.link){
        return(
            <Link href={props.link} {...props}><a className={`mi-btn ${props.primary ?'mi-btn--primary':''} ${props.className ? props.className:''} ${props.rounded && 'mi-btn--rounded'}`}>{props.text}</a></Link>
            )
    }else{
        return(
            <button className={`mi-btn ${props.primary ? 'mi-btn--primary':''}  ${props.className ? props.className:''} ${props.rounded && 'mi-btn--rounded'}`}  {...props}>{props.text}</button>
        )
    }
}

export default MiButton;