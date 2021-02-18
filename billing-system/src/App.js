import './App.css'
import Navbar from './layout/Navbar'
import RouteConfig from './navigation/RouteConfig'
import { NotificationContainer } from 'react-notifications'
import Geocode from "react-geocode";

function App() {

  Geocode.setLanguage("en");
  Geocode.setLocationType("ROOFTOP");
  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);

  return (
    <div className="App">
      <Navbar />
      <RouteConfig />
      <NotificationContainer />
    </div>
  );
}

export default App;
