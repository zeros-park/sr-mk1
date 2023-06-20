// import logo from './logo.svg';
// import './App.css';
import FloatingLayer from './layout/floatingLayerLegacy/floatingLayer';
import Logo from './layout/logo';
import Header from './layout/header';
import Aside from './layout/aside';
import Main from './layout/main';

function App() {
  const layoutOptions = {
    mediaWidthOptions: {
      minimal: 300,
      simple: 600,
    },
    asideLeftSizeOptions: {
      minimal: null,
      simple: 60,
      default: 200,
    },
    headerHeightSize: 50,
  }
  return (
    <div className="App">
      <FloatingLayer>
        <span>yes!</span>
      </FloatingLayer>
      <Logo
        layoutOptions={layoutOptions}
      />
      <Header 
        layoutOptions={layoutOptions}
      />
      <Aside
        layoutOptions={layoutOptions}
      />
      <Main
        layoutOptions={layoutOptions}
      />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
