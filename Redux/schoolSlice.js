// schoolSlice.js
import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SCHOOL_STORAGE_KEY = "selectedSchool";

const schoolSlice = createSlice({
  name: "school",
  initialState: {
    selectedSchool: null,
  },
  reducers: {
    selectSchool: (state, action) => {
      state.selectedSchool = action.payload;
      AsyncStorage.setItem(SCHOOL_STORAGE_KEY, JSON.stringify(action.payload));
    },
    loadSelectedSchool: async (state) => {
      const storedSchool = await AsyncStorage.getItem(SCHOOL_STORAGE_KEY);
      if (storedSchool) {
        state.selectedSchool = JSON.parse(storedSchool);
      }
    },
  },
});

export const { selectSchool, loadSelectedSchool } = schoolSlice.actions;
export const selectedSchoolSelector = (state) => state.school.selectedSchool;

export default schoolSlice.reducer;
