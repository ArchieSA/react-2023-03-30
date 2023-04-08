export const Menu = ({menu}) => {
    if (!menu) {
        return null;
    } else {
        return (
            <div>{menu.map((menu) => (
                <div style={{marginLeft: "1rem", margin: "5px"}} key={menu.key}>
                    {menu.name}
                    <div style={{marginLeft: "1rem"}}>
                        Ingredients: {menu.ingredients}
                    </div>
                    <div style={{marginLeft: "2rem"}}>
                        Price: {menu.price}
                    </div>
                </div>
            ))}
            </div>
        )
    }
};