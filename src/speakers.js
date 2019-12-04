const DATA = require('./data.js')
const speakerData = DATA.speakers
const speakerList = document.querySelector('#speaker-list')

module.exports = {
  name: 'Speaker',
  version: "0.1",
  render: () => {
    console.log('*** Render Speaker ***')
    speakerList.innerHTML = `
    ${speakerData.map(item => `
      <ion-col size="12" size-md="6">
        <ion-card class="speaker-card">
          <ion-card-header>
            <ion-item detail="false" lines="none">
              <ion-avatar slot="start">
                  <img src="${item.img}">
              </ion-avatar>
              ${item.nome}
            </ion-item>
          </ion-card-header>
          <ion-card-content>
            <ion-list>
              <ion-item>
                <h3>${item.intervento}: ${item.inizio} &mdash; ${item.fine}</h3>
              </ion-item>
              <ion-item>
                  <p>${item.desc}</p>
              </ion-item>
            </ion-list>
          </ion-card-content>
        </ion-card>
      </ion-col>
          `).join('\n')}
      `
  }
}