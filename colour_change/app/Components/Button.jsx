
const Button = ({count}) => {
  var incermentbtnG = () =>{
    count("grey")
  }

  var incermentbtnT = () =>{
    count("teal")
  }

  var incermentbtnR = () =>{
    count("red")
  }

  var incermentbtnB = () =>{
    count("blue")
  }
    return (
      <div className="btnDiv">
        <button className="bGrey" onClick={incermentbtnG} value="grey">Grey</button>
        <button className="bTeal" onClick={incermentbtnT} value="teal">Teal</button>
        <button className="bRed" onClick={incermentbtnR} value="red">Red</button>
        <button className="bBlue" onClick={incermentbtnB} value="blue">Blue</button>
      </div>
    )
}
export default Button;
