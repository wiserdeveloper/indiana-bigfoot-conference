import React from "react";

import "./speakers.css";

import adamDavies from "../components/img/adam-davies.jpg";
import charlieRaymond from "../components/img/charlie.jpg";
import marcDeWerth from "../components/img/mark.jpg";
import amyBue from "../components/img/amy.jpeg";
import gregYost from "../components/img/greg.jpg";
import ernie from "../components/img/ernie.jpg";

export default function Speakers() {

  const speakers = [
    {
      name: "Adam Davies",
      description:
        "I’m Adam Davies, and I am an explorer, adventurer, cryptozoologist, and author. I’ve traveled to some of the most remote and dangerous parts of the world in search of yet-to-be-discovered animal species. From the dense jungles of the Congo and Sumatra to the deserts of Mongolia, and the mountains of Nepal, I have crossed the globe in search of scientific evidence of the existence of these creatures.",
      picture: adamDavies,
    },
    {
      name: "Charlie Raymond",
      description:
        "Charlie holds a bachelor's degree in Psychology from the University of Florida. He founded the Kentucky Bigfoot Research Organization in 1997 to document all credible Bigfoot encounters in Kentucky. For over three decades he has interviewed countless witnesses, conducted investigations and held expeditions in the hopes of one day proving their existence. He believes Bigfoot to be a 'flesh and blood' unidentified hominin, very closely related to humans. One day he hopes to establish laws in Kentucky to protect these magnificent creatures. Charlie is also a BFRO Investigator for Kentucky.",
      picture: charlieRaymond,
    },
    {
      name: "Marc DeWerth",
      description:
        "Marc DeWerth of the Ohio Bigfoot Conference will be joining us for a special presentation of 'The Ohio Bigfoot'. Marc DeWerth of Columbia Station, Ohio has been a longtime Bigfoot Investigator with over 30 years of experience. He's involved with groups like the BFRO, and the Ohio Bigfoot Organization. Currently Marc and his group, The Ohio Bigfoot Organization, are the hosts of the Ohio Bigfoot Conference which is a nationally recognized event that takes place every Spring at Salt Fork State Park. Marc's talk 'The Ohio Valley Bigfoot' will center on the flap of recent sighting reports that have taken place in Ohio over the last few years. He will also play some including audio recordings that he and his team captured in 2021 - 2023 in Ohio.",
      picture: marcDeWerth,
    },
    {
      name: "Amy Bue",
      description: "A writer, educator, and Certified Volunteer Naturalist from Northeast Ohio, Amy Bue has been involved in the search for Sasquatch since 2012. Six years later, she cofounded Project Zoobook, a collaboration of Bigfoot investigators working alongside primate zookeepers, primatologists, wildlife biologists, anthropologists, and other scientists. Both her individual work and work with this group earned her the 2018 International Bigfoot Conference’s Dedicated Researcher Award. In 2022, Amy and members of her group spent time with members of Montana’s Blackfeet Nation, both gathering stories of the tribe’s hairy man and investigating encounter sites. They were also featured in the Wall Street Journal as an example of the science going on behind the scenes in the search for evidence of Sasquatch.",
      picture: amyBue,
    },
    {
      name: "Greg Yost (Squatchman)",
      description:
        "I'm Greg Yost and most know me by Squatchman!!! I reside in Jeffersonville Indiana since 1993 . Right across the Ohio River I was born and raised in Louisville Kentucky going into the Navy out of Seneca High School for 11 years of service!!!! I'm single and have a son Eugene ( Son of Squatchman) and a stepdaughter Helana!!!! I got into the Bigfoot Phenomenon back in November of 2002 when I had my first encounter, rather frightening at the Ferdinand State Forest which I'll tell at the IBRO conference I was totally into it and have spent the last 21 years on what I call The Journey to the Truth!!!! Have had many experiences, encounters and interactions with the Forrest People and gathered great pictures and evidence of them and things they do I call woodcraft!!!! I've been Blessed with my Journey and the most important thing I've learned from it is to communicate and interact with the Forest People and build a trusted mutual relationship with them on their terms!!!! I respect them and they respect me and at times I ask for favors from them like vocals, knocks eyeglow and even up to pushing trees over almost always getting something to the amazed people who have witnessed this and it's been Many!!!!! I don't consider myself a researcher or a evidence seeker ,I'm in it for much more, My Journey and the people I share it with!!!! Didn't know much about Bigfoot 21 years ago but how much I've learned over the years!!!!! This is my calling and Love and looking forward to sharing my story with you at the conference!!!!!",
      picture: gregYost,
    },
    {
      name: "Packman Paranormal (Ernie & Denise Pack)",
      description:
        "Packman Paranormal was formed in 2020 by Denise and Ernie Pack. We are a paranormal team based in historic and haunted West Point KY. Why the name Packman Paranormal? Ernie Pack has had the nickname Packman for over 40 years. What does the famous Pac-Man do? He chases ghosts. What has Packman Paranormal been up to? Catching ghosts…...along with encounters with cryptids and other such beings that aren't SUPPOSED to exist. Denise has been a paranormal investigator virtually all of her life and has filled many roles on various teams over the years. She once headed the Southern Paranormal Alliance, an association of paranormal groups from throughout the southeastern United States. Ernie has always had an interest in the paranormal field and began his formal paranormal journey as a young adult. He honed his skills as a tour guide and host of investigations at Waverly Hills in Louisville, Ky. where he met Denise thanks to a very special spirit there. The two worked at Waverly as a team for a season as tour guides and overnight hosts before stepping away. When Waverly was under the threat of a hostile takeover, the couple spearheaded the battle to SAVE WAVERLY HILLS. After that fight was won and Waverly was again under the control of it's rightful owners, the Packs purchased and moved into Kentucky's most haunted house, the Ditto House Inn in West Point, Ky. They struck a deal with the City of West Point to open Civil War Fort Duffield to private overnight investigations and other paranormal events. Fort Duffield has quickly developed a reputation as an incredibly active location not only for spirit activity, but also Bigfoot and even a few UFO encounters by guests. Packman Paranormal has been featured in magazines, television shows, documentaries, radio shows, numerous YouTube videos and podcasts. They have formed tight bonds with some of the most well known and respected investigators of the paranormal, from spirits to cryptids, UFO's and all other things unexplained. They have investigated many of the most well known and most haunted locations in the country and have learned from their experiences that there truly is more to this world than conventional wisdom would lead us to believe. There's no limit to the where their journey might take them next...",
      picture: ernie,
    },
  ];

  return (
    <section id="speaker">
      <div className="speakers-container">
        <div className="speakers-content">
          <span className="speakers-topper">Speakers</span>
          <h2 className="speakers-title">Meet the Speakers</h2>
        </div>
        {speakers &&
          speakers.map((speaker) => {
            return (
              <div className="speakers-members-container">
                <div className="speakers-members-content">
                  <div className="speakers-member">
                    <div className="speakers-img-container">
                      <picture>
                        <img
                          loading="lazy"
                          decoding="async"
                          srcSet={speaker.picture}
                          alt={speaker.name}
                          aria-hidden="true"
                        />
                      </picture>
                    </div>
                    <div className="speakers-text">
                      <h3 className="speaker-name">{speaker.name}</h3>
                      <p>{speaker.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        <div className="schedule-container">
          <h2>Speaker Schedule</h2>
          <ul>
            <li>Leroy (IBRO Host of Event) - 9:00am to 10:00am</li>
            <li>Packman Paranormal - 10:15am t0 11:15am</li>
            <li>Charlie Raymond - 11:30am to 12:30pm</li>
            <li>Squatchman (Greg Yost) - 2pm to 3pm</li>
            <li>Amy Bue - 3:15pm to 4:15pm</li>
            <li>Marc DeWerth - 4:30pm to 5:30pm</li>
            <li>Adam Davies - 5:45pm to 6:45pm</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
