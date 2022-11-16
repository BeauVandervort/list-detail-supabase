import { getCat } from '../fetch-utils.js';
import { renderCatDetail } from '../render-utils.js';

const catDetailContainer = document.getElementById('cat-detail-container');

window.addEventListener('load', async () => {
    const params = new URLSearchParams(window.location.search);

    const id = params.get('id');

    const cat = await getCat(id);

    const catDetailEl = renderCatDetail(cat);
    catDetailContainer.append(catDetailEl);
});
