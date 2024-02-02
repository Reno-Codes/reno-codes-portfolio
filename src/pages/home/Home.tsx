import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import "./HomeResponsive.css";
import r_logo from "../../assets/r.png";
import { codeTag } from "../../utils/codeTag";
import { handleState } from "../../utils/handleState";
import CodeEditor from "../../components/codeEditor/CodeEditor";

function Home() {
    const navigate = useNavigate();
    const [rotate, setRotate] = useState(false);

    let rotateTimeoutID: number;

    const bodyContent = (
        <>
            <p className="code-tag">{codeTag.body_start}</p>

            <p className="code-tag child-tag">{codeTag.h1_start}</p>
            <h1 className="hi">
                Hi,
                <br />
                I'm{" "}
                <img
                    className={`inline-logo ${rotate ? "rotate" : ""}`}
                    src={r_logo}
                    alt=""
                    onClick={() => handleState(rotateTimeoutID, setRotate)}
                />
                enato,
                <br />
                web developer
            </h1>
            <p className="code-tag child-tag">{codeTag.h1_end}</p>

            <p className="code-tag child-tag">{codeTag.p_start}</p>

            <p className="description-p">#junior / Front End Developer</p>

            <p className="code-tag child-tag">{codeTag.p_end}</p>

            <button
                className="contact-button"
                onClick={() => navigate("/contact")}
            >
                Contact me!
                <div></div>
            </button>
            <p className="code-tag">{codeTag.body_end}</p>
        </>
    );

    return (
        <CodeEditor bodyContent={bodyContent} topBarTitle={"root"}></CodeEditor>
    );
}

export default Home;
