import './Card.css'

const Card = ({ robot }) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow">
            <img src={`https://robohash.org/${robot.name}`} />
            <h2 className="f3">{robot.name}</h2>
            <p className="f5">{robot.email}</p>
        </div>
    )
}

export default Card;