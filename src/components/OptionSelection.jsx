
export default function OptionSelection(props) {
    return (
        <>
            <h1 className="heading">React ChatGPT Clone App</h1>
            {/* Parcourir tous les éléments du tableau arrayItems et les afficher */}
            <div className="grid-main">
                {props.arrayItems.map(item => {
                    // effectue la fonction qui lui est attribuée au click
                    return <div key={item.id} className="grid-child" onClick={() => props.selectOption(item.option,item.name)}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </div>
                })}
            </div>
        </>
    )
}
