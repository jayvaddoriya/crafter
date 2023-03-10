import React from "react";
import { Link } from "react-router-dom";
import twentyFive from "../../../../assets/png/blog/twentyFive.webp";
import twentySix from "../../../../assets/png/blog/twentySix.webp";
import twentySeven from "../../../../assets/png/blog/twentySeven.webp";
import twentyTwo from "../../../../assets/png/blog/twentyTwo.webp";
import twentyEight from "../../../../assets/png/blog/twentyEight.webp";
import twentyNine from "../../../../assets/png/blog/twentyNine.webp";
import thirtyOne from "../../../../assets/png/blog/thirtyOne.webp";

const BlogFive = () => {
  return (
    <>
      <p>
        We’ve released a series of improvements that make connecting with
        artists on Crafter easier for everyone.
      </p>
      <p>
        For a thousand of young artists across India both budding and popular,
        Crafter is where they can connect with other artists every day.
      </p>
      <p>
        That’s a fundamental shift away from the silos of social networking
        toward professional networking in entertainment industry. The young
        artists spend more than nine hours each week looking for opportunities ,
        including around 90 minutes of active use on social networks every day.
        That adds up to more than 500 minutes each week, from trying to find
        opportunities to connecting with other artists for possible
        collaboration.
      </p>
      <p>
        Every artist — located in metro cities or remote villages, popular or
        not — should be able to take advantage of the platform and collaborate
        together. That’s why we’re releasing a simpler, more organised
        experience for our users. The rollout started today and will continue
        over the next several weeks . When it arrives, you’ll be able to:
      </p>
      <div className="innerPtag">
        <ul>
          <li>
            <p>
              Use search and search across India by profession ( E.g. Director ,
              Actor, Editor etc.) — Just type director
            </p>
          </li>
          <li>
            <p>
              Discover key projects using hash key words all at the top of your
              search bar (E.g CRFT2020 — The key word for currently ongoing
              Indian short film festival ) You can also submit your entry (
              <Link to="https://bit.ly/2JsS9YY" targrt="_blank">
                https://bit.ly/2JsS9YY
              </Link>
              ) — Just type keyword
            </p>
          </li>
          <li>
            <p>
              Start a message with any artist with a handy new compose button on
              their profile —
            </p>
          </li>
          <li>
            <p>
              Rate projects of other artists you are following — Rate on a scale
              of 1 to 10
            </p>
          </li>
          <li>
            <p>Inviting your friends to the app __More friend</p>
          </li>
          <li>
            <p>Find jobs across India based on your skill and location</p>
          </li>
        </ul>
      </div>
      <h3 className="decMarBottom">Easier to search</h3>
      <p>
        Let’s start from the top. The first thing you’ll notice is the new
        search bar, which makes it much quicker and easier to search Crafter
      </p>
      <p>You can try</p>
      <div className="innerPtag">
        <ul>
          <li>
            <p>First names —</p>
          </li>
          <li>
            <p>
              Professions ( E.g. Director, Actor, Model, Singer, Editor, Music
              composer, Designer etc.)
            </p>
          </li>
          <li>
            <p>Hash key words (E.g. #CRFT2020)</p>
          </li>
        </ul>
      </div>
      <div className="threeImagDiv">
        <img src={twentyFive} alt="blogsimages" />
        <img src={twentySix} alt="blogsimages" />
        <img src={twentySeven} alt="blogsimages" />
      </div>
      <h3>Essential features at your fingertips</h3>
      <h3 className="decMarBottom">Rating :</h3>
      <p>
        Crafter is released with all the essential features you need. And we’re
        making it far easier to find and message those artists. You’ll just
        click shortcuts — a new lightning pop up screen next to the project
        field — and kick off work with an app. Pretty nifty, right?
      </p>
      <div className="twoImagDiv">
        <img src={twentyTwo} alt="blogsimages" />
        <img src={twentyEight} alt="blogsimages" />
      </div>
      <h3 className="decMarBottom">Chat with artists</h3>
      <p>
        When you’re ready to start a new conversation, you can now do so using
        an all-new message button on their profile. It’s a convenient way to
        begin a conversation and build meaningful connections .
      </p>
      <div className="threeImagDiv">
        <img src={twentyNine} alt="blogsimages" />
        <img src={thirtyOne} alt="blogsimages" />
        <img src={twentyTwo} alt="blogsimages" />
      </div>
      <h3 className="decMarBottom">And one more thing…</h3>
      <p>
        Thank you. We partnered closely with our early users to add all of these
        improvements. Each of you, along with anyone who’s ever written to us
        with feedback and suggestions, has helped shape this new Crafter
        experience.
      </p>
      <p>
        You can always reach out to us by writing an email to
        contact@crafter.co.in for any more product ideas.
      </p>
      <p>
        Download Crafter app from the link below to check all the new updates
      </p>
      <div className="appLinkDiv">
        <Link
          to="https://play.google.com/store/apps/details?id=com.crafter.network"
          target="_blank
        "
        >
          <div className="appLeftSide">
            <h5>
              Crafter : Find & Work With Movie Artists Near By — Apps on Google
              Play
            </h5>
            <p>
              Networking in the entertainment world is now made easy with the
              Crafter app. It’s the one and only professional…
            </p>
            <p className="linktag">play.google.com</p>
          </div>
          <div className="appRoghtSIde">
            <svg
              width="155"
              height="48"
              viewBox="0 0 155 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.5 29.25L32.15 30.85C28.45 34.85 23.8833 36.85 18.45 36.85C17.3167 36.85 16.2667 36.7833 15.3 36.65C11.5667 36.15 8.38333 34.7167 5.75 32.35C3.15 29.95 1.48333 26.95 0.75 23.35C0.516667 22.2833 0.4 21.1 0.4 19.8C0.4 17.7 0.6 15.7333 1 13.9C1.43333 12.0667 2.16667 10.35 3.2 8.75C4.63333 6.48333 6.41667 4.63333 8.55 3.2C10.6833 1.73333 13.0167 0.766664 15.55 0.299998C16.7167 0.0999983 17.8667 -1.43051e-06 19 -1.43051e-06C21.6333 -1.43051e-06 24.0333 0.516666 26.2 1.55C28.4 2.58333 30.2667 4.03333 31.8 5.9L26.85 13.2L25.95 12.1C23.9833 10.0333 21.6833 9 19.05 9C18.35 9 17.7833 9.06667 17.35 9.2C15.3833 9.6 13.8333 10.45 12.7 11.75C11.5667 13.05 10.85 14.8667 10.55 17.2C10.4833 17.8 10.45 18.2667 10.45 18.6C10.45 19.3667 10.55 20.1333 10.75 20.9C11.3167 23.0667 12.3 24.75 13.7 25.95C15.1 27.1167 16.8167 27.7 18.85 27.7C19.25 27.7 19.6667 27.7 20.1 27.7C20.5 27.6 20.7833 27.5333 20.95 27.5C21.9833 27.3 23 26.9333 24 26.4C25 25.8333 26 25.0667 27 24.1L27.9 23.1L33.5 29.25ZM51.1133 17.65L50.1133 17.45C49.9466 17.4167 49.6966 17.4 49.3633 17.4C49.1633 17.4 48.9633 17.4 48.7633 17.4C48.4966 17.4667 48.3133 17.5 48.2133 17.5C46.9133 17.7667 46.0299 18.2333 45.5633 18.9C45.0966 19.5333 44.8633 20.6667 44.8633 22.3V36H36.3133V10.8H44.5133V13.45L44.7633 13.15L45.2633 12.65C46.8633 11.0833 48.5799 10.3 50.4133 10.3H51.1133V17.65ZM76.1578 36H67.6578V34L66.9078 34.6C65.5411 35.5333 64.0411 36.1 62.4078 36.3C62.1411 36.3333 61.8745 36.35 61.6078 36.35C61.3745 36.3833 61.0911 36.4 60.7578 36.4C58.1245 36.4 55.9745 35.6333 54.3078 34.1C52.6411 32.5667 51.8078 30.7 51.8078 28.5C51.8078 26.5333 52.5745 24.8 54.1078 23.3C55.6411 21.8 57.6745 20.8833 60.2078 20.55C60.4745 20.4833 60.7745 20.45 61.1078 20.45C61.4745 20.45 61.7578 20.45 61.9578 20.45C62.5578 20.45 63.0078 20.4667 63.3078 20.5C65.2745 20.6667 66.8078 21.1667 67.9078 22V20.85C67.9078 19.7833 67.4911 18.9333 66.6578 18.3C65.8578 17.6333 64.5245 17.1833 62.6578 16.95C61.9911 16.85 61.2411 16.8 60.4078 16.8C59.2745 16.8 57.9578 16.9 56.4578 17.1L55.4078 17.25V10.75L56.4078 10.65L57.3078 10.55L59.3078 10.45C65.3078 10.45 69.6078 11.3333 72.2078 13.1C74.8411 14.8333 76.1578 17.6 76.1578 21.4V36ZM67.3078 26.45C66.7411 25.9167 65.9578 25.55 64.9578 25.35C64.4911 25.2833 64.1411 25.25 63.9078 25.25C63.1411 25.25 62.4745 25.4167 61.9078 25.75C61.3411 26.05 60.9245 26.45 60.6578 26.95C60.4245 27.45 60.3078 27.9 60.3078 28.3C60.3078 30.1333 61.4245 31.15 63.6578 31.35L64.9078 31.3C65.3078 31.2333 65.5745 31.1833 65.7078 31.15C66.0078 31.0167 66.2245 30.9333 66.3578 30.9C67.4578 30.3667 68.0078 29.4667 68.0078 28.2C68.0078 27.5667 67.7745 26.9833 67.3078 26.45ZM94.6898 10.8L93.9398 16.4H90.2898V42.95L81.7398 47.55V16.4H78.0398L78.7898 10.8H81.7398V8.1C81.7398 7.16667 82.0398 6.18333 82.6398 5.15C83.2732 4.08333 84.1898 3.11666 85.3898 2.25C86.2232 1.65 87.2232 1.23333 88.3898 0.999998C89.5565 0.766665 91.0565 0.649999 92.8898 0.649999L93.9398 0.749998V7.95H93.4898C92.5565 7.95 91.8398 8.06666 91.3398 8.3C90.8398 8.5 90.4898 8.81666 90.2898 9.25V10.5V10.8H94.6898ZM108.625 10.8L107.925 16.4H104.825V25.2L104.875 26.95C104.875 27.7833 104.975 28.3667 105.175 28.7C105.409 29 105.909 29.2667 106.675 29.5C107.142 29.6333 107.642 29.6833 108.175 29.65V36L107.525 36.05L105.825 36.1H103.875C100.975 36.1 98.9754 35.4333 97.8754 34.1C96.8087 32.7333 96.2754 30.35 96.2754 26.95V16.4H93.0754L93.8254 10.8H96.2754V4.7L104.825 1.65V10.8H108.625ZM136.469 21.85L119.719 26.7L119.769 26.95L119.819 27.15C120.186 28.1833 121.102 28.8667 122.569 29.2C122.936 29.3 123.286 29.35 123.619 29.35C124.586 29.35 125.536 29.0333 126.469 28.4C127.169 27.9667 127.836 27.2 128.469 26.1L128.619 25.65L136.219 28.15L135.769 29C134.536 31.4 132.869 33.25 130.769 34.55C128.669 35.85 126.302 36.5 123.669 36.5C123.136 36.5 122.702 36.4833 122.369 36.45C122.069 36.4167 121.569 36.35 120.869 36.25C119.102 35.95 117.486 35.35 116.019 34.45C114.086 33.25 112.602 31.7333 111.569 29.9C110.536 28.0333 110.019 26.0167 110.019 23.85C110.019 21.45 110.486 19.25 111.419 17.25C112.352 15.25 113.769 13.6 115.669 12.3C117.036 11.3333 118.586 10.6667 120.319 10.3C121.352 10.0667 122.419 9.95 123.519 9.95C126.452 9.95 129.036 10.8167 131.269 12.55C133.502 14.25 135.069 16.6333 135.969 19.7L136.469 21.85ZM127.869 18.95L127.819 18.75L127.619 18.35C126.919 16.75 125.619 15.95 123.719 15.95C123.286 15.95 122.836 16 122.369 16.1C120.102 16.7333 118.836 18.3167 118.569 20.85L118.519 21.6L127.869 18.95ZM154.775 17.65L153.775 17.45C153.609 17.4167 153.359 17.4 153.025 17.4C152.825 17.4 152.625 17.4 152.425 17.4C152.159 17.4667 151.975 17.5 151.875 17.5C150.575 17.7667 149.692 18.2333 149.225 18.9C148.759 19.5333 148.525 20.6667 148.525 22.3V36H139.975V10.8H148.175V13.45L148.425 13.15L148.925 12.65C150.525 11.0833 152.242 10.3 154.075 10.3H154.775V17.65Z"
                fill="#fff"
              />
            </svg>
          </div>
        </Link>
      </div>
      <p>Thanks</p>
    </>
  );
};

export default BlogFive;
