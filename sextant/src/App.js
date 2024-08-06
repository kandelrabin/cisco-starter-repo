import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import IPAddress from './components/IPAddress';


function App() {
  return (
    <div className="App">
      <Banner bannerText="Sextant" />
      <Exhibit name={"Public IPv4 Address"}>
        <IPAddress IPType={"IPv4"}/>
      </Exhibit>
      <Exhibit name={"Public IPv6 Address"}>
        <IPAddress IPType={"IPv6"}/>
      </Exhibit>
    </div>
  );
}

export default App;
