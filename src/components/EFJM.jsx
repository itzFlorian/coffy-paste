import { useNavigate } from "react-router";



// - - - - - ICONS - - - - - 
import bg from "../images/coffypaste_bg_568217968.png"
import logoM from "../images/coffypaste_logo_900.png"
import efjm from "../images/efjm_logo.png"
import avatar from "../images/coffypaste_icon_avatar.png"
import xing from "../images/sm_xing.png"
import linkedin from "../images/sm_linkedin.png"
import github from "../images/sm_github.png"
import plus from "../images/coffypaste_icon_plus.png"
import website from "../images/coffypaste_icon_website.png"



const EFJM = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="logoM-container"
      onClick={() => navigate("/")}>
        <img src={logoM} alt="logo" />
      </div>

      <div>
        <div className="rotate">
          <h1 className="center">Hello, we are "efjm"</h1>
        </div>


        {/* E L E N I */}
        <div className="mt splitscreen">

          <div className="member-card mr2">
            <div className="icon-container icon-top bg-gradL center">
              <img src={avatar} className="avatar-icon"/>
            </div>
            <div>
              <h2 className="efjm-h2">Eleni</h2>
              <p>
              I am a passionate fullstack developer in progress.
              </p>
              < br/>
              <p>
              I love to learn and in this project I wrote the backend together with Jeff. 
              </p>
              < br/>
              <p>
              I enjoyed a lot working with the members of my team and I am looking forward to our next project.
              </p>


              <div className="circle-container flex row">
                <div className="circle bg-gradL center">
                  <a href="https://www.linkedin.com/in/eleniorfanou" target="_blank">
                    <img src={linkedin} className="sm-icon"></img>
                  </a>
                </div>
                <div className="circle bg-gradL center">
                  <a href="https://www.xing.com/profile/eleni_orfanou3/cv" target="_blank">
                    <img src={xing} className="sm-icon"></img>
                  </a>
                </div>
                <div className="circle bg-gradL center">
                  <a href="https://github.com/elenosis" target="_blank">
                    <img src={github} className="sm-icon"></img>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* F L O R I A N */}
          <div className="member-card mr2">
            <div className="icon-container icon-top bg-gradL flex center">
              <img src={avatar} className="avatar-icon"/>
            </div>
            <div>
              <h2 className="efjm-h2">Florian</h2>
              <p>I am a full-stack developer. Seems like I'm a native coder. That's what my team-members say.</p>
              <br />
              <p>I've got a good spirit in understanding the syntax of <span className="foBE">Node.js, React,</span> simply <span className="foBE">JavaScript</span>.</p>
              <br />
              <p>I set up all the components and wired it with the backend. That's what I like the most.</p>


              <div className="circle-container flex row">
              <div className="circle bg-gradL center">
                  <a href="https://www.linkedin.com/in/florian-mewes-947649240/" target="_blank">
                    <img src={linkedin} className="sm-icon"></img>
                  </a>
                </div>
                <div className="circle bg-gradL center">
                  <a href="https://www.xing.com/profile/Florian_Mewes6/cv">
                    <img src={xing} className="sm-icon"></img>
                  </a>
                </div>
                <div className="circle bg-gradL center">
                  <a href="https://github.com/itzFlorian" target="_blank">
                    <img src={github} className="sm-icon"></img>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* J E F F */}
          <div className="member-card mr2">
            <div className="icon-container icon-top bg-gradL flex center">
              <img src={avatar} className="avatar-icon"/>
            </div>
            <div>
              <h2 className="efjm-h2">Jeff</h2>
              <p>I am a budding full-stack developer from Germany with a soft spot for the backend.</p>
              <br />
              <p>
              My focus in this project was on the backend. I programmed this in close cooperation with Eleni.
              </p>
              <br />
              <p>
              I supported the frontend team around Florian and Martin where I could.</p>

              <div className="circle-container flex row">
                <div className="circle bg-gradL center">
                  <a href="https://www.linkedin.com/in/jeff-braun-0959091a4/" target="_blank">
                    <img src={linkedin} className="sm-icon"></img>
                  </a>
                </div>
                <div className="circle bg-gradL center">
                  <a href="https://www.xing.com/profile/Jeff_Braun2/cv" target="_blank">
                    <img src={xing} className="sm-icon"></img>
                  </a>
                </div>
                <div className="circle bg-gradL center">
                  <a href="https://github.com/BreffJaun" target="_blank">
                    <img src={github} className="sm-icon"></img>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* M A R T I N */}
          <div className="member-card mr2">
            <div className="icon-container icon-top bg-gradL flex center">
              <img src={avatar} className="avatar-icon"/>
            </div>
            <div>
              <h2 className="efjm-h2">Martin</h2>
              <br />
              <p>I am a high skilled media-designer try to learn webdev to become an awesome UX-UI-Designer.</p>
              <br />
              <p>
              As a natural born designer i love <span className="foBE">CSS</span>, <span className="foBE">Sass</span> and a little bit <span className="foBE">React</span>.
              </p>
              <br />
              <p>
              That`s why i came up with the <span className="foBE">UX</span> und <span className="foBE">UI</span> of this app.</p>
              <br />
              <p>
              MY amazing three team-members made an awesome job by setting up the frontend, mainly made by Florian, and the backend, set up by the amazing Eleni und the awesome Jeff.</p>

              <div className="circle-container flex row">
                <div className="circle bg-gradL center">
                  <a href="https://www.linkedin.com/in/martin-gro%C3%9F-003146255/" target="_blank">
                    <img src={linkedin} className="sm-icon"></img>
                  </a>
                </div>
                <div className="circle bg-gradL center">
                  <a href="https://www.xing.com/profile/Martin_Gross14/cv" target="_blank">
                    <img src={xing} className="sm-icon"></img>
                  </a>
                </div>
                <div className="circle bg-gradL center">
                  <a href="https://github.com/grossesbewirken" target="_blank">
                    <img src={github} className="sm-icon"></img>
                  </a>
                </div>
                <div className="circle bg-gradL center">
                  <a href="https://grossesbewirken.de/">
                    <img src={website} className="sm-icon"></img>
                  </a>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

      
      {/* F O O T E R */}
      <div className="close-section">
        <div onClick={() => navigate("/")}>
          <img src={plus} alt="close" />
        </div>
      </div>
    </>
  );
};

export default EFJM;