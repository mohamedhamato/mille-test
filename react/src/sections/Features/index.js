import {Container, Row} from "reactstrap";
import MiHeading from "../../components/Heading";
import {useEffect, useState} from "react";
import MiIconBox from "../../components/IconBox";

const FeatureSection = (props)=>{
    const [features,setFeatures]=useState([]);

    useEffect(()=>{
        setFeatures(props.featureData.features);
    },[features]);

    const reducedFeatures = features.reduce((rows,key,index)=>{
        return (index % 2 === 0 ? rows.push([key]):rows[rows.length - 1].push(key)) && rows;
    },[]);

    return(
        <section className="pt120 pb120">
            <Container>
                <Row>
                    <div className="col-12 col-xl-6">
                        <Row>
                            {reducedFeatures.map((ColFeatures,index)=>(
                                <div className="col-12 col-md-6" key={index}>
                                    <div className={index === 1 && 'mt-lg-30'}>
                                        {ColFeatures.map((feature,index)=>(
                                            <MiIconBox key={index} title={feature.title} desc={feature.desc} color={feature.color} icon={feature.icon}/>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </Row>
                    </div>
                    <div className="col-xl-6 col-12">
                        <MiHeading className='pl20 mt40' title={props.featureData.title} desc={props.featureData.desc} btnText={props.featureData.btnText} btnUrl={props.featureData.btnUrl}/>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default FeatureSection;