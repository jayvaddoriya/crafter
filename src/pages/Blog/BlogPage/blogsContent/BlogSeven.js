import React from "react";
import { Link } from "react-router-dom";
import ninty from "../../../../assets/png/blog/ninty.webp";

const BlogSeven = () => {
  return (
    <>
      <p>
        We know your digital presence is a pain point for many emerging artists,
        in fact 85% of emerging artists say they could not build an optimal
        profile. Today, we’re introducing a feature, “Portfolio”, that can help
        you list your potential skills , whether you’re a singer, film maker,
        cinematographer or an editor etc. , before you even think of for any
        role.
      </p>
      <div className="mobileimagDiv">
        <img src={ninty} alt="blogsimages" />
      </div>
      <p>
        There are a lot of factors that go into consideration whether you are a
        right fit for the project, and lacking optimal presence can often be a
        roadblock to finding a new opportunity. Now, on Crafter , you can create
        your portfolio, add your skills and projects match with what the role
        requires. Production houses who find your portfolio is a fit can refer
        you to the role, and information about your skills and projects , all
        without ever visiting or applying any audition.
      </p>
      <p>
        When Production houses on Crafter search for artists for their project
        hiring, they’ll start to see a “list of emerging artists” . From here
        they can understand your skills and determine whether you could be a
        potential fit for the role eventually making a hiring decision. Soon,
        you’ll also have the project hiring invitation on your phone so you
        don’t have to send portfolio in every time you’re looking for a role.
      </p>
      <p>
        You can also update your skills within your portfolio with your latest
        projects so we can provide you with more relevant project
        recommendations that fit your skills.
      </p>
      <p>
        We’re always looking for ways to help emerging artists make informed
        decisions about their career, and with all of these insights now
        directly within a project notification , we’re making it even easier to
        find the project that’s right for you.
      </p>
      <p>
        Start your Project search and explore this new feature on Crafter App.
      </p>
      <p>
        Visit {"    "}
        <Link to="https://www.crafter.co.in/" target="_blank">
          www.crafter.co.in
        </Link>
        {"    "}
      </p>
    </>
  );
};

export default BlogSeven;
