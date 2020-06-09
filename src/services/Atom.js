import { atom } from 'recoil';
    
const setCurrentUser = atom({
        key: 'setUser', // unique ID (with respect to other atoms/selectors)
        default: '', // default value (aka initial value)
    });

const setCurrentForm = atom({
        key: 'setForm', // unique ID (with respect to other atoms/selectors)
        default: '', // default value (aka initial value)
    });