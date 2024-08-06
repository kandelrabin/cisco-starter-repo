import './App.css';
import IPAddress from './components/IPAddress';


function App() {
  return (
    <div className="App">
      <IPAddress IPType={"IPv4"}/>
      <IPAddress IPType={"IPv6"}/>
    </div>
  );
}

export default App;
