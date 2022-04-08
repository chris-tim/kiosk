import { BrowserRouter as RouterWrap, Routes, Route, Link, useParams } from "react-router-dom";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Location from "./components/Location";
import Wating from "./components/Wating";
import Progress from "./components/Progress";
import Video from "./components/Video";
import './reset.css';
import styles from './css/Css.module.css'

function App() {
  return (
    <div className="App">
        <Menu/>
        <Video/>
        <RouterWrap>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/location" element={<Location/>}/>
                <Route path="/Wating" element={<Wating/>}/>
                <Route path="/Progress" element={<Progress/>}/>
            </Routes>
        </RouterWrap>
    </div>
  );
}

export default App;
