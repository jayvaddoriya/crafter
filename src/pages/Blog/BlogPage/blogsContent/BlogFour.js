import React from "react";
import thirty from "../../../../assets/png/blog/thirty.webp";
import fourty from "../../../../assets/png/blog/fourty.webp";
import fifty from "../../../../assets/png/blog/fifty.webp";
import seventy from "../../../../assets/png/blog/seventy.webp";
import eighty from "../../../../assets/png/blog/eighty.webp";

const BlogFour = () => {
  return (
    <>
      <p>Casting management app for entertainment industry</p>
      <p>
        Using Crafter Ray film studios and new age teams in movie industry can
        easily manage their casting requirements very easily and efficiently.
        They can
      </p>
      <div className="innerPtag">
        <p>1. Create casting calls</p>
        <p>2. Receive applications through our one stop channel</p>
        <p>3. Move artists through the casting pipeline</p>
        <p>4. Manage calendar (schedule auditions, communicate with artists)</p>
        <p>5. Hire artists</p>
      </div>
      <h3>Create casting calls and receive applications</h3>
      <div className="imagDiv">
        <img src={thirty} alt="blogsimages" />
      </div>
      <h3>View artist profiles</h3>
      <p>
        Studios can receive and manage applications. They also have access to
        critical data such as portfolio images, previous projects,
        recommendations etc with multiple filter options to sort suitable
        artists with right portfolios and make informed decision.
      </p>
      <div className="imagDiv">
        <img src={fourty} alt="blogsimages" />
      </div>
      <h3>Move artists through the casting pipeline</h3>
      <p>
        Studios can update artists about the project and our app will take care
        of sending messages, emails about project’s details. Teams will have a
        simplified overview of the status of their casting calls . Artists can
        also review and manage jobs easily.
      </p>
      <div className="imagDiv">
        <img src={fifty} alt="blogsimages" />
      </div>
      <h3>Manage calendar (audition, communication)</h3>
      <p>
        Guiding call-to-action buttons through each casting stage and then send
        an invitation to the audition.
      </p>
      <div className="imagDiv">
        <img src={seventy} alt="blogsimages" />
      </div>
      <div className="imagDiv">
        <img src={eighty} alt="blogsimages" />
      </div>
      <p>
        If any of studios or teams in movie industry are interested in trying
        out our beta software for managing their casting calls reach out to us
        at contact@crafter.co.in with the subject
        <strong> “Interesting in signing up for Crafter Ray Beta ”</strong>
      </p>
      <p>Thanks</p>
    </>
  );
};

export default BlogFour;
