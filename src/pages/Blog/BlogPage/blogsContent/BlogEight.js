import React from "react";
import twenty from "../../../../assets/png/blog/twenty.webp";
import twentyOne from "../../../../assets/png/blog/twentyOne.webp";
import elevn from "../../../../assets/png/blog/elevn.webp";
import twell from "../../../../assets/png/blog/twell.webp";

const BlogEight = () => {
  return (
    <>
      <p>
        <i>
          What are film crews using to communicate with their members and Why?
        </i>
      </p>
      <p>
        Yes,WhatsApp for a lot of three-person teams, a lot of 10-person teams,
        and a lot of 100-person teams.
      </p>
      <p>
        We interviewed at least 50 film crews. Everyone complains about
        WhatsApp, and there are not many solutions to solve it. There’s
        something intrinsic to communicating with a larger number of people
        that’s going to be difficult to manage, especially given the amount of
        information we get. WhatsApp has gotten worse over the last 5 years or
        so. Five years ago, 5 to 10 percent of WhatsApp messages were
        unnecessary, and now it’s almost 70 percent. These are from different
        sources — WhatsApp marketing, order receipts, new delivery updates,
        group comments, forward messages, monthly statements, blah blah blah.
      </p>
      <div className="twoImagDiv">
        <img src={twenty} alt="blogsimages" />
        <img src={twentyOne} alt="blogsimages" />
      </div>
      <p>
        When you open your WhatsApp it’s a giant casserole of messages from
        family, friends, people you work with outside your organisation, and all
        those things we just mentioned above. It’s garbled. One of the
        advantages of using Crafter teams is that you tap on the app icon and
        it’s just the people at your movie production studio and just the people
        you work with. There’s a strong boundary there which aids in
        comprehension. It’s one less molecule of glucose in your brain to manage
        it all. But it adds up.
      </p>
      <p>
        That was one of the big insights for us when one of our beta clients
        switched to Crafter teams — they just had work conversations in one
        place which made their life easier, more focused, and somewhat decent
        search.
      </p>
      <h3 className="decMarBottom">
        Crafter teams is less and less like a chat app and more and more like a
        business communication app. What is it, really?
      </h3>
      <p>
        We go back and forth on our own one-sentence description. When we talk
        more evocatively we say “ It’s all your work communication in one place,
        instantly searchable, and available wherever you go.” On the marketing
        side we give a more concrete description like “It’s a business
        communication app.”
      </p>
      <p>
        Our ambition is that it’s a foundational bit of technology for most film
        crews. Whatever it is that they do, screenwriting, music composition,
        art department, costumes, or even visual effects department, every
        department has to communicate with other teams, and messages are flying
        around everywhere.
      </p>
      <p>
        The advantage of centralizing that — even if you forget search or iOS
        apps — the idea of centralizing that is a huge value over having
        messages fragmented into different inboxes. When someone joins your team
        next week, they will have historical archives available to them that
        they can fall back on, as opposed to starting at a company and having an
        empty inbox.
      </p>
      <div className="imagDiv">
        <img src={elevn} alt="blogsimages" />
      </div>
      <h3 className="decMarBottom">
        How do we address the differences between WhatsApp and Crafter Teams?
      </h3>
      <p>
        WhatsApp is the lowest common denominator. It’s the way we get
        communications from one person to another these days. There isn’t really
        an alternative. Sometimes people will have Facebook or Instagram
        messenger turned on, but 99 percent of the time if you’re sending a
        message to a human you don’t know that well you’re using WhatsApp.
      </p>
      <p>
        In the last six years, with the massiveness of messaging apps and the
        introduction of 4g and now 5g, most people now have different subsets of
        contacts they don’t communicate with primarily through WhatsApp. Some
        use Snapchat with three people, and iMessage with four to five people,
        and Twitter for a few people, and a much smaller group of friends with
        Instagram. All personal conversation internally is through WhatsApp.
        It’s not something people are conscious of. When we asked a bunch of
        film artists about how they communicate with their spouse or children or
        colleagues or college friends, it’ll be different apps in different
        modes for different people. People are getting more and more used to it.
      </p>
      <div className="imagDiv">
        <img src={twell} alt="blogsimages" />
      </div>
      <p>
        This is one of the reasons Crafter teams will be able to address. People
        are willing to accept one more framework — another app for communication
        with a specific subset of people.Work : We built exactly the same —
        Crafter teams for work communication for film crews.
      </p>
      <p>Thanks</p>
    </>
  );
};

export default BlogEight;
