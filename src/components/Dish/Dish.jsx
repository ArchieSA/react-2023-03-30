export const Dish = ({dish}) => {

    return <div id={dish.id}>
        <span>Dish: {dish.name}</span><br/>
        <span>Price: {dish.price}</span><br/>
        <span>Ingredients:
            <ul>{dish.ingredients.map(i => <li key={i}>{i}</li>)}</ul>
        </span><br/>
    </div>
}
