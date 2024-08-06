const TestimonialCard = (props) => {
    return (
        <div className="testCard">
            <div>
                <h5>{props.rating}</h5>
                <div className="testFlex">
                    <img src={props.imgSrc} alt="person"/>
                    <div>
                        <h6>{props.name}</h6>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialCard;