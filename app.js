import { getCats } from './fetch-utils.js';
import { renderCatCard } from './render-utils.js';

const catListContainer = document.getElementById('cat-list-container');

window.addEventListener('load', async () => {
    const cats = await getCats();

    for (let cat of cats) {
        const catEl = renderCatCard(cat);

        catListContainer.append(catEl);
    }
});
