import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/App.scss";
import HomePage from "./components/HomePage";
import ContactForm from "./components/ContactForm";
import FrozenMoments from "./components/FrozenMoments";
import Blogs from "./components/Blogs";
import { ParallaxProvider } from "react-scroll-parallax";
import DetailsSentConfirmation from "./components/FormSubmitConfrimation";

function App() {
    return (
        <ParallaxProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/form" element={<ContactForm />} />
                    <Route exact path="/moments" element={<FrozenMoments />} />
                    <Route exact path="/blogs" element={<Blogs />} />
                    <Route
                        exact
                        path="/form-submit-confirmation"
                        element={<DetailsSentConfirmation />}
                    />
                </Routes>
            </BrowserRouter>
        </ParallaxProvider>
    );
}
export default App;
