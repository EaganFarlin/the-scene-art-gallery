import { useRef, useState } from "react";
// import galleryLogo from "/the_scene_art_gallery.png";
import heroBgImg from "/src/assets/IMG_1585-3598879456.jpeg";
import IfYouAreSubContainer from "./components/IfYouAreSubContainer";
import EventSummary from "./components/EventSummary";
import "./App.css";
import clsx from "clsx";

function App() {
  const [screenIsSmall, setScreenIsSmall] = useState(window.innerWidth < 1024);
  const emailInputLabel = useRef(null);
  const [emailInputLabelWidth, setEmailInputLabelWidth] = useState(0);

  function setEmailInLabWidthFunc() {
    const emailInputLabelEl: any = emailInputLabel.current;
    setEmailInputLabelWidth(emailInputLabelEl?.clientWidth);
  }
  document.addEventListener("DOMContentLoaded", setEmailInLabWidthFunc);

  window.addEventListener(
    "resize",
    () => {
      setTimeout(() => {
        setScreenIsSmall(window.innerWidth < 1024);
        setEmailInLabWidthFunc();
      }, 200);
    },
    true
  );
  return (
    <div>
      {/* Hero Background */}
      <div>
        <div className="w-full h-[100svh] z-[-1] absolute opacity-80 bg-black"></div>
        <div className="w-full h-[100svh] z-[-2] absolute">
          <img
            src={heroBgImg}
            className="w-full h-[100svh] z-[-1] absolute object-none"
            alt=""
          />
        </div>
      </div>

      <div className="h-[100svh]">
        {/* Navbar */}
        <nav className="bg-sky-800 text-white">
          {screenIsSmall ? (
            // Mobile
            <details className="w-full flex flex-col justify-end py-2 px-[10vw]">
              <summary className="flex justify-end">
                <img
                  src="icons/hamburger-menu-svgrepo-com.svg"
                  className="w-12 h-12"
                  alt="hamburger_menu"
                />
              </summary>
              <div className="flex flex-col">
                <button className="mb-1 underline decoration-2 text-2xl text-right">
                  Home
                </button>
                <details>
                  <summary className="mb-1 text-2xl hover:cursor-pointer text-right">
                    Our Artists
                  </summary>
                </details>
                <button className="mb-1 text-2xl text-right">Contact Us</button>
                <button className="mb-1 text-2xl text-right">Subscribe</button>
              </div>
            </details>
          ) : (
            // Desktop
            <div className="w-full flex justify-center py-6 px-16">
              <button className="underline decoration-2 text-2xl mr-12">
                Home
              </button>
              <details className="mr-12">
                <summary className="text-2xl hover:cursor-pointer">
                  Our Artists
                </summary>
              </details>
              <button className="text-2xl mr-12">Contact Us</button>
              <button className="text-2xl">Subscribe</button>
            </div>
          )}
        </nav>

        {/* Hero */}
        <div className="h-[100svh] mt-[-5rem] lg:mt-[-4.5rem] px-[10vw] flex items-center">
          <div className="w-full flex flex-col text-center">
            <h1 className="mb-4 text-5xl lg:text-6xl font-bold text-sky-700">
              The Scene Art Gallery
            </h1>
            <h2 className="text-2xl lg:text-3xl text-white">
              <i>Premier</i> Art Gallery for Georgia Artists
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[75vw] min-w-[20rem] max-w-[60rem] lg:w-1/2">
          {/* Who We Are For */}
          <div className="mt-20">
            <h3 className="mb-8 text-3xl lg:text-4xl">
              We Are <i>Your</i> Go-To Art Gallery
            </h3>
            <p className="mb-12 text-2xl lg:text-3xl">
              If You Are Looking To...
            </p>
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
                <IfYouAreSubContainer iconUri="icons\event-svgrepo-com.svg">
                  have an enjoyable time
                </IfYouAreSubContainer>
                <IfYouAreSubContainer iconUri="icons\people-svgrepo-com.svg">
                  host an event
                </IfYouAreSubContainer>
                <IfYouAreSubContainer iconUri="icons\simple-signature-contract-svgrepo-com.svg">
                  consign your art
                </IfYouAreSubContainer>
                <IfYouAreSubContainer iconUri="icons\canvas-svgrepo-com(1).svg">
                  display on our <i>Black Spotlight Wall</i>
                </IfYouAreSubContainer>
              </div>
            </div>
          </div>

          {/* Events */}
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl">Upcoming Events</h2>
            <div>
              <EventSummary
                title="Art Showcase"
                date="Mon, Jan. XX, 20XX"
                time="6:00 - 8:00 pm"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id neque aliquam vestibulum morbi blandit cursus risus."
              />
              <EventSummary
                title="Art Showcase"
                date="Mon, Jan. XX, 20XX"
                time="6:00 - 8:00 pm"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id neque aliquam vestibulum morbi blandit cursus risus."
              />
              <EventSummary
                title="Art Showcase"
                date="Mon, Jan. XX, 20XX"
                time="6:00 - 8:00 pm"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id neque aliquam vestibulum morbi blandit cursus risus."
              />
            </div>
          </div>
          {/* Subscribe */}
          <div>
            <h2 className="mb-8 text-3xl lg:text-4xl">Subscribe</h2>
            <form className="text-xl lg:text-2xl">
              <label ref={emailInputLabel} htmlFor="emailInput">
                <p className="mb-2">
                  Enter you email to stay up to date with local art!
                </p>
              </label>
              <input
                id="emailInput"
                type="email"
                autoComplete="true"
                className={clsx(
                  "mb-2 p-1 border-2 border-gray-600 rounded-sm text-xl"
                )}
                style={
                  screenIsSmall
                    ? { width: "100%", maxWidth: emailInputLabelWidth }
                    : { width: emailInputLabelWidth }
                }
              />
              <br />
              <input
                type="submit"
                value="Subscribe"
                className="p-2 border-2 bg-sky-700 text-lg font-bold text-white rounded-md cursor-pointer"
              />
            </form>
          </div>
        </div>
      </div>
      <footer className="w-full mt-20 mb-8 flex justify-center text-center">
        <div className="w-[75vw] min-w-[20rem] max-w-[60rem] lg:w-1/2">
          <div className="mb-4 text-2xl text-sky-700">
            <button className="mr-6">
              <p>Phone</p>
            </button>
            <button className="mr-6">
              <p>Email</p>
            </button>
            <button>
              <p>Instagram</p>
            </button>
          </div>
          <p className="mb-8 text-xl">
            2070 North Point Circle, Alpharetta Ga, 30022, US
          </p>
          <p className="text-gray-700">
            Copyright © 2023 The SCENE - All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
