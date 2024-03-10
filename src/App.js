import logo from './logo.svg';
import Portfolio from './portfolio/Portfolio';
import FDCalculator from './project/FDCalculator';
import Salarycalculator from './project/Salarycalculator';


function App() {
  return (


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>welcome to react dude!!</h1>

    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //     </a> 

    //   </header>

    // </div>
    <div>
      <Portfolio/>
      {/* <Salarycalculator/> */}
      {/* <FDCalculator/> */}
    </div>
  );
}


export default App;
