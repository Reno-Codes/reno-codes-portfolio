import { NavLink, useLocation } from "react-router-dom";
import "./Sidebar.css";
import "./SidebarResponsive.css";
import r_logo from "../../assets/r.png";
import instagramIcon from "../../assets/icons8-instagram.svg";
import youtubeIcon from "../../assets/icons8-youtube-logo.svg";
import linkedinIcon from "../../assets/icons8-linkedin.svg";
import githubIcon from "../../assets/icons8-github.svg";

const Sidebar = () => {
    const location = useLocation();

    return (
        <div className="sidebar">
            <ul>
                <NavLink to={"/"} className="r-logo no-top-border">
                    <img src={r_logo} alt="" />
                    {location.pathname == "/" && (
                        <>
                            <h4>@Reno-Codes</h4>
                            <p className="logo-title">Web Developer</p>
                        </>
                    )}
                </NavLink>
                <div className="amc-links">
                    <NavLink to={"/about"}>About</NavLink>
                    <NavLink to={"/myskills"}>My Skills</NavLink>
                    <NavLink to={"/contact"}>Contact</NavLink>
                </div>
                <div className="social-icons-container">
                    <a
                        href="https://instagram.com/renato_lulic"
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={instagramIcon} alt="" />
                    </a>
                    <a
                        href="https://www.youtube.com/@Reno-Codes"
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={youtubeIcon} alt="" />
                    </a>
                    <a
                        href="https://github.com/Reno-Codes"
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={githubIcon} alt="" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/renatolulic/"
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={linkedinIcon} alt="" />
                    </a>
                </div>
            </ul>
        </div>
    );
};

export default Sidebar;
