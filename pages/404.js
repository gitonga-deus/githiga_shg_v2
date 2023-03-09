// **  Next Imports  **
import Link from "next/link"

const NotFound = () => {
	return (
		<>
			<div className="space-y-2 py-6 md:space-y-5">
				<h1 className="mb-1 text-3xl font-bold tracking-normal text-zinc-800 dark:text-white md:text-4xl">
					Whoops! Page Not Found
				</h1>
			</div>
			<div className="mb-8 leading-7 space-y-4">
				{["Well, this isn't what you were looking for. It seems like the page you're looking for has gone missing.", "Don't worry, we'll help you find your way back to the content you're looking for. In the meantime, why not take a moment to appreciate this beautiful website?"].map((paragraph, i) => (
					<p className="text-[15px] leading-7 tracking-tight text-accent-5 dark:text-gray-400" key={i}>
						{paragraph}
					</p>
				))}
			</div>

			<Link
				href="/"
				className="py-2 px-3 items-center text-[14px] justify-center gap-2 rounded transition-colors duration-300 bg-[#18181b] dark:bg-[#555] text-white inline-block"
			>
				Back to Home
			</Link>
		</>
	)
}

export default NotFound;