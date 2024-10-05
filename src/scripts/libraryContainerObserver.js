export async function handleLibraryContainerResize() {

    function prepareResizeListener(matchingElement) {

        const resizeObserver = new ResizeObserver(entries => {
            for (const entry of entries) {
                const newWidth = entry.contentRect.width;

                var seperator = document.querySelector('._276E6ijBpjMA2_iTxNhhjc._2g5K_hJWc7jVo81zuejhk2')
                seperator.style.marginLeft = `${newWidth}px`;
            }
        });

        resizeObserver.observe(matchingElement);
    }


    const targetNode = document.body;
    const config = { childList: true, subtree: true };
  
    const observer = new MutationObserver(mutationsList => {
        const matchingElements = document.querySelector('._9sPoVBFyE_vE87mnZJ5aB');

        if (matchingElements != null) {
            prepareResizeListener(matchingElements);
        }
    });
  
    observer.observe(targetNode, config);
}