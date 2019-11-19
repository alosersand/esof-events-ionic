const DATA = require('./data.js')
const eventsPOI = DATA.map.geojson

module.exports = {
	name: 'Map',
	version: '0.1',
	render: () => {
		console.log('*** Render Speaker ***')
		console.log('Leaflet', L)
		// MAP INIT
		// crea mappa webgis
		const myMap = L.map('mapView').setView([45.6522854, 13.7661518], 14)
		// aggiungo la basemap
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution:
				'Power by: ITS - Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
			maxZoom: 18,
			detectRetina: false
		}).addTo(myMap)
		// aggiungo i POI
		L.geoJSON(eventsPOI).addTo(myMap)
		// ascolto il cambio di tabs
		const tabs = document.querySelector('#tabs')
		tabs.addEventListener('ionTabsDidChange', (event) => {
			if (event.detail.tab === 'map') {
				console.log('MAP TAB: ionTabsDidChange', event.detail.tab)
				// trick calcola dimensioni dom
				setTimeout(() => {
					console.log('Sleep')
					myMap.invalidateSize()
				}, 100)
			}
		})
	}
}
