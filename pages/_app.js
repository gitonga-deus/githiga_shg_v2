// ** Styles Import **
import "@/styles/globals.css"

// ** Components Import **
import { Header } from "@/components/Layout/Header"

// ** Utils import **
import { textFont } from "@/utils/fonts"

const App = ({ Component, pageProps }) => {
	return (
		<>
			<div className={textFont.className}>
				<Header />
				<main className="relative mx-auto max-w-5xl px-8 pt-24 pb-10">
					<Component {...pageProps} />
				</main>
			</div>
		</>
	);
}

export default App;
