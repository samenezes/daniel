function Prova()
{

    const valores= fetch('https://opentdb.com/api.php?amount=30&category=15')
    function categoryRequest ()
    {
        valores.then(category=> category.json()
        .then(dados=>{
            
            const lblcategory = document.querySelector('#category')

            lblcategory.innerHTML = `${dados.content}`
        }))
    }

    function typeRequest ()
    {
        valores.then(type=> type.json()
        .then(dados=>{

                     const lbltype = document.querySelector("#type")

                     lbltype.innerHTML = `${dados.content}`

        }))
    }
    
    categoryRequest()
    typeRequest()

    return (
        <>
            <h1>Prova Final</h1>
            <div>
                <span id="category"></span>
                <span id="type"></span>
            </div>
        </>
    )
}


export default Prova