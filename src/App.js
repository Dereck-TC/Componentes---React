import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Card2 from './components/Card2';
import Card3 from './components/Card3';

function App() {
  return (
    <div className="App">
      {/* <p>Hola Mundo</p> */}
      <Card>
        <p>Hola</p>
      </Card>
      {/* <Card2/> */}
      <Card3/>
      {/**{}-> se utiliza para escapar código de JS */}
      {/* <img src={logo} alt=''></img> */}
    </div>
  );
}

export default App;
