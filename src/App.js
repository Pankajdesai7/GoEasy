import React  from 'react';
import './App.css';
import MobileView from './components/MobileView/MobileView';
import SearchContainer from './components/SearchContainer/SearchContainer';


function App() {

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 800;

  React.useEffect(() => {
    
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <div className="App">
      {width < breakpoint ? <MobileView/> : <SearchContainer/>}
    </div>
  );
}

export default App;
