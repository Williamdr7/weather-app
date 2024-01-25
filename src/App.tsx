import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./style/globalStyles";
import { WeatherContextProvider } from "./contexts/WeatherContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppTheme from "./components/ui/AppTheme";
import { AppSettingsContextProvider } from "./contexts/AppSettingsContext";
import Header from "./components/ui/Header";

export default function App() {
  return (
    <BrowserRouter>
      <AppSettingsContextProvider>
        <AppTheme>
          <ToastContainer />
          <WeatherContextProvider>
            <Header />
            <GlobalStyle />
            <AppRoutes />
          </WeatherContextProvider>
        </AppTheme>
      </AppSettingsContextProvider>
    </BrowserRouter>
  );
}
