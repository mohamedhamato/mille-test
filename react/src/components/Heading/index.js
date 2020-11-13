import MiButton from "../Button";
import './heading.scss';
const MiHeading = (props)=>{
    return(
        <div className={`mi-heading ${props.className}`}>
            <h3 className="mi-heading__title" dangerouslySetInnerHTML={{__html:props.title}}/>
            <div className="mi-heading__desc"  dangerouslySetInnerHTML={{__html:props.desc}}/>
            {props.btnUrl && (<MiButton rounded='true' link={props.btnUrl} className="mt25" text={props.btnText}/>)}
        </div>
    )
};

export default MiHeading;