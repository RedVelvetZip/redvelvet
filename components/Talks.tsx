import React from "react";

const talksData = [
  {
    title: "Panel: Bitcoin Scaling",
    link: "https://x.com/HouseofZK/status/1907172281945637281",
    platform: "Twitter",
  },
  {
    title: "Presentation: Alt-VM Supremacy",
    link: "https://www.youtube.com/watch?v=MASiLnRAqFk",
    platform: "YouTube",
  },
  {
    title: "Presentation: RWAs Keynote at XRPL Apex",
    link: "https://youtu.be/e-FFj8Zu7pA?feature=shared&t=7359",
    platform: "YouTube",
  },
  {
    title: "Panel: Ethereum L2 Decentralization",
    link: "https://www.youtube.com/watch?v=TyblcKsygkY",
    platform: "Youtube",
  },
  {
    title: "Podcast: GRTiQ Interview",
    link: "https://www.youtube.com/watch?v=oyD22PBvmDw",
    platform: "YouTube",
  },
  {
    title: "Messari Lite Tutorial",
    link: "https://www.youtube.com/watch?v=ulMIRP2p-lk",
    platform: "Youtube",
  },
  {
    title: "Panel: Browser Tools for Adoption",
    link: "https://www.youtube.com/watch?v=C7ZAj0_mi1I",
    platform: "YouTube",
  },
  {
    title: "Presentation: State of Web3 Security",
    link: "https://www.youtube.com/watch?v=STe3EUpEnqw",
    platform: "Youtube",
  },

  {
    title: "Panel: Privacy Mass Adoption",
    link: "https://www.youtube.com/watch?v=fkXp1xHdu0I",
    platform: "Youtube",
  },
  {
    title: "Spaces: Bitcoin LSTs",
    link: "https://x.com/i/spaces/1dRKZYBPmDXxB",
    platform: "Twitter",
  },
  {
    title: "Spaces: Building a Bitcoin L2",
    link: "https://x.com/i/spaces/1nAJEgmAWnYKL",
    platform: "Twitter",
  },
];

const Talks = () => {
  return (
    <div>
      <h2>My Talks</h2>
      <ul>
        {talksData.map((talk, index) => (
          <li key={index}>
            <a href={talk.link} target="_blank" rel="noopener noreferrer">
              {talk.title} ({talk.platform})
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Talks;
