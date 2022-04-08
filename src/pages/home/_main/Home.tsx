import * as React from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route, Outlet, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
//
import BrickAndBall from '../../../components/ball_and_brick/_main/BrickAndBall';
import MyChartBar from '../../../components/chart/bar/MyChartBar';
import FBLogin from '../../../components/fb/_main/FBLogin';
import FileUpload from '../../../components/file_upload/FileUpload';
import FirstLess from '../../../components/first_less_css/FirstLess';
import MyGoogleLogin from '../../../components/gg_login/MyGoogleLogin';
import HoverScaleImg from '../../../components/hover_scale_img/HoverScaleImg';
import InputPlaceHolderOnTop from '../../../components/inpput/placeholder_on_top/_main/InputPlaceHolderOnTop';
import MyRecoilInput from '../../../components/my_recoil/input/MyRecoilInput';
import AppSlick from '../../../components/slick/_main/Slick';
import HomeCacheAPI from '../cache_api/HomeCacheAPI';
import SliderCanvas from '../../../components/slider_canvas/SliderCanvas';

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
            <Helmet>
                <title>Home</title>
            </Helmet>

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
                <Route path="3" element={<HomeCacheAPI />} />
                <Route path="4" element={<div>444444444444444444444</div>} />
            </Routes>

            <div className="mt-4">
                <MyRecoilInput />
            </div>

            <div className="mt-4">
                <FirstLess />
            </div>

            <div className="mt-4">
                <HoverScaleImg />
            </div>

            {/* <div className="mt-4">
                <MyChartBar />
            </div> */}

            {/* <div className="mt-4">
                <FBLogin />
            </div> */}

            {/* <div className="mt-4">
                <MyGoogleLogin />
            </div> */}

            <div className="mt-4">
                <FileUpload />
            </div>

            <div className="mt-4">
                <SliderCanvas />
            </div>

            <div className="mt-4"></div>
        </div>
    );
}

export default Home;
