// 'use client';

// import { useCallback, useState } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const containerStyle = {
//   width: '100%',
//   height: '400px'
// };

// // Coordinates for Trace Expert City
// const center = {
//   lat: 6.9300599,
//   lng: 79.8614617
// };

// const options = {
//   disableDefaultUI: true,
//   zoomControl: true,
//   styles: [
//     {
//       featureType: 'all',
//       elementType: 'labels.text.fill',
//       stylers: [{ color: '#6c7079' }]
//     },
//     {
//       featureType: 'all',
//       elementType: 'labels.text.stroke',
//       stylers: [{ visibility: 'on' }, { color: '#ffffff' }, { weight: 2 }]
//     },
//     {
//       featureType: 'administrative',
//       elementType: 'geometry',
//       stylers: [{ color: '#ffffff' }, { weight: 0.5 }]
//     },
//     {
//       featureType: 'administrative.neighborhood',
//       elementType: 'labels',
//       stylers: [{ visibility: 'off' }]
//     },
//     {
//       featureType: 'landscape',
//       elementType: 'geometry',
//       stylers: [{ color: '#f5f5f5' }]
//     },
//     {
//       featureType: 'poi',
//       elementType: 'geometry',
//       stylers: [{ color: '#eeeeee' }]
//     },
//     {
//       featureType: 'poi.park',
//       elementType: 'geometry',
//       stylers: [{ color: '#e5e5e5' }]
//     },
//     {
//       featureType: 'road',
//       elementType: 'geometry',
//       stylers: [{ color: '#ffffff' }]
//     },
//     {
//       featureType: 'road.arterial',
//       elementType: 'labels',
//       stylers: [{ visibility: 'off' }]
//     },
//     {
//       featureType: 'road.highway',
//       elementType: 'geometry',
//       stylers: [{ color: '#dadada' }]
//     },
//     {
//       featureType: 'road.local',
//       elementType: 'labels',
//       stylers: [{ visibility: 'off' }]
//     },
//     {
//       featureType: 'transit',
//       elementType: 'geometry',
//       stylers: [{ color: '#eeeeee' }]
//     },
//     {
//       featureType: 'water',
//       elementType: 'geometry',
//       stylers: [{ color: '#c9c9c9' }]
//     }
//   ]
// };

// export function GoogleMapComponent() {
//   const [map, setMap] = useState(null);

//   const onLoad = useCallback((map: any) => {
//     setMap(map);
//   }, []);

//   const onUnmount = useCallback((map: any) => {
//     setMap(null);
//   }, []);

//   if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
//     return (
//       <div className="h-full w-full flex items-center justify-center bg-gray-100 rounded-lg">
//         <p className="text-gray-500">Please configure Google Maps API key</p>
//       </div>
//     );
//   }

//   return (
//     <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={16}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//         options={options}
//       >
//         <Marker 
//           position={center}
//           title="Trace Expert City"
//         />
//       </GoogleMap>
//     </LoadScript>
//   );
// }