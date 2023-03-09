const HeroCards = ({ icon, title, description }) => {
	return (
		<div className="my-2 p-4 gap-4 text-center">
			{icon}
			<h1 className="text-2xl font-semibold text-center leading-8 p-2">{title}</h1>
			<p className="p-2 tracking-normal text-center">{description}</p>
		</div>
	)
}

export default HeroCards;
