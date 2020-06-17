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

export const compareMe = atom({
    key: 'compareMe', // unique ID (with respect to other atoms/selectors)
    default: {}, // default value (aka initial value)
});

export const liveViewPl = atom({
    key: 'liveViewPl', // unique ID (with respect to other atoms/selectors)
    default: { date: "", name: "", id: 0, size: "", price: 0 }, // default value (aka initial value)
});

export const dbItems = atom({
    key: 'dbItems', // unique ID (with respect to other atoms/selectors)
    default: { date: "", name: "", id: 0, size: "", price: 0 }, // default value (aka initial value)
});




