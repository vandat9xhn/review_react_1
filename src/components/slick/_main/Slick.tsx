import * as React from 'react';
import Slider from 'react-slick';
//
import SlickItem from '../item/SlickItem';
//
import './AppSlick.scss';

//
export interface AppSlickProps {}

//
function AppSlick({}: AppSlickProps) {
    //
    const ref_slider = React.useRef(null);

    // ------

    //
    function handleNext() {
        ref_slider.current.slickNext();
    }

    //
    function handlePrev() {
        ref_slider.current.slickPrev();
    }

    //
    function beforeChange(currentSlide: number, nextSlide: number) {
        console.log('before: ', currentSlide, ', after: ', nextSlide);
    }

    //
    function afterChange(index: number) {
        console.log('after: ', index);
    }

    //
    return (
        <div className="AppSlick flex justify-center">
            <div className="w-96">
                <div>
                    <Slider
                        ref={ref_slider}
                        dots={true}
                        dotsClass="AppSlick_dots slick-dots"
                        //
                        infinite={true}
                        speed={500}
                        slidesToShow={1}
                        slidesToScroll={1}
                        autoplay={true}
                        pauseOnHover
                        // arrows={false}
                        draggable={false}
                        //
                        beforeChange={beforeChange}
                        afterChange={afterChange}
                    >
                        {[0, 1, 2, 3, 4, 5, 6].map((item, ix) => (
                            <div key={ix}>
                                <SlickItem num={item} />
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="flex justify-between py-1">
                    <button
                        className="font-semibold"
                        type="button"
                        onClick={handlePrev}
                    >
                        Prev
                    </button>

                    <button
                        className="font-semibold"
                        type="button"
                        onClick={handleNext}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AppSlick;
