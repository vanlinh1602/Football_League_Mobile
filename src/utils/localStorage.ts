import RNFS from 'react-native-fs';

export const saveDataToFile = async (file: string, data: any) => {
  const path = RNFS.DocumentDirectoryPath + `/${file}.txt`;
  await RNFS.writeFile(path, JSON.stringify(data), 'utf8');
};

export const readDataFromFile = async (file: string) => {
  const path = RNFS.DocumentDirectoryPath + `/${file}.txt`;
  try {
    const data = await RNFS.readFile(path, 'utf8');
    return JSON.parse(data);
  } catch (e) {
    return null;
  }
};
