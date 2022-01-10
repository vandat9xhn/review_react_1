import * as React from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route, Outlet, useNavigate } from 'react-router-dom';
//
import BrickAndBall from '../../../components/ball_and_brick/_main/BrickAndBall';
import InputPlaceHolderOnTop from '../../../components/inpput/placeholder_on_top/_main/InputPlaceHolderOnTop';
import MyRecoilInput from '../../../components/my_recoil/input/MyRecoilInput';
import AppSlick from '../../../components/slick/_main/Slick';

//
export interface HomeProps {}

//
function Home({}: HomeProps) {
    //
    const navigate = useNavigate();

    //
    React.useEffect(() => {
        if (location.pathname == '/home') {
            navigate('/home/1', { replace: true });
        }
    }, [location.pathname]);

    //
    return (
        <div className="Home">
            <div className="mt-4">
                <AppSlick />
            </div>

            <div className="mt-4">
                <InputPlaceHolderOnTop />
            </div>

            <div className="mt-4">
                <BrickAndBall />
            </div>

            <div className="mt-4">
                <Outlet />
            </div>

            <div>
                <Link to={'/home/1'}>1</Link>
            </div>

            <div>
                <Link to={'/home/2'}>2</Link>
            </div>

            <div>
                <Link to={'/home/3'}>3</Link>
            </div>

            <div>
                <Link to={'/home/4'}>4</Link>
            </div>

            <Routes>
                <Route path="3" element={<div>333333333333333333333</div>} />
                <Route path="4" element={<div>444444444444444444444</div>} />
            </Routes>

            <div className="mt-4">
                <MyRecoilInput />
            </div>
        </div>
    );
}

export default Home;