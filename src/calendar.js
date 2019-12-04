const DATA = require('./data.js')
const scheduleData = DATA.schedule
const scheduleList = document.querySelector('#schedule-list')

module.exports = {
	name: 'Schedule',
	version: '0.1',
	render: () => {
		console.log('*** Render Schedule ***')
		scheduleList.innerHTML = `
    ${scheduleData
			.map(
				item => `
          <ion-item-group>
            <ion-item-divider sticky>
              <ion-label>${item.time}</ion-label>
            </ion-item-divider>
            ${item.sessions
							.map(
								session => `
              <ion-item>
              <ion-label>
                  <h3>${session.nome}</h3>
                  <p>
                  ${session.inizio} &mdash; ${session.fine} @ ${session.luogo}
                  </p>
              </ion-label>
              </ion-item>
            `
							)
							.join('\n')}
          </ion-item-group>
          `
			)
			.join('\n')}
      `
	},
}
