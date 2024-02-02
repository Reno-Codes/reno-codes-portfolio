import { useEffect, useState } from "react";
import CodeEditor from "../../components/codeEditor/CodeEditor";
import { codeTag } from "../../utils/codeTag";
import "./Contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
    const [nameInput, setNameInput] = useState<string>("");
    const [emailInput, setEmailInput] = useState<string>("");
    const [textAreaInput, setTextAreaInput] = useState<string>("");
    const [isEmpty, setIsEmpty] = useState<boolean>(true);
    const [isSentSuccessfully, setIsSentSuccessfully] =
        useState<boolean>(false);
    const [isSendingError, setIsSendingError] = useState(false);

    useEffect(() => {
        setIsEmpty(!nameInput || !emailInput || !textAreaInput);
    }, [nameInput, emailInput, textAreaInput]);

    const handleContactMessage = () => {
        const serviceId = "service_ddl5odu";
        const templateId = "template_tmwhmt6";
        const publicKey = "plvSwMnwrtz7r7WIC";

        const templateParams = {
            from_name: nameInput,
            from_email: emailInput,
            to_name: "Reno-Codes",
            message: textAreaInput,
        };

        emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Email sent successfully", response);

                setIsSentSuccessfully(true);
                setTimeout(() => {
                    setIsSentSuccessfully(false);
                }, 2000);

                setNameInput("");
                setEmailInput("");
                setTextAreaInput("");
            })
            .catch((error: any) => {
                console.error("Error sending email: ", error);
                setIsSendingError(true);
                setTimeout(() => {
                    setIsSendingError(false);
                }, 2000);
            });
    };

    const bodyContent = (
        <>
            <p className="code-tag">{codeTag.form_start}</p>

            <p className="code-tag child-tag">{codeTag.input_start}</p>
            <div className="form-container">
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                />
                <textarea
                    name=""
                    cols={30}
                    rows={7}
                    placeholder="Write a message..."
                    value={textAreaInput}
                    onChange={(e) => setTextAreaInput(e.target.value)}
                ></textarea>
            </div>
            <p className="code-tag child-tag">{codeTag.input_end}</p>

            {isSentSuccessfully && (
                <>
                    <p className="code-tag child-tag">{codeTag.p_start}</p>
                    <p className="message-sent-p">Message successfully sent!</p>
                    <p className="code-tag child-tag">{codeTag.p_end}</p>
                </>
            )}

            {isSendingError && (
                <>
                    <p className="code-tag child-tag">{codeTag.p_start}</p>
                    <p className="message-sent-p error">
                        An error occured! Try again.
                    </p>
                    <p className="code-tag child-tag">{codeTag.p_end}</p>
                </>
            )}

            <p className="code-tag child-tag">{codeTag.btn_start}</p>

            <button
                className={`contact-button ${
                    !isEmpty ? "" : "disabled-button"
                }`}
                disabled={!nameInput || !emailInput || !textAreaInput}
                onClick={() => handleContactMessage()}
            >
                Send Message!
            </button>

            <p className="code-tag child-tag">{codeTag.btn_end}</p>

            <p className="code-tag">{codeTag.form_end}</p>
        </>
    );

    return (
        <CodeEditor
            bodyContent={bodyContent}
            topBarTitle={"contact"}
        ></CodeEditor>
    );
}

export default Contact;
