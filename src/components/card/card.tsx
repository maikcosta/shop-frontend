import "./card.css";

interface CardProps{
    title: string,
    image: string,
    price: number


}

export function Card({title,image,price} : CardProps){
    return(
        <div className="card">
            <img src={image}/>
            <h2>{title}</h2>
            <p><b>$: </b>{price}</p>

        </div>
    )
}