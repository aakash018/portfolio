import React, { CSSProperties } from "react";
import hamro from "../../assets/PrjBG/hamroKhata.png"
import emo from "../../assets/PrjBG/emo1.png"
import drm from "../../assets/PrjBG/drm2.png"
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
        <div className="projectInfo__background" >
          { bgSS === "hamroKhata.png" &&
            <img src={hamro} alt="" />
          }
          { bgSS === "emo1.png" &&
            <img src={emo} alt="" />
          }
          { bgSS === "drm2.png" &&
            <img src={drm} alt="" />
          }
        </div>
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
