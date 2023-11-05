import { v4 as uuidv4 } from 'uuid';

import type { Cities } from '../types/cities';
import type { Address } from '../types/loaction';
import citiesJson from '../utils/cities.json';

export const getUid = () => {
  return uuidv4();
};

export const cities: Cities = citiesJson;

export const GetAddressString = (address: Address, isSort = false) => {
  const addressString: string[] = [];
  if (!address) return '';
  if (!address.province) return '';
  const province = cities[address.province].name;
  addressString.push(province);

  if (!address.district || isSort) return province;
  const district = cities[address.province].districts[address.district].name;
  addressString.push(district);

  if (address.ward) {
    const ward =
      cities[address.province].districts[address.district].wards?.[address.ward]
        .name;
    addressString.push(ward ?? '');
  }
  return addressString.reverse().join(', ');
};
