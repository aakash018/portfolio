import React, { CSSProperties } from "react";
import { FaGithub } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

interface Props {
  title: React.ReactNode;
  desc: React.ReactNode;
  showProject: boolean;
  theme: string;
  bgSS: string;
  githubLink?: string;
  setShowPrj: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectInfo: React.FC<Props> = ({
  title,
  desc,
  showProject,
  setShowPrj,
  theme,
  githubLink,
  bgSS,
}) => {
  const backgroundCSS: CSSProperties = {
    backgroundImage: ` linear-gradient(to bottom,rgb(10, 12, 19),rgba(10, 12, 19, 0.5)50%), linear-gradient(270deg,rgb(10, 12, 19),rgba(10, 12, 19, 0.5)60%) ,url('/PrjBG/${bgSS}')`,
  };

  const gitLogoStyle: CSSProperties = {
    color: theme,
    fontSize: "4rem",
    marginTop: "40px",
  };

  return (
    <div className={`projectInfo ${showProject ? "prj_active" : ""}`}>
      <div className="projectInfo__hide" onClick={() => setShowPrj(false)}>
        <IoMdClose />
      </div>
      <div className="projectInfo__container" >
        <div className="projectInfo__background" style={backgroundCSS}/>
        <div className="projectInfo__info">
          <div className="projectInfo__title">{title}</div>
          <div className="projectInfo__desc">
            {desc}
            <div className="projectInfo__git" style={gitLogoStyle}>
              <a href={githubLink} target="_blank"><FaGithub /></a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
