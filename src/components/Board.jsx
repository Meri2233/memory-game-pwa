import Card from "./Card"

function Board(props){
    let index = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
    
    return(
        <div className="board">
            {index.map((el,index)=>{return <Card key={index} flipcard={props.setImage} number={el} idx={index}/>})}
        </div>
    )
}

export default Board