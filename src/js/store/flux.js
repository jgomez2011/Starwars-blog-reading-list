const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			swapiCharacters: [],
			swapiPlanets: [],
			favorites: []
		},
		actions: {

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			fetchSwapiPeople: async () => {
				try {
					const store = getStore()
					if (localStorage.getItem("characters")) {
						setStore({ ...store, swapiCharacters: JSON.parse(localStorage.getItem("characters")) })
						return
					}
					const response = await fetch("https://www.swapi.tech/api/people");
					const data = await response.json();
					if (response.ok) {
						let characters = [];
						for (let character of data.results) {
							const characterResponse = await fetch(character.url);
							const characterData = await characterResponse.json();
							characters.push(characterData);
						}
						setStore({ ...store, swapiCharacters: characters })
						localStorage.setItem("characters", JSON.stringify(characters))
					}
				} catch (error) {
					console.log(error)
				}
			},
			fetchSwapiPlanet: async () => {
				try {
					const store = getStore()
					if (localStorage.getItem("planets")) {
						setStore({ ...store, swapiPlanets: JSON.parse(localStorage.getItem("planets")) })
						return
					}
					const response = await fetch("https://www.swapi.tech/api/planets");
					const data = await response.json();
					if (response.ok) {
						let planets = [];
						for (let planet of data.results) {
							const planetResponse = await fetch(planet.url);
							const planetData = await planetResponse.json();
							planets.push(planetData);
						}
						setStore({ ...store, swapiPlanets: planets })
						localStorage.setItem("planets", JSON.stringify(planets))
					}
				} catch (error) {
					console.log(error)
				}
			},
			addFavorites: (favorite) => {
				const store = getStore()
				const existFavorite = store.favorites.find((favorito) => {
					return favorito.result.uid == favorite.result.uid
				})
				if (existFavorite) {
					const favoriteFiltered = store.favorites.filter((favorito) => {
						return favorito.result.uid !== favorite.result.uid
					})
					setStore({ ...store, favorites: favoriteFiltered })
					return
				}
				const newFavorite = [...store.favorites, favorite]
				setStore({ ...store, favorites: newFavorite })
			}
		}
	};
};

export default getState;