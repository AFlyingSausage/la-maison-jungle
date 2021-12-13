const plantList = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]

const ShoppingList = () => {
    return (
        <ul>
            {plantList.map((plant, index) => <li key={`${plant}-${index}`} style={{color:"red"}} >{plant}</li>) }
        </ul>
    )
}

export default ShoppingList