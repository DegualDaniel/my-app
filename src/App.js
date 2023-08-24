// import logo from './logo.svg';
import './App.css'; 
import Good from './components/Good'    
import Welcome from './components/Welcome'; 
function App() {
  return (
    <div className="App"> 
    {/* USING PROPS WITH FUNCTIONAL  COMPONENT */}
      <Good  name = "Emmanuel" heroName = "cooler mouth" /> 
      <Good  name = "Chima" heroName = "Jumper" /> 
      <Good  name = "Esther" heroName = "Ac Girl" />   
      {/* USING PROPS WITH CLASS COMPONENT */}
      <Welcome name = "Degual" heroName = "Machala" />
      <Welcome name = "Daniel" heroName = "Machals" />
      <Welcome name = "Awa" heroName = "Machoski"/>
    </div>
  );
}

export default App;
