import { useCustomization } from "../context/Customization"

const Configurator = () => {

    const { carColours, carColour, setCarColours } = useCustomization();

    return(
        <div className="configurator">
            <div className="configurator__section">
                <div className="configurator__section__title">Lamborghini Colour</div>
                    <div className="configurator__section__values">
                        { carColours.map((item, index) => (
                            <div
                                key={index}
                                className={`item ${item.colour === carColour.colour ? "item--active" : ""}`}
                                onClick={() => setCarColours(item)}
                            >
                            <div className="item__dot"
                                style={{
                                    backgroundColor: item.colour,
                            }}
                            />
                            <div className="item__label">{item.name}</div>
                            </div>
                        ))}
                            </div>
            </div>
        </div>
    )
}

export default Configurator;