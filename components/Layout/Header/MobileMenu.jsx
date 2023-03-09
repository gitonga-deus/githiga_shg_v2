import { HEADER_LINKS } from "@/config/data"

import Link from "next/link"

const MobileMenu = ({ navShow, onToggleNav }) => {
	return (
		<>
			<div className="md:hidden">
				<div className={`fixed w-full border border-gitonga-bg h-full p-2 top-20 right-0 z-40 ease-in-out duration-500 ${navShow ? "translate-x-0" : "translate-x-full"} bg-white/90 saturate-[1.8] backdrop-blur-[10px] dark:bg-[#18181b]/90 dark:saturate-100`}>
					<nav className="relative space-y-2 z-40">
						{HEADER_LINKS.map((link) => (
							<div key={link.text} className="px-7">
								<Link
									href={link.href}
									title={link.text}
									className="flex my-3 border-b border-gray-300 dark:border-gray-700 items-center text-[14px] font-[500] leading-8 tracking-wide text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
									onClick={onToggleNav}
								>
									<div>{link.text}</div>

								</Link>
							</div>
						))}
					</nav>
				</div>
			</div>
		</>
	)
}

export default MobileMenu;