import AccessoriesImage from "@/images/accessories.jpg";
import ApparelImage from "@/images/apparel.jpg";
import Game from "@/images/game.jpg";

export const config = {
	categories: [
		{ name: "Apparel", slug: "apparel", image: ApparelImage },
		{ name: "Game", slug: "game", image: Game },
	],

	social: {
		x: "https://x.com/yourstore",
		facebook: "https://facebook.com/yourstore",
	},

	contact: {
		email: "support@yourstore.com",
		phone: "+1 (555) 111-4567",
		address: "123 Store Street, City, Country",
	},
};

export type StoreConfig = typeof config;
export default config;
