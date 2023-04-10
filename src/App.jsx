import { createContext, useState } from "react";

import "./App.css";
import Header from "./components/header/Header";

export const AppContext = createContext();

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="App">
      <AppContext.Provider value={{ cartCount, setCartCount }}>
        <Header />
      </AppContext.Provider>
    </div>
  );
}

export default App;
