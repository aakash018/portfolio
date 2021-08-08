import React, { CSSProperties } from "react";
import { FaGithub } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

interface Props {
  title: React.ReactNode;
  desc: React.ReactNode;
  showProject: boolean;
  theme: string;
  bgSS: string;
  setShowPrj: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectInfo: React.FC<Props> = ({
  title,
  desc,
  showProject,
  setShowPrj,
  theme,
  bgSS,
}) => {
  const backgroundCSS: CSSProperties = {
    backgroundSize: "cover",
    background: ` linear-gradient(to bottom,rgb(10, 12, 19),rgba(10, 12, 19, 0.5)50%), linear-gradient(270deg,rgb(10, 12, 19),rgba(10, 12, 19, 0.5)60%) ,url('/src/assets/PrjBG/${bgSS}')`,
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
              <FaGithub />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
