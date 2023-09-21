import React from "react";
import { MyContextProvider } from "./contexts/PasswordContext";

import MainLayout from "./containers/MainLayout";
import OptinsLayout from "./containers/OptionsLayout";
import Header from "./components/Header";
import RangeSelector from "./components/RangeSelector";

export default function App() {
  return (
    <MyContextProvider>
      <MainLayout>
        <Header />
        <OptinsLayout>
          <RangeSelector />
        </OptinsLayout>
      </MainLayout>
    </MyContextProvider>
  );
}
