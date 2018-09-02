import * as React from 'react';
import { Map, Scene } from 'react-arcgis'


export const MainMap = () => {
    return (
        <Scene className="full-screen-map">
            <Map className="full-screen-map"
                mapProperties={{basemap: "streets"}}
                viewProperties={{
                    center: [-122.4443, 47.2529],
                    zoom: 9,
                }}/>
        </Scene>
        
    )
}