import truck from '../images/truck.png';

const SpecialCard = (props) => {
    return (
        <div className="specialCard">
            <img src={props.imgSrc} alt="The card item"/>
            <div className="cardFlex">
                <h4>{props.name}</h4>
                <span className="price">{props.price}</span>
            </div>
            <p>{props.description}</p>
            <div className="deliveryFlex">
                <span className="cardDelivery">Order a Delivery</span>
                <img id="cardDeliveryIcon" src={truck} alt='delivery truck'/>
            </div>
        </div>
    );
}

export default SpecialCard;