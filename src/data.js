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
					luogo: "Porto Vecchio",
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
					luogo: "Eatly",
					id: '05',
				},
				{
					nome: 'Perchè il Caffè Italiano',
					inizio: '10:00',
					fine: '10:30',
					luogo: "Eatly",
					id: '06',
				},
				{
					nome: 'Cos\'è la Degustazione 1 - Briefing',
					inizio: '10:30',
					fine: '11:30',
					luogo: "Eatly",
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
					luogo: "Piazza della Borsa",
					id: '10',
				},
				{
					nome: 'Cos\'è la Degustazione 2 - Hands On',
					inizio: '10:30',
					fine: '11:00',
					luogo: "Eatly",
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
			img:
				'https://i.pravatar.cc/100',
			intervento: 'Colazione',
			inizio: '8:00',
			fine: '9:00',
			desc: 'bla bla bla caffè cornetto e amaro',
			id: '27sghs$',
		},
		{
			nome: 'Dario Cross',
			img:
				'https://www.film.it/fileadmin/mediafiles/film/multimedia/201707/images/628x400/MV5BYWUyMTI0NTMtYTMyZC00ZjAwLTk0MWUtYWZjNWU4ZDFmZmFmXkEyXkFqcGdeQXVyNTc3MjUzNTI%40._V1_SY1000_CR0%2C0%2C1499%2C1000_AL_.jpg',
			intervento: 'Presentazione ESOF 2019',
			inizio: '9:00',
			fine: '10:00',
			desc: 'bla bla bla caffè cornetto e amaro',
			id: '37sshs$',
		},
		{
			nome: 'Franco Tell',
			img:
				'https://i1.wp.com/www.bluegrassyouthballet.org/bybsite/wp-content/uploads/2014/08/Dia-Web-Graphic.jpg',
			intervento: 'Fine',
			inizio: '10:00',
			fine: '11:00',
			desc: 'bla bla bla caffè cornetto e amaro',
			id: '77s@hs$',
		},
	],
	map: {
		geojson: {
			type: 'FeatureCollection',
			features: [
				{
					type: 'Feature',
					properties: {
						evento: 'colazione',
					},
					geometry: {
						type: 'Point',
						coordinates: [13.762092590332031, 45.649268385921395],
					},
				},
				{
					type: 'Feature',
					properties: {
						evento: 'Inizio',
					},
					geometry: {
						type: 'Point',
						coordinates: [13.759925365447998, 45.646283314737836],
					},
				},
				{
					type: 'Feature',
					properties: {
						evento: 'fine',
					},
					geometry: {
						type: 'Point',
						coordinates: [13.764474391937254, 45.64815837802974],
					},
				},
			],
		},
	},
}
