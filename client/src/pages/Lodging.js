import React, { useState } from "react";
import ItemList from "./ItemList";

import { BiSolidHotel } from 'react-icons/bi'

import "./lodging.css";

// HOTELS
import artistsColonyInn from "../components/img/artist-colony-inn.jpg";
import brownCountyInn from "../components/img/brown-county-inn.jpg";
import cornerstoneInn from "../components/img/cornerstone-inn.jpg";
import grandWoodSuites from "../components/img/grand-wood-suites.jpg";
import harmonyTreeResorts from "../components/img/harmony-tree-resorts.jpg";
import hotelNashville from "../components/img/hotel-nashville.jpg";
import qualityInn from "../components/img/quality-inn.jpg";
import theYellowwood from "../components/img/the-yellowwood.jpg";
import storyInn from "../components/img/story-inn.jpg";

// CABINS
import schoolhouseInn from "../components/img/schoolhouse-inn.jpg";
import ranchCabin from "../components/img/ranch-cabin.jpg";
import fourPaws from "../components/img/4paws.jpg";
import fiveStarCabin from "../components/img/5star-cabin.jpg";
import sevenAcreLodge from "../components/img/7acre-lodge.jpg";
import eightDoesDancin from "../components/img/8-does-dancin.jpg";
import relaxationStation from "../components/img/relaxation-station.jpg";
import abeMartinLodge from "../components/img/abe-martin-lodge.jpg";
import cozyBear from "../components/img/cozy-bear.jpg";

// CAMPSITES
import billMonroePark from "../components/img/bill-monroe-park.jpg";
import koa from "../components/img/koa.jpg";
import brownCountySP from "../components/img/brown-county-sp.jpg";
import campPalawopec from "../components/img/camp-palawopec.jpg";
import eXplore from "../components/img/eXplore.jpg";
import friendsCampground from "../components/img/friends-campground.jpg";
import yellowwoodForest from "../components/img/yellowwood-forest.jpg";

const Lodging = () => {
     const [activeList, setActiveList] = useState('hotels')

     const hotels = [
          {
               picture: artistsColonyInn,
               name: "Artists Colony Inn",
               description: "Reminisce a gentler time and days gone by at the Artists Colony Inn, a charming boutique hotel in...",
               address: "105 South Van Buren Street, Nashville, Indiana, 47448",
               website: "https://www.artistscolonyinn.com"
          },

          {
               picture: brownCountyInn,
               name: "Brown County Inn",
               description: "A one stop shop for everything you may want or need, the Brown County Inn has got it...",
               address: "51 State Road 46 East, Nashville, Indiana, 47448",
               website: "https://www.browncountyinn.com"
          },

          {
               picture: cornerstoneInn,
               name: "Cornerstone Inn",
               description: "Serving from a foundation of excellence since 1993, the 1.5-acre downtown Nashville campus of Cornerstone Inn includes 23...",
               address: "54 East Franklin Street, Nashville, Indiana, 47448",
               website: "https://www.cornerstoneinn.com/"
          },

          {
               picture: grandWoodSuites,
               name: "Grand Wood Suites",
               description: "Formerly known as Hidden Valley Inn, Grand Wood Suites is your home away from home whether it’s a...",
               address: "201 North Van Buren Street, Nashville, Indiana, 47448",
               website: "https://www.grandwoodsuites.com/"
          },

          {
               picture: harmonyTreeResorts,
               name: "Harmony Tree Resorts",
               description: "Harmony Tree Resorts offers many different types of accommodations to make your stay in Brown County as perfect...",
               address: "1292 State Road 135 South, Brown County, Indiana, 47448",
               website: "https://www.harmonytreeresorts.com/"
          },

          {
               picture: hotelNashville,
               name: "Hotel Nashville",
               description: "Hotel Nashville, located downtown Nashville, offers one and two bed suites some with hot tubs. The hotel also",
               address: "245 North Jefferson Street, Nashville, Indiana, 47448",
               website: "https://hotelnashville.com/"
          },

          {
               picture: qualityInn,
               name: "Quality Inn Nashville",
               description: "Brown County’s only chain hotel, the Quality Inn helps you get your money’s worth by providing friendly service,...",
               address: "51 West Chestnut Street, Nashville, Indiana, 47448",
               website: "https://www.choicehotels.com/indiana/nashville/quality-inn-hotels/in419"
          },

          {
               picture: theYellowwood,
               name: "The Yellowwood",
               description: "The Yellowwood is a modern retreat in the land of log cabins. The Yellowwood’s clean lines and soothing...",
               address: "911 Sams Hill Road, Nashville, Indiana, 47448",
               website: "https://www.theyellowwood.com/"
          },

          {
               picture: storyInn,
               name: "Story Inn",
               description: "Story is a quaint village founded in 1851. Today, the entire town has been turned into The Story...",
               address: "6404 South State Road 135, Nashville, Indiana, 47448",
               website: "https://storyinn.com/"
          },
     ]

     const cabins = [
          {
               picture: schoolhouseInn,
               name: "1891 Schoolhouse Inn",
               description: "You’ll find the Schoolhouse Inn to be a perfect and private location for a quick getaway or longer...",
               address: "2616 Cottonwood Road, Morgantown, Indiana, 16160",
               website: "https://1891schoolhouseinn.com/"
          },

          {
               picture: ranchCabin,
               name: "3R Ranch Guest Cabin",
               description: "Experience the ultimate secluded retreat in the beautiful setting of Brown County at our wooded cabin nestled on...",
               address: "2060 Harrison Ridge Road, Nashville, Indiana, 47448",
               website: "https://www.3rranchguestcabinrental.com/"
          },

          {
               picture: fourPaws,
               name: "4 Paws Getaway",
               description: "From the moment you step inside 4 Paws Getaway, you’ll be charmed by its eclectic design and thoughtful...",
               address: "8869 Georgetown Road, Columbus, Indiana, 47201",
               website: "https://4pawsgetaway.com/"
          },

          {
               picture: fiveStarCabin,
               name: "5 Star Cabin in Brown County",
               description: "Relax and reconnect in your own private cabin. Complete renovation and upgrades galore in 2020. A Cabin in...",
               address: "9612 Myers Road, Morgantown, Indiana, 46160",
               website: "https://browncountyvacation.rentals/"
          },

          {
               picture: sevenAcreLodge,
               name: "7 Acre Legacy Lodge",
               description: "What do you think of when you think of a vacation in Brown County? Surely hills and hollers,...",
               address: "441 Pine Ridge Rd, Nashville, Indiana, 47448",
               website: "https://browncountyvacation.rentals/getaway/7-acre-legacy-lodge/"
          },

          {
               picture: eightDoesDancin,
               name: "8 Does A Dancin’",
               description: "Have you been dreaming of hiding away in the wilderness of Brown County? Well, 8 Does A Dancin’...",
               address: "1810 Mt. Liberty Road, Nashville, Indiana, 47448",
               website: "https://browncountyvacation.rentals/getaway/8-does-a-dancin/"
          },

          {
               picture: relaxationStation,
               name: "A Relaxation Station",
               description: "Tucked away in the woods, is a quaint little bungalow called Relaxation Station. A Relaxation Station is a...",
               address: "5682 Patriot Ln, Morgantown, Indiana, 46160",
               website: "https://www.arelaxationstation.com/"
          },

          {
               picture: abeMartinLodge,
               name: "Abe Martin Lodge",
               description: "Since 1932, Brown County’s iconic Abe Martin Lodge has been tucked away in the beautiful Brown County State...",
               address: "Brown County State Park, Nashville, Indiana, 47448",
               website: "https://www.in.gov/dnr/state-parks/inns/abe-martin-lodge-at-brown-county-state-park/"
          },

          {
               picture: cozyBear,
               name: "Cozy Bear Cabin",
               description: "Cozy Bear Cabin is a newly updated 3 bedroom, 2.5 bathroom log cabin with modern furnishings and plush...",
               address: "3362 State Road 46, Nashville, Indiana, 47448",
               website: "https://www.cozycabinsin.com/"
          },
     ]

     const camping = [
          {
               picture: billMonroePark,
               name: "Bill Monroe’s Music Park & Campground",
               description: "Bill Monroe’s Campground is a family and pet-friendly campground that can accommodate campers of all sizes — from...",
               address: "5163 N State Rd 135, Morgantown, Indiana, 46160",
               website: "https://billmonroemusicpark.com/"
          },

          {
               picture: koa,
               name: "Brown County KOA",
               description: "Beautiful retreat tucked back into the woods, providing accommodations such as primitive tent sites, as well as full...",
               address: "2248 State Road 46 East, Nashville, Indiana, 47448",
               website: "https://koa.com/campgrounds/brown-county/"
          },

          {
               picture: brownCountySP,
               name: "Brown County State Park Campground",
               description: "Camp in Indiana’s largest state park! With nearly 16,000-acres, 20 miles of roads with numerous scenic vistas, and...",
               address: "1405 State Road 46 West, Nashville, Indiana, 47448",
               website: "https://indianastateparks.reserveamerica.com/camping/brown-county-state-park/r/campgroundDetails.do?contractCode=IN&parkId=570043"
          },

          {
               picture: campPalawopec,
               name: "Camp Palawopec",
               description: "Treat your family to a rustic outdoor camping experience at Camp Palawopec! Reserve a small open-air cabin for...",
               address: "3497 Clay Lick Rd, Nashville, Indiana, 47448",
               website: "https://camppalawopec.com/family-camping.html"
          },

          {
               picture: eXplore,
               name: "eXplore Brown County Camping Cabins & Camping",
               description: "Extend your eXplore Brown County adventure with an overnight stay! Choose from camping cabins or the campground. eXplore...",
               address: "2620 Valley Branch Road, Nashville, Indiana, 47448",
               website: "https://explorebrowncounty.com/"
          },

          {
               picture: friendsCampground,
               name: "Friends O’ Mine Campground",
               description: "Welcome to Friends O’ Mine Campground! Recently purchased and renamed, the property, formerly known as Westward Ho Campground,...",
               address: "4557 State Road 46 East, Nashville, Indiana, 47448",
               website: "https://friendsominecampground.com/"
          },

          {
               picture: yellowwoodForest,
               name: "Yellowwood State Forest",
               description: "Yellowwood State Forest is located 7 miles west of Nashville and 10 miles east of Bloomington, just north",
               address: "772 South Yellowwood Road, Nashville, Indiana, 47448",
               website: "https://www.in.gov/dnr/forestry/properties/yellowwood-state-forest/"
          },
     ]

     const handleButtonClick = (listName) => {
          setActiveList(listName)
     }

     return (
          <section id="lodging">
      <div className="lodging-container">
        <div className="lodging-content">
          <span className="lodging-topper">Lodging</span>
          <h2 className="lodging-title">Nearby Lodging</h2>
        </div>

        <div>
          <div className="lodging-btns"> 
               <button onClick={() => handleButtonClick('hotels')}>Hotels</button>
               <button onClick={() => handleButtonClick('cabins')}>Cabins</button>
               <button onClick={() => handleButtonClick('camping')}>Campsites</button>
          </div>

          <ItemList items={activeList === 'hotels' ? hotels : activeList === 'cabins' ? cabins : camping} />
        </div>

      </div>
    </section>
     )
}

export default Lodging;