import { waitForElement } from "./waitForElement.js";

(async () => {
    if(document.title !== 'View Root Menu') return;

    try {
        const { matchedElements } = await waitForElement('._2jXHP0742MyApMUVUM8IFn', 3000);
        let targetWindow = window.opener;

        matchedElements.forEach(
            (e) => { 
                if(e.innerText == 'Small Mode') { 
                    targetWindow.console.log('Small mode button temporarily removed from the View menu to avoid unnecessary "known bug" reports.');
                    e.remove() 
                } 
            }
        )
    }

    catch(error) {
        console.error(error, 'took too long to find the requested element');
    }
})()