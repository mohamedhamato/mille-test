import {useEffect, useState} from "react";
import './brands.scss';
const Brands = (props)=>{
    const [brands,setBrands] = useState([]);
    useEffect(()=>{
        return setBrands(props.brands);
    },[])
    return(
        <div className={`mi-brands ${props.className}`}>
            {brands.map((brand,index)=>(
                <div className="mi-brands__item" key={index}><img src={brand.url} alt={brand.name}/>
                </div>
            ))}
        </div>
    )
}

export default Brands;