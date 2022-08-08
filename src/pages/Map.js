import React from 'react';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';


function Map({ name, latt, lngg }) {
    return (
        <RenderAfterNavermapsLoaded
            ncpClientId={'m2r7ylf9uk'}
            error={<p>Maps Load Error</p>}
            loading={<p>Maps Loading...</p>}
        >
            <NaverMapAPI name={name} latt={latt} lngg={lngg} />
        </RenderAfterNavermapsLoaded>
    );
}


function NaverMapAPI({ name, latt, lngg }) {
    const navermaps = window.naver.maps;
    return (
        <NaverMap
            mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
            style={{
                width: '200px', // 네이버지도 가로 길이
                height: '200px' // 네이버지도 세로 길이
            }}
            defaultCenter={{ lat: latt, lng: lngg }} // 지도 초기 위치
            defaultZoom={17}
        >
            <Marker
                key={1}
                position={new navermaps.LatLng(latt, lngg)}
                animation={2}
                onClick={() => { alert('여기는 ' + name + ' 입니다. '); }}
            />
        </NaverMap>
    );
}


export function extractRandom(arr) {
    var randNum = Math.floor(Math.random() * (arr.length));

    return { name: arr[randNum].upso_nm, latt: arr[randNum].y_dnts, lngg: arr[randNum].x_cnts, address: arr[randNum].rdn_code_nm, menu: arr[randNum].food_menu }
}


export default Map

