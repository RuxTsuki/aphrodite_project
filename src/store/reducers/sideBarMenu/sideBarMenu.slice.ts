import { RootState } from '@/store/store';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface sideBarMenuState {
    isOpen: boolean;
    isShrink: boolean;
}

const initialState: sideBarMenuState = {
    isOpen: false,
    isShrink: false
};

export const sideBarMenuSlice = createSlice({
    name: 'sideBarMenu',
    initialState,
    reducers: {
        toggleMenu: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload;
        },

        toggleShrink: (state, action: PayloadAction<boolean>) => {
            state.isShrink = action.payload;
        }
    },
});

export const { toggleMenu, toggleShrink } = sideBarMenuSlice.actions;

export const sideBarMenu = (state: RootState) => state.sideBarMenu;

export const sideBarMenuReducer = sideBarMenuSlice.reducer;