import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./BlogPage.scss";

const BlogPage = () => {
  const {
    state: { blogItem, index },
  } = useLocation();
  return (
    <div className="container">
      <div className="imageAndText">
        <img className="blogPageImage" src={blogItem.image} alt="blogImage" />
        <h1 className="headingQue">{blogItem.title}</h1>
        <p className="authorAndDate">Author: Navatej Kumar, 23rd March 2022</p>
        <div className="otherText">
          {index === 1 && (
            <>
              <p>
                We’re all aware of how every one use social media to find acting
                jobs and connect with filmmakers and casting directors. But
                let’s flip the script and talk about what it’s like on their
                end. There are better ways casting directors or ADs use other
                than social media to cast their projects.
              </p>
              <p>
                They use the traditional sources to cast their projects (talent
                agencies, etc.). But sometimes they need to dig deeper when they
                are doing a big search. This is where the social media comes in.
                Every one started using social media, kicking and screaming.
                They no longer didn’t see the point, and surely understand the
                misuse today? These opinions were from a casting director while
                doing our research.
              </p>
              <p>
                “OMG, I was shocked to see the hundreds of messages from non
                serious people just bombarding our inbox.
              </p>
              <p>
                When I was casting for a project we posted casting call on
                social media . I was contacted by hundreds of aspirants who had
                been following us on Instagram, Twitter and Facebook. Every one
                claimed she/he could be considered a “good hire,” and were there
                any roles for her? (We were shooting on location in Hyderabad,
                and didn’t have the budget to bring in actors from Vizag., aside
                from the lead characters.) More than 90 % of the aspirants did
                not even send their demo reel, and within a week we had to stop
                accepting entries from social media. We had auditioned few
                artists using our network and hired them for a pivotal role in
                the project. Here’s what no one did right: no one used good
                social media etiquette. No one was polite and had already
                established a sort of “annoyance” with me on Twitter and
                Facebook before reaching out her request to me.
              </p>
              <p>
                As a casting director I always wanted to use technology for all
                my upcoming project. I always want to be specific about our
                needs, set a deadline, use an alternate platform for processing
                applications, and be ready to wade through hundreds of
                submissions easily . I also sometimes email. There, I can send
                an audition invitation with all the info , but, unfortunately,
                social media doesn’t allow me to do all these tasks, so I’ll
                have to use different channels for different tasks ( Like email
                for auditions, WhatsApp for messaging ). This is cumbersome,
                time consuming, expensive and not productive.
              </p>
              <p>
                When Navatej from Crafter team reached out to me and explained
                about the features of casting management software, I tried and
                really liked it and looking forward to use it for all my future
                project requirements.
              </p>
              <h3>1. Reduces time spent with administrative tasks.</h3>
              <p>
                Our software allows casting directors to speed up their casting
                process and save them a huge amount of time for more important
                tasks. They can stop manually publishing their casting calls on
                social media, or sending follow up emails or messages
                individually. Our software allows them to do all that with just
                a few clicks.
              </p>
              <h3>2. Provides Better and Faster Portfolio Screening</h3>
              <p>
                Everyone agrees that it is overwhelming for casting directors to
                manually screen every incoming application for a new role, given
                that each casting call receives on average 100 applications.
                It’s a heavy workload for only 4 to 6 of the candidates to make
                it to auditions.
              </p>
              <p>
                Our software automates the initial screening of all
                applications, using algorithms to match candidates against job
                requirements. Those that do not meet minimum requirements are
                rejected and the rest is ranked according to qualification
                indicators.
              </p>
              <p>
                This allows casting directors to stop wasting time with bad
                applicants and getting too tired to correctly identify promising
                profiles.
              </p>
              <h3>3. Facilitates Collaborative Hiring</h3>
              <p>
                Our software comes with amazing features that facilitate
                collaborative hiring. Casting teams can easily and quickly share
                notes and ratings on every candidate and drive a collective
                decision-making process, in which every member has a say.
              </p>
              <p>
                Collaborative hiring has major benefits for movie studios, such
                as allowing to assemble more diverse and successful teams.
              </p>
              <h3>4. Improves the Quality of Hire</h3>
              <p>
                The quality of hire also gets improved using our software. And
                there are many reasons for that to happen. For instance, thanks
                to the initial automated matching of candidates, casting
                directors only engage with the best candidates in the applicant
                pool.
              </p>
              <p>
                Also, with the automation of administrative tasks casting
                directors have more time available to engage with candidates in
                the selection process. This means that they can gather more
                information and make more complete assessments of the candidates
                before making a hiring decision.
              </p>
              <h3>5. Speeds up the Casting Cycle</h3>
              <p>
                Having all candidates’ information centralised and organised in
                one single platform, gives casting directors faster access to
                the casting process overview. Automated communication features
                also increase the casting cycle, making it quicker to provide
                general follow up and to move candidates for the next steps.
                Overall, our software allows casting directors to develop and
                execute a more efficient workflow.
              </p>
              <h3>6. Boosts Studio Brand</h3>
              <p>
                A consistent and engaging recruitment process strengthens studio
                branding. With our software any studio can attract and engage
                more candidates. Features like fully branded roles pages, for
                example, allow to impress candidates and improve your talent
                pipeline.
              </p>
              <h3>7. Enhances Candidate Experience</h3>
              <p>
                Besides building a more efficient casting process, our software
                enables an enhanced candidate experience, which is key for the
                success of the casting process. After all, candidates may become
                your future ambassadors.
                <br />
                Our software is an important piece of the digital era of
                casting. There’s no doubt that studios need to adapt their
                strategy and implement tech solutions that enable better and
                faster casting.
              </p>
              <p>
                Features and benefits of our casting management software So,
                what exactly can our software do for you?
                <br />A modern and well-designed our software can help you
                achieve casting goals and overcome challenges by offering
                following features:
              </p>
              <div className="innerPtag">
                <p>1. Powerful sourcing tool</p>
                <p>2. Central repository of applicants’ portfolios</p>
                <p>3. Automated portfolio parsing and screening</p>
                <p>4. Easy audition scheduling</p>
                <p>5. Audition reviews and scorecards</p>
                <p>6. Automated email responses</p>
                <p>7. Easy team collaboration and communication</p>
                <p>8. Recruiting analytics and reporting</p>
              </div>
              <p>
                If you would like to subscribe please use the link below to
                register your studio{" "}
                <Link to=" https://bit.ly/2PcRa5z" target="_blank">
                  {" "}
                  https://bit.ly/2PcRa5z
                </Link>
                . If you are interested to look at the product{" "}
                <Link to="https://bit.ly/31tqdxf" target="_blank">
                  https://bit.ly/31tqdxf
                </Link>
              </p>
              <p>Thanks</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
