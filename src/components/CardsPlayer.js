import './styles/CardsPlayers.css'

const CardsPlayer = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <img src={props.backgroundImg} alt={props.id} />
    </div>
  )
}

export default CardsPlayer
