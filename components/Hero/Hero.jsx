// ** Next Imports **
import Image from "next/image"

// ** Image Imports **
import HeroImage from "@/public/images/hero/hero-edited.png"

// Utils import
import { textFont } from "@/utils/fonts"

// ** Data Imports **
import { HERO_CARDS } from "@/config/data";

// ** Component Imports **
import { HeroCard } from ".";

const Hero = () => {
	return (
		<>
			<div className="my-8">
				<h1 className={`my-8 text-2xl font-bold tracking-normal leading-8 md:text-2xl text-center ${textFont.className}`}>
					Welcome To St. John Evangelist Githiga Catholic Church Self-Help Group
				</h1>

				<Image
					src={HeroImage}
					alt="Hero Image"
					className="rounded mt-5"
					priority
				/>

				<h1 className={`mt-8 text-2xl font-bold tracking-normal leading-8 md:text-3xl text-center ${textFont.className}`}>
					Who are We
				</h1>

				<p className="mt-4 text-[15px] leading-8 tracking-normal">
					St. John Evangelist Githiga Catholic Church Self-Help Group was established in 1993 in Githiga Parish of the Archdiocese of Nairobi.It is an inclusive group that does not discriminate against anyone due to age, religion, social status, or otherwise.It is among many others that operate within Parishes in the Archdiocese of Nairobi.
				</p>

				<p className="mt-4 text-[15px] leading-8 tracking-normal">
					Like the rest, it was established to economically empower individuals and communities through financial inclusion.Its most important activities include savings mobilization and accessing affordable credit for its members.To date, the group has a membership of 1006 members whose deposits have accumulated to Ksh 45m
				</p>

				<p className="mt-4 text-[15px] leading-8 tracking-normal">
					The management is committed to serving its members with diligence and utmost customer care services.Members are proud to save with convenience using modern computer technology to receive seamless services not necessarily involving physical human persons.They have access to credit daily whenever the need arises.
				</p>

				<p className="mt-4 text-[15px] leading-8 tracking-normal">
					Membership is drawn from all regions, including the diaspora making the best use of technology.
				</p>

				{/* <div className="grid grid-cols-3 text-center gap-4 mt-4">
					{HERO_CARDS.map((card, index) => (
						<HeroCard
							key={index}
							icon={card.icon}
							title={card.title}
							description={card.description}
						/>
					))}
				</div> */}
			</div>
		</>
	);
}

export default Hero;