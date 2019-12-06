module.exports = {
	schedule: [
		{
			time: 'Lunedì 5 Luglio',
			sessions: [
				{
					nome: 'Colazione',
					inizio: '8:00',
					fine: '8:30',
					luogo: 'Caffè degli Specchi',
					id: '01',
				},
				{
					nome: 'Presentazione ESOF 2019',
					inizio: '8:30',
					fine: '10:30',
					luogo: "Piazza Unità d'Italia",
					id: '02',
				},
				{
					nome: 'Conclusione',
					inizio: '10:30',
					fine: '11:00',
					luogo: 'Porto Vecchio',
					id: '03',
				},
			],
		},
		{
			time: 'Mercoledì 7 Luglio',
			sessions: [
				{
					nome: 'Colazione',
					inizio: '7:30',
					fine: '8:30',
					luogo: 'Caffè degli Specchi',
					id: '04',
				},
				{
					nome: 'Il Mondo del Caffè',
					inizio: '8:30',
					fine: '10:00',
					luogo: 'Eataly',
					id: '05',
				},
				{
					nome: 'Perchè il Caffè Italiano',
					inizio: '10:00',
					fine: '10:30',
					luogo: 'Eatly',
					id: '06',
				},
				{
					nome: "Cos'è la Degustazione 1 - Briefing",
					inizio: '10:30',
					fine: '11:30',
					luogo: 'Eatly',
					id: '07',
				},
				{
					nome: 'Riflessioni Finali',
					inizio: '11:30',
					fine: '12:00',
					luogo: "Piazza Unità d'Italia",
					id: '08',
				},
			],
		},
		{
			time: 'Venerdì 9 Luglio',
			sessions: [
				{
					nome: 'Colazione',
					inizio: '9:00',
					fine: '9:30',
					luogo: 'Caffè degli Specchi',
					id: '09',
				},
				{
					nome: 'Illy nel Mondo',
					inizio: '9:30',
					fine: '10:30',
					luogo: 'Piazza della Borsa',
					id: '10',
				},
				{
					nome: "Cos'è la Degustazione 2 - Hands On",
					inizio: '10:30',
					fine: '11:00',
					luogo: 'Eatly',
					id: '11',
				},
				{
					nome: 'Fine ESOF 2020',
					inizio: '11:00',
					fine: '12:00',
					luogo: "Piazza Unità d'Italia",
					id: '12',
				},
			],
		},
	],
	speakers: [
		{
			nome: 'Mario Bianchi',
			img: 'https://i.pravatar.cc/100',
			desc: 'Imprenditore',
			interventi: [
				'Presentazione ESOF 2019',
				'Illy nel Mondo',
				'Fine ESOF 2020'
			],
			id: '01',
		},
		{
			nome: 'Paolo Rossi',
			img: 'https://i.pravatar.cc/101',
			desc: 'Esperto Torrefattore',
			interventi: [
				'Il Mondo del Caffè',
				'Perchè il Caffè Italiano',
			],
			id: '02',
		},
		{
			nome: 'Francesca Neri',
			img: 'https://i.pravatar.cc/102',
			desc: "Sommelier dell'Espresso",
			interventi: [
				"Cos'è la Degustazione 1 - Briefing",
				"Cos'è la Degustazione 2 - Hands On",
			],
			id: '03',
		},
	],
	map: {
		geoJSON: {
			type: 'FeatureCollection',
			features: [
				{
					type: 'Feature',
					properties: {
						icon:
							'https://a.tiles.mapbox.com/v4/marker/pin-m-cafe+7044ff.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXFhYTA2bTMyeW44ZG0ybXBkMHkifQ.gUGbDOPUN1v1fTs5SeOR4A',
						name: 'Caffè degli Specchi',
					},
					geometry: {
						type: 'Point',
						coordinates: [13.768411874771118, 45.65011212720475],
					},
				},
				{
					type: 'Feature',
					properties: {
						icon:
							'https://a.tiles.mapbox.com/v4/marker/pin-m-town-hall+7044ff.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXFhYTA2bTMyeW44ZG0ybXBkMHkifQ.gUGbDOPUN1v1fTs5SeOR4A',
						name: "Piazza Unità d'Italia",
					},
					geometry: {
						type: 'Point',
						coordinates: [13.767730593681335, 45.650044628369805],
					},
				},
				{
					type: 'Feature',
					properties: {
						icon:
							'https://a.tiles.mapbox.com/v4/marker/pin-m-ferry+7044ff.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXFhYTA2bTMyeW44ZG0ybXBkMHkifQ.gUGbDOPUN1v1fTs5SeOR4A',
						name: 'Porto Vecchio',
					},
					geometry: {
						type: 'Point',
						coordinates: [13.77006411552429, 45.6571203135106],
					},
				},
				{
					type: 'Feature',
					properties: {
						icon:
							'https://a.tiles.mapbox.com/v4/marker/pin-m-restaurant+7044ff.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXFhYTA2bTMyeW44ZG0ybXBkMHkifQ.gUGbDOPUN1v1fTs5SeOR4A',
						name: 'Eataly',
					},
					geometry: {
						type: 'Point',
						coordinates: [13.761371076107025, 45.64702209716792],
					},
				},
				{
					type: 'Feature',
					properties: {
						icon:
							'https://a.tiles.mapbox.com/v4/marker/pin-m-town-hall+7044ff.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXFhYTA2bTMyeW44ZG0ybXBkMHkifQ.gUGbDOPUN1v1fTs5SeOR4A',
						name: 'Piazza della Borsa',
					},
					geometry: {
						type: 'Point',
						coordinates: [13.77023845911026, 45.650378371816004],
					},
				},
			],
		},
	},
}
