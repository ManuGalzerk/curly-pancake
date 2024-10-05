import { waitForElement } from "../../scripts/waitForElement.js";

/* move icons around and add seperator */
(async() => {
    const { querySelector, matchedElements } = await waitForElement('._2y2tUbsMx8OIwkimGSyHmb._3pofGqV0buiKAfMPEs3_82', 3000);
    console.log('awaited code', querySelector, matchedElements);

    const container = matchedElements[0];
    const elements = container.children;
    const secondElement = elements[2]; // Index 1 is the second element

    container.removeChild(secondElement); // Remove the second element from its current position
    container.insertBefore(secondElement, elements[7]); // Insert it before the fifth element (index 4)

    container.insertBefore(document.querySelector('._21GPYlKBCLsHQpTsHw_RL_').cloneNode(true), container.children[8]);
})()

