import './style.scss'

const Dice = ({ id }) => {    
    function rollDice() {
        let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        document.getElementById(`dice-${id}`).dataset.side = result;
        document.getElementById(`dice-${id}`).classList.toggle("reRoll");
    
        console.log(`dice ${id}:`, result);
    }

    return (
<div id={`dice-${id}`} className='dice' data-side="1" onClick={rollDice}>
    <div className="sides side-1">
        <span className="dot dot-1"></span>
    </div>
    <div className="sides side-2">
        <span className="dot dot-1"></span>
        <span className="dot dot-2"></span>
    </div>
    <div className="sides side-3">
        <span className="dot dot-1"></span>
        <span className="dot dot-2"></span>  
        <span className="dot dot-3"></span>
    </div>
    <div className="sides side-4">
        <span className="dot dot-1"></span>
        <span className="dot dot-2"></span>  
        <span className="dot dot-3"></span>
        <span className="dot dot-4"></span>
    </div>
    <div className="sides side-5">
        <span className="dot dot-1"></span>
        <span className="dot dot-2"></span>  
        <span className="dot dot-3"></span>
        <span className="dot dot-4"></span>
        <span className="dot dot-5"></span>
    </div>
    <div className="sides side-6">
        <span className="dot dot-1"></span>
        <span className="dot dot-2"></span>  
        <span className="dot dot-3"></span>
        <span className="dot dot-4"></span>
        <span className="dot dot-5"></span>
        <span className="dot dot-6"></span>
    </div>
</div>
    )
}

export default Dice;