import Messaging from "../../assets/gifs/features/Messaging.gif";
import OpenChannels from "../../assets/gifs/features/OpenChannels.gif";
import PrivateChannels from "../../assets/gifs/features/PrivateChannels.gif";
import ThreadedMessages from "../../assets/gifs/features/ThreadedMessages.gif";

export const featureData = [
  {
    title: "Open Channels",
    gif: OpenChannels,
    description: [
      "These channels are open for anyone at your current movie project to join or find in search. Increase transparency while allowing everyone to benefit from the context of your conversations.",
      "Channels provide you and your team with a shared view into the work being done. With access to the same information, everyone in the channel can work in sync, and new members have full context when they join.",
    ],
  },
  {
    title: "Private Channels",
    gif: PrivateChannels,
    description: [
      "For sensitive or confidential conversations, you can use private channels. Only those who are invited can view the channel or find its contents in search.",
      "As your crew members  work in channels, your conversations and files become a searchable archive that gets more useful with time. Find answers, get context and make better decisions without having to chase down people or information.",
    ],
  },
  {
    title: "Messaging",
    gif: Messaging,
    description: [
      "Communicate better with your entire team or only one person at a time",
      "When you can easily reach crew members – whether core team members or the whole team – you can work more effectively. Choose the right words to say, and either send your message immediately or schedule it for later.",
    ],
  },
  {
    title: "THREADED MESSAGES",
    gif: ThreadedMessages,
    description: [
      "Threads help you to create organised discussions around specific messages. They let you discuss a topic in more detail without adding clutter to a channel or direct message (DM) conversation.",
      "Threaded messages are a list of comments that roll up to an initial or parent message. Once a message has replies, it becomes a parent message. Any child messages of that parent message are called threaded replies. The whole bundle of a parent message and its replies is referred to as a thread. Each of the messages within a thread, whether parent or reply, is a threaded message. The most straightforward example where you might see this is Facebook’s reply option on someone’s post.",
    ],
  },
];
