import { useState } from "react";
import "./CodeEditor.css";
import "./CodeEditorResponsive.css";
import { handleState } from "../../utils/handleState";

interface CodeEditorProps {
    bodyContent: JSX.Element;
    topBarTitle: string;
}

function CodeEditor({ bodyContent, topBarTitle }: CodeEditorProps) {
    const [exitEditor, setExitEditor] = useState(false);
    const [minimizeEditor, setMinimizeEditor] = useState(false);
    const [maximizeEditor, setMaximizeEditor] = useState(false);

    let exitEditorTimeoutID: number;
    let minimizeEditorTimeoutID: number;
    let maximizeEditorTimeoutID: number;

    return (
        <div
            className={`content-lr__padding content-t-margin ${
                minimizeEditor ? "minimize" : ""
            }`}
        >
            <div
                className={`code-editor ${exitEditor ? "exit" : ""}  ${
                    maximizeEditor ? "maximize" : ""
                }`}
            >
                <div className="code-editor-topbar">
                    <div
                        className="red"
                        onClick={() =>
                            handleState(exitEditorTimeoutID, setExitEditor)
                        }
                    ></div>
                    <div
                        className="yellow"
                        onClick={() =>
                            handleState(
                                minimizeEditorTimeoutID,
                                setMinimizeEditor
                            )
                        }
                    ></div>
                    <div
                        className="green"
                        onClick={() =>
                            handleState(
                                maximizeEditorTimeoutID,
                                setMaximizeEditor
                            )
                        }
                    ></div>
                    <div className="topbar-title">{topBarTitle}</div>
                </div>

                {bodyContent}
            </div>
        </div>
    );
}

export default CodeEditor;
