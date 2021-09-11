import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
      <Navbar title="TextUtils" home="Home"/>
      <div className="container">
      <Textform heading='Enter text to analyse'/>
      </div>
    </>
  );
}

export default App;
