import './App.css';
import MainPage from "./routes/mainPage.js"
import WritePost from "./pages/WritePost"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/writepost" element={<WritePost />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
