import React from "react";
import Hero from "./Hero";
import About from "./About";
import Benefits from "./Benefits";
import FeaturedInfluencers from "./FeaturedInfluencers";
import UpcomingEvents from "./UpcomingEvents";
import JoinNow from "./JoinNow";

function HomePage() {
	return (
		<>
			<Hero />
			<About />
			<Benefits />
			<FeaturedInfluencers />
			<UpcomingEvents />
			<JoinNow />
		</>
	);
}

export default HomePage;
