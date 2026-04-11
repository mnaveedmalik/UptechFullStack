
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Nav } from "./components/nav";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <AppRoutes />
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
