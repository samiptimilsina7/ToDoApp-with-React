import logo from './logo.svg';
import './App.css'; 
import {Test} from "./components/test";
import {Landing} from "./pages/Landing";

function App() {
  // let fruits=["apple","ball","cat","dog"]
  // let vari="apple";
  // return(
  //   <div>
  //     <Test title={vari}/>
  //     {fruits.map((fruit,key)=><Test title={fruit}/>)}
  //   </div>
  // );

  return <Landing/>;
}

export default App;
