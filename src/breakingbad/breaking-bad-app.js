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

    const quoteLabel = document.createElement('blockquote')
    const authorLabel = document.createElement('h3')
    const newxtQuoteButton = document.createElement('button');
    newxtQuoteButton.innerText = 'Next Quote';

    const renderQuote = ({ quote, author }) => {
        newxtQuoteButton.disabled = false;
        quoteLabel.innerHTML = quote;
        authorLabel.innerHTML = author;
        element.replaceChildren(quoteLabel, authorLabel, newxtQuoteButton);
    }

    newxtQuoteButton.addEventListener('click', async () => {
        element.innerHTML = 'Loading...';
        newxtQuoteButton.disabled = true;
        const res = await fetchQuote();
        renderQuote(res);
    })

    fetchQuote().then(renderQuote);
}