import Icon from "./Icons"

function Card(props) {

    return (
        <div className="card-section" onClick={(e) => props.flipcard(e.target)}>
            <div className="front"><Icon key={props.number} svgNo={props.number} /></div>
            <div className="back">
            </div>
        </div>
    )
}
export default Card