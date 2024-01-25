import CityWeather from "@/pages/cityWeather";
import Home from "@/pages/home";
import { Route, Routes } from "react-router-dom";
import { AppContentContainer } from "./styles";

export default function AppRoutes() {
  return (
    <AppContentContainer>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<CityWeather />} path="/:city" />
      </Routes>
    </AppContentContainer>
  );
}
