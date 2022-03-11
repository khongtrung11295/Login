import './waiting.css';
function waiting (){
    return (
        <div className='header'>
            <div id='overlay'>
            <div id="text">Overlay Text</div>
            </div>
            <div> 
                <h2>Overlay with text</h2>
                <button onclick="on()">Turn on overlay effect</button>
            </div>
        </div>
    );
}
function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }
export default waiting;