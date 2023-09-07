import React from "react";

import adamDavies from '../components/img/adam-davies.jpg'
import charlieRaymond from '../components/img/charlie.jpg'
import markDeWerth from '../components/img/mark.jpg'
import amyBue from '../components/img/amy.jpg'
import gregYost from '../components/img/greg.jpg'
import ernie from '../components/img/ernie.jpg'

export default function Speakers() {
     return (
          <div className="speakers">
               <div className="speakers-container">
                    <div className="speakers-content">
                         <picture>
                              <img 
                              loading="lazy"
                              decoding="async"
                              srcSet={adamDavies}
                              alt="Adam Davies"
                              aria-hidden="true"
                              />
                         </picture>
                         <h2>Adam Davies</h2>
                         <p>I’m Adam Davies, and I am an explorer, adventurer, cryptozoologist, and author. I’ve traveled to some of the most remote and dangerous parts of the world in search of yet-to-be-discovered animal species. From the dense jungles of the Congo and Sumatra to the deserts of Mongolia, and the mountains of Nepal, I have crossed the globe in search of scientific evidence of the existence of these creatures.</p>
                    </div>
                    <div className="speakers-content">
                         <picture>
                              <img 
                              loading="lazy"
                              decoding="async"
                              srcSet={charlieRaymond}
                              alt="Adam Davies"
                              aria-hidden="true"
                              />
                         </picture>
                         <h2>Charlie Raymond</h2>
                         <p>Charlie holds a bachelor's degree in Psychology from the University of Florida. He founded the Kentucky Bigfoot Research Organization in 1997 to document all credible Bigfoot encounters in Kentucky. For over three decades he has interviewed countless witnesses, conducted investigations and held expeditions in the hopes of one day proving their existence. He believes Bigfoot to be a "flesh and blood" unidentified hominin, very closely related to humans. One day he hopes to establish laws in Kentucky to protect these magnificent creatures. Charlie is also a BFRO Investigator for Kentucky.</p>
                    </div>
                    <div className="speakers-content">
                         <picture>
                              <img 
                              loading="lazy"
                              decoding="async"
                              srcSet={markDeWerth}
                              alt="Mark DeWerth"
                              aria-hidden="true"
                              />
                         </picture>
                         <h2>Mark DeWerth</h2>
                         <p>TBA</p>
                    </div>
                    <div className="speakers-content">
                         <picture>
                              <img 
                              loading="lazy"
                              decoding="async"
                              srcSet={amyBue}
                              alt="Amy Bue"
                              aria-hidden="true"
                              />
                         </picture>
                         <h2>Amy Bue</h2>
                         <p>TBA</p>
                    </div>
                    <div className="speakers-content">
                         <picture>
                              <img 
                              loading="lazy"
                              decoding="async"
                              srcSet={gregYost}
                              alt="Greg Yost"
                              aria-hidden="true"
                              />
                         </picture>
                         <h2>Greg Yost (Squatchman)</h2>
                         <p>TBA</p>
                    </div>
                    <div className="speakers-content">
                         <picture>
                              <img 
                              loading="lazy"
                              decoding="async"
                              srcSet={ernie}
                              alt="Packman Paranormal"
                              aria-hidden="true"
                              />
                         </picture>
                         <h2>Packman Paranormal</h2>
                         <p>Packman Paranormal was formed in 2020 by Denise Brassell and Ernie Pack. We are a paranormal team based in Louisville, KY. Denise has been a paranormal investigator virtually all her life and has investigated with and been a part of several paranormal teams over the years. She’s investigated some of the most notoriously haunted locations in the country from the Lizzie Borden house to Gettysburg to Waverly Hill Sanatorium and beyond. Ernie grew up in the shadows of Waverly Hills Sanatorium, sneaking in as a kid to race wheelchairs in the hallways, and in most recent years worked there filling every role from maintenance, to security, to haunted house actor, to tour guide hosting the private overnight investigations. In his time at Waverly, Ernie has investigated with some of the most prominent and well-known paranormal investigators in the world and has travelled to many other paranormal hotspots over the years.</p>
                    </div>
               </div>
          </div>
     )
}