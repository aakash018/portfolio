import React, { useContext, useEffect } from "react";
import { useState } from "react";
import ProjectInfo from "../components/shared/ProjectInfo";
import WorkHolder from "../components/shared/WorkHolder";
import hkLogo from "../assets/PrjLogos/dikstra.png";
import drmLogo from "../assets/PrjLogos/drm.png";
import emLogo from "../assets/PrjLogos/evolution.png";
import { MobileNavState } from "../App";

const Work: React.FC = () => {
  const [showHKInfo, setHKinfo] = useState(false);
  const [showEmoInfo, setEmoinfo] = useState(false);
  const [showDreamsInfo, setDreamsinfo] = useState(false);

  const { setShowMobileNav } = useContext(MobileNavState);

  useEffect(() => {
    setShowMobileNav(false);
  }, []);

  return (
    <>
      <ProjectInfo
        title={
          <h1>
            Dijkstra<span className="highlight_hk">Visualization</span>
          </h1>
        }
        desc={
          <>
            <p>
              {" "}
              Dijkstra's algorithm, devised by Dutch computer scientist Edsger
              W. Dijkstra, is a fundamental method for finding the shortest path
              in a weighted graph from a single source node to all other nodes.
              It operates by iteratively selecting the node with the smallest
              known distance from the source and updating the distances to
              neighboring nodes, gradually building the shortest path
              tree.Dijkstra's algorithm guarantees the shortest path when all
              edge weights are non-negative.
            </p>

            <p>
              {" "}
              This web app allows users to input start and end points on a grid
              while designating obstacles or walls. The algorithm then
              calculates the shortest path, avoiding the obstacles, and displays
              the route dynamically. This interactive platform serves as a
              hands-on tool for understanding pathfinding algorithms like
              Dijkstra's in a visually engaging manner.
            </p>

            <p>
              Visit the page here:
              <br />
              <a
                href="https://dijkastra-visualization.netlify.app/"
                target="_blank"
              >
                <span className="highlight">
                  https://dijkastra-visualization.netlify.app/
                </span>
              </a>
            </p>
          </>
        }
        showProject={showHKInfo}
        setShowPrj={setHKinfo}
        theme="#4e9aba"
        bgSS="dijkstra.png"
        githubLink="https://github.com/aakash018/dijkstras-visualization"
      />

      <ProjectInfo
        title={
          <h1>
            Evo<span className="highlight_emo">lution</span>
          </h1>
        }
        desc={
          <>
            <p>
              Curated from the dawn of human ingenuity to the present
              technological marvels, this comprehensive website encapsulates the
              chronicles of innovation. Journey through pivotal human
              inventions, from the discovery of fire to the advent of artificial
              intelligence, exploring the evolution of groundbreaking creations
              that shaped civilization and continue to define our world.
            </p>

            <p>
              Framer Motion is used to unleash the power of mesmerizing
              animations, infusing life into the website's narrative by
              seamlessly weaving captivating transitions, visually stunning
              effects, and dynamic motions that captivate and engage every
              visitor
            </p>

            <p>
              Visite the page here: <br />
              <a href="https://humanity-evolution.netlify.app/" target="_blank">
                {" "}
                <span className="highlight">
                  https://humanity-evolution.netlify.app/
                </span>
              </a>
            </p>
          </>
        }
        showProject={showEmoInfo}
        setShowPrj={setEmoinfo}
        theme="#f82933"
        bgSS="evolution.png"
        githubLink="https://github.com/aakash018/evolution"
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
            <p>
              Visite the page here: <br />
              <a href="https://livingthedreams.herokuapp.com/" target="_blank">
                {" "}
                <span className="highlight">
                  https://livingthedreams.herokuapp.com/
                </span>
              </a>
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
                  title="Dijkstra Visualization"
                  desc="A web app that visually demonstrates the shortest path algorithm by illustrating the process of finding the shortest path between nodes in a graph."
                  onClick={() => setHKinfo(true)}
                />

                <WorkHolder
                  logo={emLogo}
                  title="Evolution"
                  desc="Embark on a captivating voyage through the evolution of human innovation from fire to modern AI on this enlightening website."
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
