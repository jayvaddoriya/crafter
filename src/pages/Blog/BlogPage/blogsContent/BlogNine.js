import React from "react";
import ninty from "../../../../assets/png/blog/ninty.webp";
import twentyTwo from "../../../../assets/png/blog/twentyTwo.webp";
import twentyThree from "../../../../assets/png/blog/twentyThree.webp";
import twentyFour from "../../../../assets/png/blog/twentyFour.webp";
import { Link, useNavigate } from "react-router-dom";

const BlogNine = () => {
  const navigate = useNavigate();
  return (
    <>
      <p>
        As we announced early this year, Crafter is building new tools to help
        young artists and production houses communicate with each other and
        collaborate to create great movie content . When we tested the Crafter
        networking app with a few selected artists (focus group), they have told
        us that it’s quicker creating a portfolio and easier to chat with an
        artist than reaching them on social media or sending an email.
      </p>
      <p>
        Today we are about to launch our private beta to support for young
        artists that need more powerful tools to communicate with other artists
        to create great content.
      </p>
      <p>Here’s how emerging artists can use Crafter.</p>
      <h3>PORTFOLIO</h3>
      <div className="mobileimagDiv">
        <img src={ninty} alt="blogsimages" />
      </div>
      <h3 className="decMarBottom">Simple, Easy to maintain Portfolio</h3>
      <p>
        Create your portfolio for free*. Crafter uses your audio and video
        projects from YouTube via links, so you can avoid uploading those. You
        need to upload your portfolio pictures.
      </p>
      <div className="mobileimagDiv">
        <img src={twentyTwo} alt="blogsimages" />
      </div>
      <h3 className="decMarBottom">Feed to keep in touch</h3>
      <p>
        Keep in touch with other artists that matter the most, like singers and
        filmmakers. With feed, you can follow their portfolios to see their
        latest portfolio pictures, audio projects and video projects . It can
        also help you to build meaningful connections in the future.
      </p>
      <h3>ACTIVITY</h3>
      <div className="mobileimagDiv">
        <img src={twentyThree} alt="blogsimages" />
      </div>
      <h3 className="decMarBottom">Moments that Matter</h3>
      <p>
        See portfolio photos, audio projects and video projects on Crafter
        instantly as soon as they update their portfolio. You can even follow
        the artists that seem matter to you most with a built-in follow option..
        With Crafter, you can get to know other artists even if you’re unknown
        to each other earlier.
      </p>
      <h3>FOLLOWERS</h3>
      <div className="mobileimagDiv">
        <img src={twentyFour} alt="blogsimages" />
      </div>
      <h3 className="decMarBottom">People to keep in touch</h3>
      <p>
        Keep in touch with the people that matter the most who are following
        you. They are like your family or coworkers. With followers you can see
        all the people that are following. Follow them back
      </p>
      <p>
        With this app, you will continue to have full advantage over connecting
        with artists to see their latest project updates.
      </p>
      <p>
        We will bring more artists onto Crafter over a period of time. To do so,
        we are currently working with artists to bring their friends who are
        artists onto Crafter
      </p>
      <p>
        If you are interested in how a film crew can start using these artists,
        you can learn more by writing to{"    "}
        <span onClick={() => navigate("/scheduleNow")}>
          contact@crafter.co.in
        </span>
        {"    "}and also visit{"    "}
        <Link to="https://www.crafter.co.in/">http://crafter.co.in</Link>
        {"    "}
        for more details and to download the application.
      </p>
      <p>
        As always, we will be listening carefully to feedback as we go forward.
      </p>
      <p>Thanks</p>
    </>
  );
};

export default BlogNine;
