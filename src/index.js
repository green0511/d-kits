// import Map from './map/Map.vue'
// import BmView from './map/MapView.vue'
// import BmScale from './controls/Scale.vue'
// import MapControlNavigation from './controls/Navigation.vue'
// import MapControlMapType from './controls/MapType.vue'
// import MapControlOverviewMap from './controls/OverviewMap.vue'
// import MapControlGeolocation from './controls/Geolocation.vue'
// import MapControlCopyright from './controls/Copyright.vue'
// import MapControlCityList from './controls/CityList.vue'
// import MapOverlayMarker from './overlays/Marker.vue'
// import MapOverlayPolyline from './overlays/Polyline.vue'
// import MapOverlayPolygon from './overlays/Polygon.vue'
// import MapOverlayCircle from './overlays/Circle.vue'
// import MapOverlayLabel from './overlays/Label.vue'
// import MapOverlayInfoWindow from './overlays/InfoWindow.vue'
// import MapContextMenu from './context-menu/Menu.vue'
// import MapContextMenuItem from './context-menu/Item.vue'
// import MapLocalSearch from './search/LocalSearch.vue'

import DInput from './input'

const components = [
  DInput
];

const install = function(Vue, opts = {}) {

  if (install.installed) return;

  components.map(component => {
    Vue.component(component.name, component);
  });

//   Vue.prototype.$loading = Loading.service;
  
};

module.exports = {
  version: '0.0.1',
  install,
  // 组件
  DInput
}

// /* istanbul ignore if */
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue);
// };