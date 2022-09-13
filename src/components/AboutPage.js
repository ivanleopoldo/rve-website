import React from 'react';
import Logo from '../assets/images/dark_logo_name_bottom.svg';
import { Twitter, Twitch, Instagram, Discord, Facebook } from '@styled-icons/bootstrap';
import styled from 'styled-components';
import '../App.css';

const IconTwitter = styled(Twitter)`
	color: white;
	&:hover {
		color: red;
	}
` 

const AboutPage = () => {
	return (
		<div className="lg:m-10 md:m-9 sm:m-8 m-7 text-white text-start flex flex-col justify-center 2xl:w-3/5 xl:w-screen lg:w-screen md:w-screen w-screen">
			<p className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold pb-4">About Us</p>
			<div className="indent-16 lg:text-xl md:text-lg sm:text-base text-base text-justify overflow-y-auto">
				<img src={Logo} alt="Logo" className="float-right h-48 w-48 mt-2 ml-0 pb-3 pl-3" />
				<p>
					RVE is a Non-professional E-Sports group based in the Philippines. This group was founded by yubi and was named after RavieRaven or Elle. This group was formerly known as Toko Manji Gang or TSM for short. The group also has an ambassador which is Iann Legaspi, the owner of I&I Le Cafe and the ever so famous K-pop idol, actor, artist, programmer, entrepreneur, singer, guitarist, owner of Bogs. It was founded because the group were clappin' kids in Phantom Forces and decided to create the present RVE group.  They are group of rockstar looking handsome young men whose favorite band are Ben&Ben, LANY, Lauv, and they also in dis rap typa sh** like Yeat. The group are also professionals in various different sports like Soccer, Basketball, Badminton, Bowling, and other bed activities. The official face of the group is Justin Andre Sedeno who is a professional bowler and professional pick up artist and has lots of girls.
				</p>
				<br></br>
				<p>
					The group plays in various different games and were once called "Jack of All Trades" when RVE dominated the Epic MiniGames Lobby in Roblox. They brought fear into the hearts of 9 year olds and they are proud. For us, there is no such thing as fun there are only Ws in their eyes and we will do whatever it takes. The group does not believe in the concept of fairness because they only see everyone as noobs.
					The team aspires to be the Top 1 kid beaters in the world and would want to show their splendor to the people. Please wait for the full release of this website and read the bios of the players.
				</p>
			</div>
			<div className="m-6 mt-8 flex flex-col items-center">
				<p className="mb-4 lg:text-4xl md:text-3xl sm:text-2xl text-lg font-bold">Follow us in our Social Media pages:</p>
				<ul className="flex flex-row list-none">
					<li>
						<div className="h-12 w-12 mx-3">
							<IconTwitter />
						</div>
					</li>
					<li>
						<div className="h-12 w-12 mx-3">
							<Twitch />
						</div>
					</li>
					<li>
						<div className="h-12 w-12 mx-3">
							<Instagram />
						</div>
					</li>
					<li>
						<div className="h-12 w-12 mx-3">
							<Discord />
						</div>
					</li>
					<li>
						<div className="h-12 w-12 mx-3">
							<Facebook />
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default AboutPage;
