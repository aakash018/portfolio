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
    background: ` linear-gradient(to bottom,rgb(10, 12, 19),rgba(10, 12, 19, 0.8)50%),url('/src/assets/PrjBG/${bgSS}')`,
    backgroundRepeat: "no-repeat",
    // backgroundPositionX: "50%",
    // backgroundPositionY: "300px",
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
      <div className="projectInfo__container" style={backgroundCSS}>
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
