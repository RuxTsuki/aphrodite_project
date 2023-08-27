import { viewTourLocalS } from "./constant";

export const removeOverflowInBody = () => {
    document.getElementsByTagName('body')[0].classList.remove('overflow-hidden');
}

type respValueFromStorage = {
    existError: boolean;
    value: string;
};

export const getValueFromStorage = (getItem: string) => {
    const resp: respValueFromStorage = {
        existError: false,
        value: ''
    };

    try {
        const valueStored = localStorage.getItem(getItem);
        resp.value = valueStored || '';
    } catch (error) {
        resp.existError = true;
    }

    return resp;
};
