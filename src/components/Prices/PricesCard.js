import check_icon from "../../imgs/check.svg";

export default function PricesCard({
   card,
   handleBuyItemClick
}) {
    return (
        <div className="prices-card">
            <div className="prices-card--image-wrapper">
                <img
                    src={card.image}
                    alt={card.title}
                    className="prices-card--image"
                />
            </div>
            <div className="prices-card--content">
                <button
                    className="button prices-card--button"
                    onClick={handleBuyItemClick}
                >
                    {card.title}
                </button>
                <div className="prices-card--options">
                    {card.options.map(option => (
                        <div
                            key={`${card.id}_${option.id}`}
                            className="prices-card--option"
                        >
                            <img src={check_icon} alt="Галочка"/>
                            <p>{option.text}</p>
                        </div>
                    ))}
                </div>
                <p className="prices-card--price">{`${card.price} ₽/сутки`}</p>
            </div>
        </div>
    )
}