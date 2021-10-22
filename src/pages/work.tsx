import React, { useContext, useEffect } from "react";
import { useState } from "react";
import ProjectInfo from "../components/shared/ProjectInfo";
import WorkHolder from "../components/shared/WorkHolder";
import hkLogo from "../assets/PrjLogos/hamroK.png";
import drmLogo from "../assets/PrjLogos/drm.png";
import emLogo from "../assets/PrjLogos/emoChat.svg";
import { MobileNavState } from "../App";

const Work: React.FC = () => {
  const [showHKInfo, setHKinfo] = useState(false);
  const [showEmoInfo, setEmoinfo] = useState(false);
  const [showDreamsInfo, setDreamsinfo] = useState(false);

  const {setShowMobileNav} = useContext(MobileNavState)


  useEffect(() => {
    setShowMobileNav(false)
}, [])

  return (
    <>
      <ProjectInfo
        title={
          <h1>
            Hamro<span className="highlight_hk">Khata</span>
          </h1>
        }
        desc={
          <>
            <p>
              {" "}
              This is a web app, whose main purpose is to keep tract and devide
              expenditure, for students living together. The motivation of the
              project came when me and my my room mates had a really big problem
              keeping tract of the expences{" "}
            </p>

            <p>
              {" "}
              Basically after you make your account, you cna add information
              about expances and the app automatically divides it to every
              roommates and keep tracks everyons’s lone with eachother.{" "}
            </p>

            <p>I did full frontend to backend development fotr this project.</p>
            <p>
              Visite the page here:
              <br />
              hamrokahta.netlify.com
            </p>
          </>
        }
        showProject={showHKInfo}
        setShowPrj={setHKinfo}
        theme="#993762"
        bgSS="hamroKhata.png"
      />

      <ProjectInfo
        title={
          <h1>
            Emo<span className="highlight_emo">Chat</span>
          </h1>
        }
        desc={
          <>
            <p>
              In todays texting world ue of emojies can gotton pretty normal and
              even essential. Asking the “young generation we can get an idea on
              which emoji is hippy new thinge to use and which are for old
              peple, but if you ask me every the concept of emojie as a whole is
              getting out dated.{" "}
            </p>

            <p>
              {" "}
              Main Problem the decentrilization of the system where same emojie
              can mean 10 different thing. I don’t have to be a sherlock to
              figure your text out.
            </p>

            <p>
              This is where EmoChat comes in. It lets you use these pre-made
              things called emotion flags to deliver your thoughts and feelings
              in much centerlized way.{" "}
            </p>
            <p>
              The full project was developed by me using React and Scss for
              frontend and Node and Express on backend, Typescript beinf
              language of choice.
            </p>
            <p>
              Visite the page here: <br />
              <a href="https://emo-chat.vercel.app/" target="_blank"> <span className="highlight" >https://emo-chat.vercel.app</span></a> 
            </p>
          </>
        }
        showProject={showEmoInfo}
        setShowPrj={setEmoinfo}
        theme="#048C5C"
        bgSS="emo1.png"
        githubLink="https://github.com/aakash018/emo-chat"
      />

      <ProjectInfo
        title={
          <h1>
            <span className="highlight_drm">Dreams</span>
          </h1>
        }
        desc={
          <>
            <p>
              The subject of dreams has always facinated me. The only bad part
              about them, we often tend to forget it once we wake up.
            </p>

            <p>
              Dreams is a web app that let’s you keep record of these precious
              memories. Keeping track of your dreams lets you know your self
              better. Not only you can keep tour journal, but you can also share
              this with worls, and read other stories and have time of your
              life.
            </p>

            <p>
              The full project was developed by me using React and CSS for
              frontend and Node and Express on backend, Javascript being
              language of choice.
            </p>
            <p>Visite the page here: <br />
            <a href="https://livingthedreams.herokuapp.com/" target="_blank"> <span className="highlight" >https://livingthedreams.herokuapp.com/</span></a> 
</p>
          </>
        }
        showProject={showDreamsInfo}
        setShowPrj={setDreamsinfo}
        theme="#047089"
        bgSS="drm2.png"
        githubLink="https://github.com/aakash018/Dreams"
      />

      <div className="work">
        <div className="work__container">
          <div className="work__timeline">
            <div className="work__timeline_bar" />
            <div className="work__timeline_projects">
              <div className="work__timeline_projects_title">
                Selected <span className="highlight">Works</span>{" "}
              </div>
              <div className="work__timeline_projects_list">
                <WorkHolder
                  logo={hkLogo}
                  title="HamroKhata"
                  desc="A user  based web app to keep track of expenditure mainly for students living in droms."
                  onClick={() => setHKinfo(true)}
                />

                <WorkHolder
                  logo={emLogo}
                  title="EmoChat"
                  desc="A chat app with addition of emotion flags to replace emojies"
                  onClick={() => setEmoinfo(true)}
                />
                <WorkHolder
                  logo={drmLogo}
                  title="Dreams"
                  desc="A dream journal to keep track of and share your dreams"
                  onClick={() => setDreamsinfo(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
