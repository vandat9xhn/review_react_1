import * as React from "react";
// import { Link } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";
import AppLink from "../../../components/app_link/AppLink";
import CircleControl from "../../../components/circle_control/_main/CircleControl";
// import { Helmet } from "react-helmet";
// //
// import BrickAndBall from "../../../components/ball_and_brick/_main/BrickAndBall";
// import MyChartBar from "../../../components/chart/bar/MyChartBar";
// import FBLogin from "../../../components/fb/_main/FBLogin";
// import FileUpload from "../../../components/file_upload/FileUpload";
// import FirstLess from "../../../components/first_less_css/FirstLess";
// import MyGoogleLogin from "../../../components/gg_login/MyGoogleLogin";
// import HoverScaleImg from "../../../components/hover_scale_img/HoverScaleImg";
// import InputPlaceHolderOnTop from "../../../components/inpput/placeholder_on_top/_main/InputPlaceHolderOnTop";
// import MyRecoilInput from "../../../components/my_recoil/input/MyRecoilInput";
// import AppSlick from "../../../components/slick/_main/Slick";
import HomeCacheAPI from "../cache_api/HomeCacheAPI";
// import SliderCanvas from "../../../components/slider_canvas/SliderCanvas";
// import CircleLoading from "../../../components/file_upload/circle/CircleLoading";
// import StepCircle from "../../../components/step_circle/StepCircle";
// import MyGSAP from "../../../components/my_gsap/_main/MyGSAP";
// import MyStorage from "../../../components/storage/MyStorage";
// import MyRedux from "../../../components/my_redux/MyRedux";
// import MyDapp from "../../../components/dapp/MyDapp";
// import MyDebugger from "../../../components/debug/MyDebugger";
// import IpUploadFile from "../../../components/file/ip_upload_file/IpUploadFile";
// import ConcatVideos from "../../../components/concat_videos/ConcatVideos";

//
export interface HomeProps {}

//
function Home({}: HomeProps) {
    //
    const navigate = useNavigate();

    //
    React.useEffect(() => {
        if (location.pathname == "/home") {
            navigate("/home/1", { replace: true });
        }
    }, [location.pathname]);

    //
    return (
        <div className="Home">
            {/* <Helmet>
                <title>Home</title>
            </Helmet> */}

            {/* <div className="mt-4">
                <AppSlick />
            </div> */}

            {/* <div className="mt-4">
                <InputPlaceHolderOnTop />
            </div> */}

            {/* <div className="mt-4">
                <BrickAndBall />
            </div> */}

            {/* <div className="mt-4">
                <HomeCacheAPI />
            </div> */}

            <div className="mt-4">
                {/* <Outlet /> */}
            </div>

            <div>
                <AppLink to={"/home/1"}>1</AppLink>
            </div>

            <div>
                <AppLink to={"/home/2"} replace>
                    2
                </AppLink>
            </div>

            <div>
                <AppLink to={"/home/3"}>3</AppLink>
            </div>

            <div>
                <AppLink to={"/home/4"}>4</AppLink>
            </div>

            {/* <div className="mt-4">
                <MyRecoilInput />
            </div> */}

            {/* <div className="mt-4">
                <FirstLess />
            </div> */}

            {/* <div className="mt-4">
                <HoverScaleImg />
            </div> */}

            {/* <div className="mt-4">
                <MyChartBar />
            </div> */}

            {/* <div className="mt-4">
                <FBLogin />
            </div> */}

            {/* <div className="mt-4">
                <MyGoogleLogin />
            </div> */}

            {/* <div className="mt-4">
                <FileUpload />
            </div> */}

            {/* <div className="mt-4">
                <SliderCanvas />
            </div> */}

            {/* <div className="mt-4">
                <CircleLoading />
            </div> */}

            {/* <div className="mt-4">
                <StepCircle />
            </div> */}

            <div className="mt-4">{/* <MyGSAP /> */}</div>

            {/* <div className="mt-4">
                <MyStorage />
            </div> */}
            {/* 
            <div className="mt-4">
                <MyRedux />
            </div> */}

            <div className="mt-4">{/* <MyDapp /> */}</div>

            {/* <div className="mt-4">
                <MyDebugger />
            </div> */}

            {/* <div className="mt-4">
                <IpUploadFile />
            </div> */}

            {/* <div className="mt-4">
                <ConcatVideos />
            </div> */}

            <div className="mt-4">
                <CircleControl />
            </div>

            <div className="mt-4"></div>
        </div>
    );
}

export default Home;
