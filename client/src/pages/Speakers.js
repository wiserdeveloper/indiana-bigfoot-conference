import React from "react";

import './speakers.css';

import adamDavies from '../components/img/adam-davies.jpg'
import charlieRaymond from '../components/img/charlie.jpg'
import markDeWerth from '../components/img/mark.jpg'
import amyBue from '../components/img/amy.jpg'
import gregYost from '../components/img/greg.jpg'
import ernie from '../components/img/ernie.jpg'

export default function Speakers() {
     return (
          <section id="speaker">
               <div className="speakers-container">
                    <div className="speakers-content">
                         <span className="speakers-topper">Speakers</span>
                         <h2 className="speakers-title">Meet the Speakers</h2>
                    </div>

                    <div className="speakers-members-container">
                         <div className="speakers-members-content">

                              <div className="speakers-member">
                                   <div className="speakers-img-container">
                                        <picture>
                                             <img 
                                             loading="lazy"
                                             decoding="async"
                                             srcSet={adamDavies}
                                             alt="Adam Davies"
                                             aria-hidden="true"
                                             />
                                        </picture>
                                   </div>
                                   <div className="speakers-text">
                                        <h3>Adam Davies</h3>
                                        <p>I’m Adam Davies, and I am an explorer, adventurer, cryptozoologist, and author. I’ve traveled to some of the most remote and dangerous parts of the world in search of yet-to-be-discovered animal species. From the dense jungles of the Congo and Sumatra to the deserts of Mongolia, and the mountains of Nepal, I have crossed the globe in search of scientific evidence of the existence of these creatures.</p>
                                   </div>
                              </div>

                              <div className="speakers-member">
                                   <div className="speakers-img-container">
                                        <picture>
                                             <img 
                                             loading="lazy"
                                             decoding="async"
                                             srcSet={charlieRaymond}
                                             alt="Charlie Raymond"
                                             aria-hidden="true"
                                             />
                                        </picture>
                                   </div>
                                   <div className="speakers-text">
                                        <h3>Charlie Raymond</h3>
                                        <p>Charlie holds a bachelor's degree in Psychology from the University of Florida. He founded the Kentucky Bigfoot Research Organization in 1997 to document all credible Bigfoot encounters in Kentucky. For over three decades he has interviewed countless witnesses, conducted investigations and held expeditions in the hopes of one day proving their existence. He believes Bigfoot to be a "flesh and blood" unidentified hominin, very closely related to humans. One day he hopes to establish laws in Kentucky to protect these magnificent creatures. Charlie is also a BFRO Investigator for Kentucky.</p>
                                   </div>
                              </div>

                              <div className="speakers-member">
                                   <div className="speakers-img-container">
                                        <picture>
                                             <img 
                                             loading="lazy"
                                             decoding="async"
                                             srcSet={markDeWerth}
                                             alt="Mark DeWerth"
                                             aria-hidden="true"
                                             />
                                        </picture>
                                   </div>
                                   <div className="speakers-text">
                                        <h3>Marc DeWerth</h3>
                                        <p>Marc DeWerth of the Ohio Bigfoot Conference will be joining us for a special presentation of "The Ohio Bigfoot". Marc DeWerth of Columbia Station, Ohio has been a longtime Bigfoot Investigator with over 30 years of experience. He's involved with groups like the BFRO, and the Ohio Bigfoot Organization. Currently Marc and his group, The Ohio Bigfoot Organization, are the hosts of the Ohio Bigfoot Conference which is a nationally recognized event that takes place every Spring at Salt Fork State Park. Marc's talk "The Ohio Valley Bigfoot" will center on the flap of recent sighting reports that have taken place in Ohio over the last few years. He will also play some including audio recordings that he and his team captured in 2021 - 2023 in Ohio.</p>
                                   </div>
                              </div>

                              <div className="speakers-member">
                                   <div className="speakers-img-container">
                                        <picture>
                                             <img 
                                             loading="lazy"
                                             decoding="async"
                                             srcSet={amyBue}
                                             alt="Amy Bue"
                                             aria-hidden="true"
                                             />
                                        </picture>
                                   </div>
                                   <div className="speakers-text">
                                        <h3>Amy Bue</h3>
                                        <p>TBA</p>
                                   </div>
                              </div>

                              <div className="speakers-member">
                                   <div className="speakers-img-container">
                                        <picture>
                                             <img 
                                             loading="lazy"
                                             decoding="async"
                                             srcSet={gregYost}
                                             alt="Greg Yost"
                                             aria-hidden="true"
                                             />
                                        </picture>
                                   </div>
                                   <div className="speakers-text">
                                        <h3>Greg Yost (Squatchman)</h3>
                                        <p>I'm Greg Yost and most know me by Squatchman!!! I reside in Jeffersonville Indiana since 1993 . Right across the Ohio River I was born and raised in Louisville Kentucky  going into the Navy out of Seneca High School for 11 years of service!!!! I'm single and have a son Eugene ( Son of Squatchman) and a stepdaughter Helana!!!! I got into the Bigfoot Phenomenon back in November of 2002 when I had my first encounter, rather frightening at the Ferdinand State Forest which I'll tell at the IBRO conference I was totally into it and have spent the last 21 years on what I call The Journey to the Truth!!!! Have had many experiences, encounters and interactions with the Forrest People and gathered great pictures and evidence of them and things they do I call woodcraft!!!! I've been Blessed with my Journey and the most important thing I've learned from it is to communicate and interact with the Forest People and build a trusted mutual relationship with them on their terms!!!! I respect them and they respect me and at times I ask for favors from them like vocals, knocks eyeglow and even up to pushing trees over almost always getting something to the amazed people who have witnessed this and it's been Many!!!!! I don't consider myself a researcher or a evidence seeker ,I'm in it for much more, My Journey and the people I share it with!!!! Didn't know much about Bigfoot 21 years ago but how much I've learned over the years!!!!! This is my calling and Love and looking forward to sharing my story with you at the conference!!!!!</p>
                                   </div>
                              </div>

                              <div className="speakers-member">
                                   <div className="speakers-img-container">
                                        <picture>
                                             <img 
                                             loading="lazy"
                                             decoding="async"
                                             srcSet={ernie}
                                             alt="Packman Paranormal"
                                             aria-hidden="true"
                                             />
                                        </picture>
                                   </div>
                                   <div className="speakers-text">
                                        <h3>Packman Paranormal</h3>
                                        <p>Packman Paranormal was formed in 2020 by Denise Brassell and Ernie Pack. We are a paranormal team based in Louisville, KY. Denise has been a paranormal investigator virtually all her life and has investigated with and been a part of several paranormal teams over the years. She’s investigated some of the most notoriously haunted locations in the country from the Lizzie Borden house to Gettysburg to Waverly Hill Sanatorium and beyond. Ernie grew up in the shadows of Waverly Hills Sanatorium, sneaking in as a kid to race wheelchairs in the hallways, and in most recent years worked there filling every role from maintenance, to security, to haunted house actor, to tour guide hosting the private overnight investigations. In his time at Waverly, Ernie has investigated with some of the most prominent and well-known paranormal investigators in the world and has travelled to many other paranormal hotspots over the years.</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>






























          // <section id="speakers">
          //      <div className="speakers-content">
          //           <span className="speakers-topper">Speakers</span>
          //           <h2 className="speakers-title">Meet the Speakers</h2>
          //      </div>

          //      <div className="speakers-container">
          //           <div className="speaker">
          //                <div class="speaker-image">
          //                     <picture>
          //                          <img 
          //                          loading="lazy"
          //                          decoding="async"
          //                          srcSet={adamDavies}
          //                          alt="Adam Davies"
          //                          aria-hidden="true"
          //                          />
          //                     </picture>
          //                </div>
          //                <div className="speaker-info">
          //                     <h2>Adam Davies</h2>
          //                     <p>I’m Adam Davies, and I am an explorer, adventurer, cryptozoologist, and author. I’ve traveled to some of the most remote and dangerous parts of the world in search of yet-to-be-discovered animal species. From the dense jungles of the Congo and Sumatra to the deserts of Mongolia, and the mountains of Nepal, I have crossed the globe in search of scientific evidence of the existence of these creatures.</p>
          //                </div>
          //           </div>

          //           <div className="speaker">
          //                <div class="speaker-image">
          //                     <picture>
          //                          <img 
          //                          loading="lazy"
          //                          decoding="async"
          //                          srcSet={charlieRaymond}
          //                          alt="Adam Davies"
          //                          aria-hidden="true"
          //                          />
          //                     </picture>
          //                </div>
          //                <div className="speaker-info">
          //                     <h2>Charlie Raymond</h2>
          //                     <p>Charlie holds a bachelor's degree in Psychology from the University of Florida. He founded the Kentucky Bigfoot Research Organization in 1997 to document all credible Bigfoot encounters in Kentucky. For over three decades he has interviewed countless witnesses, conducted investigations and held expeditions in the hopes of one day proving their existence. He believes Bigfoot to be a "flesh and blood" unidentified hominin, very closely related to humans. One day he hopes to establish laws in Kentucky to protect these magnificent creatures. Charlie is also a BFRO Investigator for Kentucky.</p>
          //                </div>
          //           </div>

          //           <div className="speaker">
          //                <div class="speaker-image">
          //                     <picture>
          //                          <img 
          //                          loading="lazy"
          //                          decoding="async"
          //                          srcSet={markDeWerth}
          //                          alt="Mark DeWerth"
          //                          aria-hidden="true"
          //                          />
          //                     </picture>
          //                </div>
          //                <div className="speaker-info">
          //                     <h2>Mark DeWerth</h2>
          //                     <p>N/A</p>
          //                </div>
          //           </div>

          //           <div className="speaker">
          //                <div class="speaker-image">
          //                     <picture>
          //                          <img 
          //                          loading="lazy"
          //                          decoding="async"
          //                          srcSet={amyBue}
          //                          alt="Amy Bue"
          //                          aria-hidden="true"
          //                          />
          //                     </picture>
          //                </div>
          //                <div className="speaker-info">
          //                     <h2>Amy Bue</h2>
          //                     <p>N/A</p>
          //                </div>
          //           </div>

          //           <div className="speaker">
          //                <div class="speaker-image">
          //                     <picture>
          //                          <img 
          //                          loading="lazy"
          //                          decoding="async"
          //                          srcSet={gregYost}
          //                          alt="Greg Yost"
          //                          aria-hidden="true"
          //                          />
          //                     </picture>
          //                </div>
          //                <div className="speaker-info">
          //                     <h2>Greg Yost (Squatchman)</h2>
          //                     <p>N/A</p>
          //                </div>
          //           </div>
                    
          //           <div className="speaker">
          //                <div class="speaker-image">
          //                     <picture>
          //                          <img 
          //                          loading="lazy"
          //                          decoding="async"
          //                          srcSet={ernie}
          //                          alt="Packman Paranormal"
          //                          aria-hidden="true"
          //                          />
          //                     </picture>
          //                </div>
          //                <div className="speaker-info">
          //                     <h2>Packman Paranormal</h2>
          //                     <p>Packman Paranormal was formed in 2020 by Denise Brassell and Ernie Pack. We are a paranormal team based in Louisville, KY. Denise has been a paranormal investigator virtually all her life and has investigated with and been a part of several paranormal teams over the years. She’s investigated some of the most notoriously haunted locations in the country from the Lizzie Borden house to Gettysburg to Waverly Hill Sanatorium and beyond. Ernie grew up in the shadows of Waverly Hills Sanatorium, sneaking in as a kid to race wheelchairs in the hallways, and in most recent years worked there filling every role from maintenance, to security, to haunted house actor, to tour guide hosting the private overnight investigations. In his time at Waverly, Ernie has investigated with some of the most prominent and well-known paranormal investigators in the world and has travelled to many other paranormal hotspots over the years.</p>
          //                </div>
          //           </div>
          //      </div>
          // </section>
     )
}