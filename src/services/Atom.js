import { atom } from 'recoil';
    
export const currentUser = atom({
    key: 'currentUser', // unique ID (with respect to other atoms/selectors)
    default: {}, // default value (aka initial value)
    });

export const currentVendors = atom({
    key: 'currentVendors', // unique ID (with respect to other atoms/selectors)
    default: {}, // default value (aka initial value)
});

export const currentPriceLists = atom({
    key: 'currentPriceLists', // unique ID (with respect to other atoms/selectors)
    default: {}, // default value (aka initial value)
});

export const selectedVendor = atom({
    key: 'selectedVendor', // unique ID (with respect to other atoms/selectors)
    default: {}, // default value (aka initial value)
});

export const currentItems = atom({
    key: 'currentItems', // unique ID (with respect to other atoms/selectors)
    default: {}, // default value (aka initial value)
});




