import * as React from 'react';
//
import './InputPlaceHolderOnTop.scss';

//
export interface InputPlaceHolderOnTopProps {}

//
function InputPlaceHolderOnTop({}: InputPlaceHolderOnTopProps) {
    //
    const [value, setValue] = React.useState('');
    const [placeholder, setPlaceholder] = React.useState('Short');
    const [is_focus, setIsFocus] = React.useState(false);

    //
    const ref_placeholder = React.useRef(null);
    const ref_fake_center = React.useRef(null);

    //
    React.useEffect(() => {
        if (is_focus || value) {
            setTimeout(() => {
                ref_fake_center.current.style.width = `${
                    ref_placeholder.current.getBoundingClientRect().width + 8
                }px`;
            }, 210);
        }
    }, [is_focus || value, placeholder]);

    // ----

    //
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const new_value = e.target.value;

        setValue(new_value);

        if (new_value.length >= 5) {
            setPlaceholder('Long placeholder');
        } else {
            setPlaceholder('Short');
        }
    }

    //
    function handleFocus() {
        setIsFocus(true);
    }

    //
    function handleBlur() {
        setIsFocus(false);
    }

    //
    return (
        <div className="InputPlaceHolderOnTop">
            <div
                className={`InputPlaceHolderOnTop_contain relative w-60 ${
                    is_focus || value
                        ? 'InputPlaceHolderOnTop_contain-active'
                        : ''
                } ${is_focus ? 'text-blue-600' : ''}`}
            >
                <input
                    className="InputPlaceHolderOnTop_input w-full pd-1"
                    value={value}
                    type="text"
                    // placeholder={placeholder}
                    spellCheck={false}
                    //
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />

                <div
                    ref={ref_placeholder}
                    className="InputPlaceHolderOnTop_placeholder absolute"
                >
                    {placeholder}
                </div>

                <div className="InputPlaceHolderOnTop_fake absolute flex w-full h-full rounded-lg">
                    <div className="InputPlaceHolderOnTop_fake_part InputPlaceHolderOnTop_fake_left"></div>

                    <div
                        ref={ref_fake_center}
                        className="InputPlaceHolderOnTop_fake_part InputPlaceHolderOnTop_fake_center"
                    ></div>

                    <div className="InputPlaceHolderOnTop_fake_part InputPlaceHolderOnTop_fake_right grow"></div>
                </div>
            </div>
        </div>
    );
}

export default InputPlaceHolderOnTop;
