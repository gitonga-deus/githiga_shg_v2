// ** React Imports **
import { useState } from "react";

// ** Next Imports **
import Link from "next/link";
import { usePathname } from "next/navigation";

// ** Mobile Menu **
import { MobileMenu } from ".";

// ** Link Imports **
import { HEADER_LINKS } from "@/config/data";

// ** Third Party Imports **
import clsx from "clsx";

// ** Icons **
import { Menu, MenuClose } from "@/components/Icons";

const Header = () => {
	const pathname = usePathname();

	const [navShow, setNavShow] = useState(false);

	const onToggleNav = () => {
		setNavShow((status) => {
			if (status) {
				document.body.style.overflow = "auto";
			} else {
				document.body.style.overflow = "hidden";
			}
			return !status;
		});
	}

	return (
		<>
			<header className="fixed top-0 left-0 right-0 z-40 bg-white/80 shadow-sm saturate-[1.8] backdrop-blur-[10px]">
				<div className="mx-auto flex h-[90px] max-w-5xl px-8 items-center justify-between">
					<h2 className="text-2xl font-bold">Githiga</h2>

					<div className="flex items-center gap-2">
						<ul className="hidden space-x-2 md:flex">
							{HEADER_LINKS.map((link, index) => (
								<li key={index}>
									<Link
										className={clsx(
											"rounded py-2 px-3 text-[14px] font-[500] transition-colors duration-300", {
											["text-[#555] dark:text-white hover:bg-[#555] hover:text-white"]:
												link.href !== pathname,
										}, {
											["bg-[#555] text-white"]: link.href === pathname,
										}
										)}
										href={link.href}
									>
										{link.text}
									</Link>
								</li>
							))}
						</ul>

						<div className="md:hidden">
							<button
								type="button"
								className="ml-1 mr-1 h-8 w-8 rounded text-zinc-800 dark:text-white"
								aria-label="Toggle Menu"
								onClick={onToggleNav}
							>
								{navShow ? (
									<MenuClose />
								) : (
									<Menu />
								)}
							</button>
						</div>
					</div>
				</div>
			</header>
			<MobileMenu navShow={navShow} onToggleNav={onToggleNav} />
		</>
	)
}

export default Header;