import { RootState } from '@/store/store';
import { Themes } from '@/theme/theme.types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface themeState {
    value: Themes;
}

const initialState: themeState = {
    value: Themes.light
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeThemeA: (state, action: PayloadAction<Themes>) => {
            state.value = action.payload;
        },
    },
});

export const { changeThemeA } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.value;

export const themeReducer = themeSlice.reducer;