import modalHtml from './render-modal.html?raw';
import './render-modal.css';

let modal, form;

export const showModal = () => {
    modal?.classList.remove('hide-modal');
}

export const hideModal = () => {
    modal?.classList.add('hide-modal');
    //TODO: Reset del form
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderModal = (element) => {

    if (modal) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.classList.add('modal-container', 'hide-modal');

    form = modal.querySelector('form');

    modal.addEventListener('click', (event) => {
        if (event.target.className === 'modal-container') {
            hideModal();
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
    });
    
    element.append(modal);
}