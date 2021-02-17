import './App.css'
import Navbar from './layout/Navbar'
import Main from './layout/Main'
import { NotificationContainer } from 'react-notifications'
import Geocode from "react-geocode";

function App() {

  Geocode.setLanguage("en");
  Geocode.setLocationType("ROOFTOP");
  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);

  return (
    <div className="App">
      <Navbar />
      <Main />
      <NotificationContainer />
    </div>
  );
}

export default App;
