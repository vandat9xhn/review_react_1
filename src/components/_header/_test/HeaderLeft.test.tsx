import * as React from 'react';
//
import { render, fireEvent, cleanup, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
//
import HeaderLeft from '../left/_main/HeaderLeft';
import Header from '../_main/Header';

//
afterEach(cleanup);

//
describe('Header', () => {
    test('HeaderClick', () => {
        const { getAllByRole } = render(<Header />);

        const btn_left = getAllByRole('button', {})[0];
        const btn_right = getAllByRole('button', {})[1];

        // fireEvent.click(btn);

        expect(btn_left).toBeInTheDocument();
        expect(btn_right).toBeInTheDocument();

        fireEvent.click(btn_left)

        expect(btn_right.textContent).toEqual('Btn mui 2')
    });
});
