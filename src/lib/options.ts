export const FontFamily = {
  black: 'Roboto-Black',
  blackItalic: 'Roboto-BlackItalic',
  bold: 'Roboto-Bold',
  boldItalic: 'Roboto-BoldItalic',
  italic: 'Roboto-Italic',
  light: 'Roboto-Light',
  lightItalic: 'Roboto-LightItalic',
  medium: 'Roboto-Medium',
  mediumItalic: 'Roboto-MediumItalic',
  regular: 'Roboto-Regular',
  thin: 'Roboto-Thin',
  thinItalic: 'Roboto-ThinItalic',
};

export const categories = [
  {
    imgUrl: 'https://cdn-icons-png.flaticon.com/512/10397/10397062.png',
    title: 'Camping',
    icon: 'tent',
  },
  {
    imgUrl: 'https://cdn-icons-png.flaticon.com/512/4336/4336883.png',
    title: 'Beach',
    icon: 'island',
  },
  {
    imgUrl: 'https://cdn-icons-png.flaticon.com/512/10180/10180302.png',
    title: 'Kayak',
    icon: 'sait-boat',
  },
  {
    imgUrl: 'https://cdn-icons-png.flaticon.com/512/2847/2847264.png',
    title: 'Mount',
    icon: 'area-chart',
  },
  {
    imgUrl: 'https://cdn-icons-png.flaticon.com/512/2321/2321588.png',
    title: 'Forest',
    icon: 'holiday-village',
  },
];

export const dataCitySelectList = [
  { key: 'C1', value: 'Ho Chi Minh' },
  { key: 'C2', value: 'Ha Noi' },
  { key: 'C3', value: 'Da Nang' },
  { key: 'C4', value: 'Vung Tau' },
  { key: 'C5', value: 'Da Lat' },
];

export const weather_field = [
  {
    name: 'Wind',
    icon: 'weather-windy',
    extend: 'km/h',
    key: 'wind_kph',
  },
  {
    name: 'Pressure',
    icon: 'car-brake-low-pressure',
    extend: 'mb',
    key: 'pressure_mb',
  },
  {
    name: 'Humidity',
    icon: 'water',
    extend: '%',
    key: 'humidity',
  },
  {
    name: 'Precipitation',
    icon: 'water',
    extend: 'mm',
    key: 'precip_mm',
  },
  {
    name: 'Clound',
    icon: 'weather-cloudy',
    extend: '%',
    key: 'cloud',
  },
  {
    name: 'UV',
    icon: 'sun-wireless',
    extend: '',
    key: 'uv',
  },
];
