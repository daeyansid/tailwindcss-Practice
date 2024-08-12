function handleMenu() {
    const menu = document.getElementById('menuDropDown');
    menu.classList.remove('hidden');
}

function handleMenuClose() {
    const menu = document.getElementById('menuDropDown');
    menu.classList.add('hidden');
}

const initialTranslateLTR = -48 * 4;
const initialTranslateRTL = 36 * 4;

// isLTR => left to right
function setupScroll(element, isLTR, speed) {

    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        console.log(element, isIntersecting);
        if (isIntersecting) {
            document.addEventListener('scroll', scrollHandler);
        }
        else {
            document.removeEventListener('scroll', scrollHandler);
        }
    }
    const intersectionObserver = new IntersectionObserver(intersectionCallback);

    intersectionObserver.observe(element);
    function scrollHandler() {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
        let totalTranslate = 0;
        if(isLTR)
        {
            totalTranslate = translateX + initialTranslateLTR
        }
        else
        {
            totalTranslate = -(translateX + initialTranslateRTL)
        }
        element.style.transform = `translateX(${totalTranslate}px)`
    }
}



const line1 = document.getElementById('line1');
setupScroll(line1, true, 0.15);
const line2 = document.getElementById('line2');
setupScroll(line2, false, 0.15);
const line3 = document.getElementById('line3');
setupScroll(line3, true, 0.15);
const line4 = document.getElementById('lineCompany');
setupScroll(line4, true, 0.8);