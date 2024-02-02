import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import MySkills from "./pages/myskills/MySkills";
import Contact from "./pages/contact/Contact";
import { useEffect, useState } from "react";

interface TrailItem {
    x: number;
    y: number;
}

function App() {
    const [trail, setTrail] = useState<TrailItem[]>([]);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const trailItem: TrailItem = { x: clientX, y: clientY };
            setTrail((prevTrail) => [...prevTrail, trailItem]);

            if (trail.length > 0) {
                setTrail((prevTrail) => prevTrail.slice(-1));
            }
        };

        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, [trail]);
    return (
        <>
            {trail.map((item, index) => (
                <div
                    key={index}
                    className="neon-dot"
                    style={{ left: item.x, top: item.y }}
                ></div>
            ))}
            <Sidebar />
            <div className="content">
                <Routes>
                    <Route
                        path="/reno-codes-portfolio/"
                        element={<Home></Home>}
                    ></Route>
                    <Route
                        path="reno-codes-portfolio/about"
                        element={<About></About>}
                    ></Route>
                    <Route
                        path="reno-codes-portfolio/myskills"
                        element={<MySkills></MySkills>}
                    ></Route>
                    <Route
                        path="reno-codes-portfolio/contact"
                        element={<Contact></Contact>}
                    ></Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
