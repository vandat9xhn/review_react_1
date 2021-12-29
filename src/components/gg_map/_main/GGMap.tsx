import * as React from 'react';
import { withGoogleMap, withScriptjs, GoogleMap } from 'react-google-maps';

//
export interface GGMapProps {}

//
function GGMap({}: GGMapProps) {
    //
    return (
        <div>
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            ></GoogleMap>
        </div>
    );
}

export default withScriptjs(withGoogleMap(GGMap));
