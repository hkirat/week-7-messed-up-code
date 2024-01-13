import RoutesContainer from "./components/routes/RoutesContainer";
import { CounterContextProvider } from "./context/counter";
import Navbar from "./components/navigation/Navbar";
import { BrowserRouter } from "react-router-dom";
import "./App.css";


function App() {
  // wrap anyone that wants to use the teleported value inside a provider
  return (
    <div>
      <BrowserRouter>
        <CounterContextProvider>
          <Navbar />
          <RoutesContainer />
        </CounterContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
