import { createSidebar } from "./components/sidebar.js";
import { waitForElement } from "./waitForElement.js";

export async function renderer() {
	function removeEl(e) {
		const t = async (_) => {
			await waitForElement(_, 1000).then((_) =>
				_.matchedElements.forEach((_) => {
				_.remove();
				})
			);
		};
		if (e.length > 1) e.forEach((_) => t(_));
		else t(e);
	}
	await waitForElement('._27qasW5wLU4h4nUgawpo1q').then((v) => {
		v.matchedElements.forEach(async () => {
			(await waitForElement('._1ENHEsrSLcTRtPQFl1F-wL')).matchedElements.forEach(async (wrapper) => {
				const aI = document.createElement("div");
				const sidebar = document.createElement("div");

				aI.setAttribute("class", "activeIndicator");
				
				sidebar.setAttribute("id", "sidebar");
				sidebar.innerHTML = createSidebar();

				(await waitForElement('._3mz8wQ6Q44B8P7pzPP4Iyw')).matchedElements.forEach(async function (oF) {
					wrapper.insertBefore(aI, oF);
					createSidebar(sidebar);
					wrapper.insertBefore(sidebar, oF);
					createSidebar(sidebar, true);

					removeEl(['._2CmrnGY-Amtd83ScJkFvx2']);
				});
			});
		});
	});
}
