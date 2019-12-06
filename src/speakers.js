const DATA = require('./data.js')
const speakerData = DATA.speakers
const speakerList = document.querySelector('#speaker-list')

module.exports = {
	name: 'Speaker',
	version: '0.1',
	render: () => {
		console.log('*** Render Speaker ***')
		speakerList.innerHTML = `
    ${speakerData
			.map(
				speaker => `
      <ion-col size="12" size-md="6">
        <ion-card class="speaker-card">

          <ion-card-header class="card-header">
            <ion-item detail="false" lines="none">

              <ion-avatar slot="start">
                  <img src="${speaker.img}">
              </ion-avatar>

              <ion-list>
                <ion-label class="title">${speaker.nome}</ion-label>
                <ion-label>${speaker.desc}</ion-label>
              </ion-list>
              
            </ion-item>
          </ion-card-header>

          <ion-card-content class="card-content">
          <ion-item class="title">Interventi</ion-item>

          <ion-list lines="none">
          ${speaker.interventi
						.map(
							intervento => `
          
          <ion-item>
            <span class="bull">&bull;&nbsp;</span>${intervento}
          </ion-item>
          `
						)
						.join('\n')}

              
            </ion-list>
          </ion-card-content>
        </ion-card>
      </ion-col>
          `
			)
			.join('\n')}
      `
	},
}
