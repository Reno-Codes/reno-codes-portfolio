import { useState } from "react";
import CodeEditor from "../../components/codeEditor/CodeEditor";
import "./MySkills.css";
import { getRandomColor } from "../../utils/getRandomColor";

interface Skill {
    name: string;
    proof: string;
}

type SkillsArray = Skill[];

function MySkills() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [hoveredColor, setHoveredColor] = useState<string | null>(null);

    const skills: SkillsArray = [
        { name: "HTML", proof: "<div></div><div></div> x100" },
        { name: "CSS", proof: "color: white" },
        { name: "JAVASCRIPT", proof: "console.log(error)" },
        { name: "REACT", proof: "className = 'container12'" },
        { name: "WORDPRESS", proof: "elementor-nulled.exe" },
        { name: "TYPESCRIPT", proof: "error: any | any" },
    ];

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
        setHoveredColor(getRandomColor());
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
        setHoveredColor(null);
    };

    const bodyContent = (
        <div className="skills-grid">
            {skills.map((_, index) => (
                <div
                    key={index}
                    className={`skill-item ${
                        hoveredIndex === index ? "hovered" : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        border:
                            hoveredIndex === index
                                ? `1px solid ${hoveredColor}`
                                : "1px solid #000000",
                        color:
                            hoveredIndex === index
                                ? `${hoveredColor}`
                                : "#ffffff60",
                        boxShadow:
                            hoveredIndex === index
                                ? `0 0 5px 5px ${hoveredColor}`
                                : "",
                    }}
                >
                    {hoveredIndex === index
                        ? skills[index].proof
                        : skills[index].name}
                </div>
            ))}
        </div>
    );

    return (
        <CodeEditor bodyContent={bodyContent} topBarTitle="skills"></CodeEditor>
    );
}

export default MySkills;
