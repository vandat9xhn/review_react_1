import * as React from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
//
import { recoilIpText } from '../../../recoil/input/MyRecoilState';

//
export interface MyRecoilInputProps {}

//
function MyRecoilInput({}: MyRecoilInputProps) {
    //
    const [text, setText] = useRecoilState(recoilIpText);
    // const text = useRecoilValue(recoilIpText)
    // const setText = useSetRecoilState(recoilIpText)

    // -----

    //
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value);
    }

    //
    return (
        <div className="MyRecoilInput">
            <div className='flex justify-center'>
                <input
                    className="px-[8px] py-[5px] rounded-[10px] border border-solid border-slate-400"
                    type="text"
                    value={text}
                    placeholder='Using Recoil'
                    // 
                    onChange={handleChange}
                />
            </div>

            <div className="mt-4"></div>
        </div>
    );
}

export default MyRecoilInput;
