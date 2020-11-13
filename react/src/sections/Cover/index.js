import './cover.scss';
import {Container, Row} from "reactstrap";
import MiButton from "../../components/Button";
import Brands from "../../components/Brands";
const CoverSection =(props)=>{
    return(
        <section className="mi-cover">
            <Container>
                <Row>
                    <div className="col-lg-6 col-12">
                        <div className="mi-cover__data">
                            <h1 className="mi-cover__title" dangerouslySetInnerHTML={{__html: props.coverData.title}}/>
                            <p className="mi-cover__lead" dangerouslySetInnerHTML={{__html: props.coverData.desc}}/>
                            <MiButton link={props.coverData.btnUrl} rounded="true" primary='true' text={props.coverData.btnText}/>
                            <Brands className='mi-cover__brands' brands={props.coverData.brands}/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="mi-cover__img">
                            {props.coverData.coverImg && (<img src={props.coverData.coverImg} alt="Webify cover"/>)}
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
}
export default CoverSection;