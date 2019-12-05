const DATA = require('./data.js')
const geoJSON = DATA.map.geoJSON

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
		L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
			attribution:
				'Power by: ITS - Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
			maxZoom: 18,
		}).addTo(myMap)



		// aggiungo i POI
		L.geoJSON(geoJSON, {
			pointToLayer: (feature, latlng) => {
				return L.marker(latlng, {
					icon: L.icon({
						iconUrl: feature.properties.icon,
						iconAnchor: L.point(15, 35)
					}),
				})
			},
			onEachFeature: (feature, layer) => {

				let popupText = feature.properties.name;
	
				layer.bindPopup(popupText, {
					offset: L.point(0, -30),
					className: 'popup'
				});
				layer.on('click', function() {
					layer.openPopup();
				});
			},
		}).addTo(myMap)



		// ascolto il cambio di tabs
		const tabs = document.querySelector('#tabs')
		tabs.addEventListener('ionTabsDidChange', event => {
			if (event.detail.tab === 'map') {
				console.log('MAP TAB: ionTabsDidChange', event.detail.tab)
				// trick calcola dimensioni dom
				setTimeout(() => {
					console.log('Sleep')
					myMap.invalidateSize()
				}, 100)
			}
		})
	},
}
