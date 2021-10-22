import './CardNews.css';
import NewsImg from '../../../images/news.png';

const CardNews = (props) => {
    
    // function ShowAndHide(){
    //     var show = false;
    // }
   
    return (

        <div className="container-fluid">

            <div className="row">
                <div className="col-12 mt-3">
                    <div className="card">
                        <div className="card-horizontal">
                            <div className="img-square-wrapper">
                                <img className="" src={NewsImg} alt="" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">{props.title}</h4>
                                <h6 className="card-subtitle">{props.subtitle}</h6>
                                <h6 className="card-subtitle">Writer: {props.writer}/Area: {props.area}</h6>


                                <p className="card-text">{props.content}</p>
                                
                            </div>
                            {/* <input type='checkbox' onClick={ShowAndHide}></input> */}
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated was on {props.date} </small>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );

}

export default CardNews;