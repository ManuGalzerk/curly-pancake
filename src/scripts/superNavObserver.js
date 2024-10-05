import { waitForElement } from './waitForElement.js';

function updateSelected(matchCase) {
    const elements = {
        "store": document.querySelector('#store'),
        "community": document.querySelector('#community'),
        "library": document.querySelector('#library')
    };

    const indicator = document.querySelector(".activeIndicator");
    const lastActive = document.querySelector(".button.active");

    if (lastActive !== null) {
        lastActive.classList.remove("active");
    }

    const contentFrame = document.querySelector('._1rDh5rXSFZJOqCa4UpnI4z');

    if (matchCase.toLowerCase() === "store") {
        contentFrame.style.marginTop = "0px";
    }
    else {
        contentFrame.style.marginTop = "-2px";
    }

    const selectedElement = elements[matchCase.toLowerCase()];

    if (selectedElement) {
        indicator.style.top = selectedElement.offsetTop + "px";
        selectedElement.classList.add("active");
    }
}

export async function handleSuperNavChanges() 
{
    const { matchedElements } = await waitForElement('._2D64jIEK7wpUR_NlObDW76', 3000);

    const mutationCallback = (mutationsList, _) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'attributes') {
                if (!mutation.target.classList.contains("._1gqEjB5QsKT_NftD1dEsdZ")) 
                    continue;

                updateSelected(mutation.target.innerText)
            }
        }
    };

    const observer = new MutationObserver(mutationCallback);

    const config = {
        childList: true, subtree: true, attributes: true, attributeOldValue: true,
    };

    observer.observe(matchedElements[0], config);
}