import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value): Promise<boolean> => {
  try {
    await AsyncStorage.setItem(`@${key}`, JSON.stringify(value));
    return true;
  } catch (e) {
    return false;
  }
};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(`@${key}`);
    if (value !== null) {
      return {
        success: true,
        data: JSON.parse(value),
      };
    }
    return {
      success: false,
    };
  } catch (e) {
    return {
      success: false,
    };
  }
};
