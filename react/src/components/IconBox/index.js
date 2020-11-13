import './iconbox.scss';
const MiIconBox = (props)=>{
    return(
        <div className={`mi-icon-box ${props.className} ${props.color && `mi-icon-box--${props.color}`}`}>
            <div className="mi-icon-box__icon">
                <i className="material-icons-outlined">{props.icon}</i>
            </div>
            <div className="mi-icon-box__content">
                <h5 className="mi-icon-box__title">
                    {props.title}
                </h5>
                <p className="mi-icon-box__desc">
                    {props.desc}
                </p>
            </div>
        </div>
    )
};
export default MiIconBox;