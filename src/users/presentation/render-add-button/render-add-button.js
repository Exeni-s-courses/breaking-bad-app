import { showModal } from '../render-modal/render-modal';
import './render-add-button.css';
/**
 * 
 * @param {HTMLDivElement} element 
 * @param {() => VoidFunction} callback
 */
export const renderAddButton = (element, callback) => {
    const fabButton = document.createElement('button');
    fabButton.innerText = '+';
    fabButton.classList.add('fab-button');

    element.append( fabButton );

    fabButton.addEventListener('click', (event) => {
        // if(!callback) return; 
        // callback();
        showModal();
    })
}