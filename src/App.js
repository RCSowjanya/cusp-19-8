import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import NewsLetter from "./Components/NewsLetter";
import GetQuote from "./Components/GetQuote";
import JoinUs from "./Components/JoinUs";
import JoinusForm from "./Components/JoinusForm";
import LoginPage from "./DashboardPages/LoginPage";
import DashBoard from "./DashboardPages/DashBoard";
import JoinUsUploads from "./Components/JoinUsUploads";
import CustomerDetails from "./DashboardPages/CustomerDetails";
import CustomerFullDetails from "./Components/CustomerFullDetails";
function App() {
  const location = useLocation();

  const isDashboardPage = () => {
    const dashboardRoutes = [
      "/dashboard",
      "/login",
      "/users",
      "/Leads",
      "/Installers",
      "/CustomerDetails",
    ]; // Add your dashboard routes here
    return dashboardRoutes.some((route) => location.pathname.startsWith(route));
  };

  return (
    <div className="App">
      {!isDashboardPage() && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/getquote" element={<GetQuote />} />
        <Route path="/joinusform" element={<JoinusForm />} />
        <Route path="/joinusuploads" element={<JoinUsUploads />} />
        <Route path="/customer" element={<CustomerFullDetails />} />

        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      {!isDashboardPage() && <NewsLetter />}
      {!isDashboardPage() && <Footer />}
    </div>
  );
}

export default App;
