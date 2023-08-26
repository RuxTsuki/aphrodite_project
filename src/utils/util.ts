export const removeOverflowInBody = () => {
    document.getElementsByTagName('body')[0].classList.remove('overflow-hidden');
}

export const removeBgColorInBody = () => {
    document.getElementsByTagName('main')[0].classList.remove('bg-[--bg-color]');
}