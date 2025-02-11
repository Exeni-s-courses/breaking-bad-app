/**
 * @param { HTMLDivElement } element
 */
export const BreakingBadApp = (element) => {
    document.querySelector('#app-title').innerHTML = 'Breaking Bad App';
    element.innerHTML = 'Loading...';
}