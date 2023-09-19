import React from "react";

import "./ibro.css";

import leroyNancy from "../components/img/leroy-nancy.jpg";
import jimTonya from "../components/img/jim-tonya.jpg";
import ed from "../components/img/ed.jpg";
import debbie from "../components/img/debbie.png";

const IBRO = () => {
     
  const researchers = [
    {
      name: "LeRoy & Nancy",
      description:
        "We are the owners and operators of the IBRO. We are so blessed to have such wonderful people that we can call our friends and researchers. We have been researching for over ten years. We have been running the IBRO since the spring of 2014. With each passing year, we gain more researchers and the group continues to grow. Please feel free to contact me at any time with any questions.",
      picture: leroyNancy,
    },
    {
      name: "Ed Blakley",
      description:
        "Ed has spent a lot of time researching over the past ten years. Because he is such a good tracker, a number of the foot casting that we show during our presentations are a direct result of Ed finding the footprints. Ed continues to bring a lot for the IBRO and a valued member of our researchers.",
      picture: ed,
    },
    {
      name: "Jim & Tonya",
      description:
        "We are Jim and Tonya from Wiser's Weird Wanderings and we have been with Leroy since he took over the IBRO. I've always believed in Bigfoot, and always wanted to be a researcher.  My wife is a skeptical believer, which makes us a good team.  We've had lots of experiences, but only one actual sighting.  With each outing, the IBRO team grows closer, like a family, we come away with more questions than answers.  While the truth evades us, we won't stop in our quest for the answers.",
      picture: jimTonya,
    }
  ];

  return (
    <section id="ibro">
      <div className="ibro-container">
        <div className="ibro-content">
          <span className="ibro-topper">About Us</span>
          <h2 className="ibro-title">Indiana Bigfoot Research Organization</h2>
        </div>

        <div className="ibro-text-container" data-testid="ibroParagraph">
          <p>
            The Indiana Bigfoot Research organization is a non-profit
            organization. First organized by Steve and Violet Abney in 2005. It
            has been under a few names but the organization has always had the
            highest respect to land owners , law enforcement and commit to no
            kill research. We love our natural resources such as forest, lakes ,
            stream, and all the wildlife within the forest. Our goal is to
            provide reports from around the State of Indiana, while researching
            areas to gather information and document it. In the Spring of 2014,
            Steve and Violet Abney decided due to heath issues it was time for
            someone else to take over the Organization. LeRoy Nail a life time
            resident of Morgan county Indiana excepted the challenge to help
            move Organization and commit to the on-going research and Growth. 
          </p>
          <p>
            2014 into the Summer of 2016 has been a great for our organization.
            Over the last couple years we have gain more researchers and with
            all the help we have gain more evidence . we have experienced some
            good vocals and encounters and made some good casting along the way.
            Our researchers have spend countless hours at night and during the
            day in the forest and it has paid off. We not only know where they
            are now. we are trying to learn patterns when they are moving or
            hunting. We are watching moon phases along with weather patterns. We
            know now that once you spend allot of time in the area the closer
            they will move around you. I’m sure over more time we will continue
            to learn and have more experiences. I’m so looking forward to do
            more research and getting more evidence.
          </p>
        </div>

        <div className="ibro-members-container">
          <h2>Meet the Researchers</h2>

          <div className="ibro-members-content">
            
              {researchers &&
                researchers.map((researcher) => {
                  return (
                    <div className="ibro-member" data-testid="researchers">
                      <div className="ibro-img-container">
                        <picture>
                          <img
                            loading="lazy"
                            decoding="async"
                            srcSet={researcher.picture}
                            alt={researcher.name}
                            aria-hidden="true"
                          />
                        </picture>
                      </div>
                      <div className="ibro-text">
                        <h3>{researcher.name}</h3>
                        <p>
                          {researcher.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IBRO;
