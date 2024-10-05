import { waitForElement } from "../../scripts/waitForElement.js";

const Indicator = {
	updatePos: async (btnPos) => {

		var indicator = document.querySelector('.activeIndicator')
		indicator.style.setProperty('--indicator-col', '1');

		indicator.style.top = `${btnPos.y}px`
		indicator.style.left = `${btnPos.x - 4}px`

		setTimeout(() => { 
			indicator.style.setProperty('--indicator-col', '0');
		}, 1000)
	},
	autoUpdatePos: async() => {
		Indicator.updatePos(document.querySelector('.Myra7iGjzCdMPzitboVfh').getBoundingClientRect())
	}
}

/* When the persona status changes, update it on the settings header */
async function registerPersonaMessages() {
    function updateState(status, col) {
		const accountStatus = document.getElementById('accountStatus');
		accountStatus.textContent = status;
		accountStatus.style.color = col;
    }
    window.opener.SteamClient.Messaging.RegisterForMessages("PersonaState", (e, type, n) => {
        if (type == "PersonaUpdate") {
            let event = JSON.parse(n)

            switch (event) {
                case 0: { updateState('Offline', '#6B6B6B'); break; }
                case 1: { updateState('Online', '#5ABCE9'); break; }
                case 7: { updateState('Invisible', '#6B6B6B'); break; }
                case 3: { updateState('Away', '#4C91AC'); break; }
            }
        }
    })
}

async function removeDeveloperTab() {
	document.querySelectorAll('.bkfjn0yka2uHNqEvWZaTJ ._2X9_IsQsEJDpAd2JGrHdJI').forEach(function(element) {
		if (element.textContent.trim() === 'Developer') {
			const parentDiv = element.parentElement;
			parentDiv.parentNode.removeChild(parentDiv);
		}
	});
}

async function initAccountDetails() {
    // SteamClient.Browser.OpenDevTools()

    waitForElement('.RTicBCbDcEGkjsbmWzA8C').then(async (_, element) => {

        registerPersonaMessages()
		removeDeveloperTab()
        //ping steam and ask for current persona
        window.opener.SteamClient.Messaging.PostMessage("PersonaState", "RequestPersonaState", "{}")

        const container = document.querySelector('._3qEgQJqeb0zyM12KXq64Or');
		container.textContent = ''; // remove Steam Settings Header

		const account_info_container = document.createElement('div');
		account_info_container.id = 'accountContainer';
		account_info_container.style.display = 'flex';
		account_info_container.style.alignItems = 'center';
		account_info_container.style.padding = '11px';
		account_info_container.style.borderRadius = '6px';
		account_info_container.style.marginLeft = '-18px';
		account_info_container.style.marginRight = '-9px';

		account_info_container.addEventListener('mouseenter', function() {
			account_info_container.style.background = '#2D2D2D';
		});

		account_info_container.addEventListener('mouseleave', function() {
			account_info_container.style.background = 'initial';
		});

		const img = document.createElement('img');
		img.style.width = '60px';
		img.style.borderRadius = '50px';
		img.style.marginRight = '10px';

		const accountDetails = document.createElement('div');
		accountDetails.id = 'accountDetails';
		accountDetails.style.textTransform = 'none';
		accountDetails.style.color = 'white';
		accountDetails.style.fontWeight = 'normal';

		const accountPersona = document.createElement('div');
		accountPersona.id = 'accountPersona';
		accountPersona.textContent = '...';
		accountPersona.style.fontSize = '14px';

		const accountStatus = document.createElement('div');
		accountStatus.id = 'accountStatus';
		accountStatus.textContent = 'Offline';
		accountStatus.style.fontSize = '12px';

		accountDetails.appendChild(accountPersona);
		accountDetails.appendChild(accountStatus);

		account_info_container.appendChild(img);
		account_info_container.appendChild(accountDetails);

		container.appendChild(account_info_container);

        window.opener.SteamClient.User.GetLoginUsers().then(user => {
			document.getElementById('accountPersona').textContent = user[0].personaName;

			const accountContainerImg = document.querySelector('#accountContainer img');
			accountContainerImg.setAttribute('src', user[0].avatarUrl);
			accountContainerImg.setAttribute('alt', user[0].personaName);
			//Indicator.autoUpdatePos()
		})
    })
};

const init = {
	settings: () => {

		// const is_editor = document.querySelector(".millennium_editor") != null ? true : false

		// !is_editor && SteamClient.Window.SetMinSize(1050, 820)

		initAccountDetails()

		//allow skinning of the dropDown feilds, paste in console
		//document.querySelector('.gamepaddialog_FieldChildrenInner_3N47t').addEventListener('click', () => setTimeout(() => {debugger;}, 1000))

		const sidebar = document.querySelector('._EebF_xe4DGRZ9a0XkyDj');

		const div = document.createElement('div');
		div.classList.add('activeIndicator');
		div.style.top = '153px';
		div.style.left = '12px';
		div.style.opacity = "0"
		sidebar.appendChild(div);

		const sidebar_items = [...document.querySelectorAll('.bkfjn0yka2uHNqEvWZaTJ'), ...document.querySelectorAll('.settings_item')];

		sidebar_items.forEach(function(button) {
			button.addEventListener('click', function() {
				//Indicator.updatePos(button.getBoundingClientRect());
			});
		});
		//sidebar.addEventListener('scroll', (event) => Indicator.autoUpdatePos())	
	},
	properties: () => {
		const sidebar = document.querySelector('._EebF_xe4DGRZ9a0XkyDj');

		const div = document.createElement('div');
		div.classList.add('activeIndicator');
		div.style.top = '153px';
		div.style.left = '12px';

		sidebar.appendChild(div);
		document.querySelectorAll('.bkfjn0yka2uHNqEvWZaTJ').forEach(function(button) {
			button.addEventListener('click', function() {
				//Indicator.updatePos(button.getBoundingClientRect());
			});
		});
		document.querySelectorAll('.settings_item').forEach(function(button) {
			button.addEventListener('click', function() {
				//Indicator.updatePos(button.getBoundingClientRect());
			});
		});
		//sidebar[0].addEventListener('scroll', (event) => Indicator.autoUpdatePos())	
	}
}

async function renderer() {

	function importFile(relativePath) {
		const scriptUrl = new URL(import.meta.url);
		const basePath = scriptUrl.pathname.substring(0, scriptUrl.pathname.lastIndexOf('/'));

		document.head.appendChild(Object.assign(document.createElement('link'), { rel: 'stylesheet', href: `${basePath}/${relativePath}` }));
	}

	waitForElement('.MzjwfxXSiSauz8kyEuhYO').then(({matchedElements}) => {
		importFile('./settings/Settings.css')

		init.settings()
	});
	waitForElement('._1FyBL6obxHQ2Z2CsaV2Gbz').then(({matchedElements}) => {
		importFile('./properties/Properties.css')

		init.properties()
	});
}

//init settings renderer
renderer()