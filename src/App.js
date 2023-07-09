import Nav from './Nav.js';
import { Link }  from "react-router-dom";
import './App.css';

function App() {
  return (
      <body>
      <Nav></Nav>
      <main>
          <div className={"row"} style={{marginLeft:"20px"}}>
            <div className={"col-4 main-col-sm"}>
                <div className={"main-cont-sm"}>Content</div>
                <div className={"main-cont-sm"}>Content</div>
                <div className={"main-cont-sm"}>Joe mama</div>
                <div className={"main-cont-sm"}>Bryan is still iron</div>
                <div className={"main-cont-sm"}>yuh</div>
                <div className={"main-cont-sm"}>more content</div>
                <div className={"main-cont-sm"}>more more content</div>
                <div className={"main-cont-sm"}></div>
                <div className={"main-cont-sm"}></div>
                <div className={"main-cont-sm"}></div>
                <div className={"main-cont-sm"}></div>
                <div className={"main-cont-sm"}></div>
            </div>
            <div className={"col-8"}>
                <div className={"main-cont-lg"}>main container</div>
            </div>
          </div>
      </main>

      </body>
  );
}

export default App;
