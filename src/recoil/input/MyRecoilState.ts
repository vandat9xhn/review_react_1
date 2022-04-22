import { atom, selector } from 'recoil';

//
export const recoilIpText = atom({
    key: 'recoilIpText',
    default: '',
});

//
export const charCountState = selector({
    key: 'charCountState',
    get: ({ get }) => {
        const text = get(recoilIpText);

        return text.length;
    },
});
