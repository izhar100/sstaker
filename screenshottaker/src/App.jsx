import React, { useState } from 'react';
import InputForm from './components/InputForm';
import ScreenshotDisplay from './components/ScreenshotDisplay';
import html2canvas from 'html2canvas'

const App = () => {
  const [screenshots, setScreenshots] = useState([]);
  const [loading,setLoading]=useState(false)

  const handleCapture = async (url) => {
    try {
      setLoading(true)
      const response = await fetch(`http://localhost:3001/capture?url=${encodeURIComponent(url)}`);
      const { screenshots } = await response.json();
      console.log("screenshots:",screenshots)
      setScreenshots(screenshots);
    } catch (error) {
      console.error('Error:', error);
    }finally{
      setLoading(false)
    }
  };
  return (
    <div className="App" style={{fontFamily:"sans-serif"}}>
      <h1 style={{textAlign:'center'}}>Website Screenshot Taker</h1>
      <InputForm onCapture={handleCapture} />
      <br />
      <br />
      {
        loading
        ?
        <div>
          <h1 style={{textAlign:'center'}}>Loading...</h1>
        </div>
        :
        <ScreenshotDisplay screenshots={screenshots} />
      }
    </div>
  );
};

export default App;
