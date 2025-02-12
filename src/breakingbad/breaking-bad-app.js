/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async () => {
    const res = await fetch(`https://api.breakingbadquotes.xyz/v1/quotes`);
    const data = await res.json();
    return data[0];
}


/**
 * @param { HTMLDivElement } element
 */
export const BreakingBadApp = async (element) => {
    document.querySelector('#app-title').innerHTML = 'Breaking Bad App';
    element.innerHTML = 'Loading...';
    try {
        const { quote } = await fetchQuote();
        element.innerHTML = `${quote}`;
    } catch (error) {
        element.innerHTML = error;

    }
}