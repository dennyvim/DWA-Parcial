import React from 'react';
import Pets from "./components/organisms/Pets/Pets";
import PetsProvider from "./providers/PetsProvider";

function App() {
  return (
    <PetsProvider>
      <Pets></Pets>
    </PetsProvider>
  );
}

export default App;
