
import './App.css';
import MathQues from './Components/MathQues';
import { Route,Routes } from 'react-router-dom';
import { routes } from './routes';
import Login from './Components/Form/Login';
import Thank from './Components/Thank';
import Home from './Components/Home';
import { MathJaxContext } from 'better-react-mathjax';

function App() {
  return (
    <MathJaxContext className="App">
      <Routes>
        <Route path={routes.login} element={<Login/>}/>
        <Route path={routes.mathQues} element={<MathQues/>}/>
        <Route path={routes.thank} element={<Thank/>}/>
        <Route path={routes.home} element={<Home/>}/>
      </Routes>
    </MathJaxContext>
  );
}

export default App;
