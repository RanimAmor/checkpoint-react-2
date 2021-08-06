import logo from './logo.svg';
import './style.css';
import './App.css';
import img from "./imageInSrc.jpg"
function App() {
  return (
    <>
    <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
    <h1 className="title red">Ranim Amor</h1>
    <br></br>
    <div style={{textAlign:"center"}} >
    <img src={img}></img>
    <br></br>   <br></br>
    <img src="/imageInPublic.jpg"></img>
    </div>
    </div>
    <div  style={{textAlign:"center"}}>
    <video width="320" height="240"controls>
    <source src="vid.mp4" type="video/mp4" ></source>
    </video>
    </div>
    </>
  );
}

export default App;
