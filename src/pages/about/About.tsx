import CodeEditor from "../../components/codeEditor/CodeEditor";
import { codeTag } from "../../utils/codeTag";
import "./About.css";

function About() {
    const bodyContent = (
        <>
            <p className="code-tag">{codeTag.body_start}</p>

            <p className="code-tag child-tag">{codeTag.h1_start}</p>
            <h2 className="hi-about">
                I will update
                <br />
                this page
                <br />
                when someone actually
                <br />
                hires me to
                <br />
                work on their projects!
            </h2>
            <p className="code-tag child-tag">{codeTag.h1_end}</p>

            <p className="code-tag child-tag">{codeTag.p_start}</p>

            <p className="description-p">DON'T FORGET THAT I'M A JUNIOR!</p>

            <p className="code-tag child-tag">{codeTag.p_end}</p>

            <p className="code-tag">{codeTag.body_end}</p>
        </>
    );

    return (
        <CodeEditor
            bodyContent={bodyContent}
            topBarTitle={"about"}
        ></CodeEditor>
    );
}

export default About;
