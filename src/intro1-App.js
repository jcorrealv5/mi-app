import Button from "./Button"
const arr =[
    'feliz',
    'triste',
    'emociado',
]
const App = () =>{
    const miVariable=false
    if(miVariable){
        return<p>Mi variable vio true</p>
    }
    return(
        <di>
            <h1 onClick={(e)=>console.log('click',e)} >Hola Mundo</h1>
            {arr.map(el => <p key={el}>{el}</p>)} 
            <Button onClick={()=> console.log('cliqueado')} >
                Enviar
            </Button>           
        </di>        
    )
}

export default App