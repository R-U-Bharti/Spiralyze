function adjustWidth() {
    let elems = document.querySelectorAll('.content');

    elems.forEach(elem => {
        let elements = elem.innerHTML;
        elem.innerHTML = '';
        elem.style.position = 'relative';
        elem.style.width = '100%';
        elem.style.display = 'flex';
        elem.style.flexWrap = 'wrap';
        elem.style.justifyContent = 'center';
        elem.style.alignItems = 'center';

        let newElem = document.createElement('div');
        newElem.style.maxWidth = '1366px';
        newElem.style.width = '100%';
        newElem.style.padding = '0 10px';
        newElem.innerHTML = elements;
        elem.appendChild(newElem);
    })
}

adjustWidth()