import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface UiState {
    mobileNavOpen: boolean;
    schedulerOpen: boolean;
    activeSection: string;
}

const initialState: UiState = {
    mobileNavOpen: false,
    schedulerOpen: false,
    activeSection: 'home',
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setMobileNavOpen(state, action: PayloadAction<boolean>) {
            state.mobileNavOpen = action.payload;
        },
        setSchedulerOpen(state, action: PayloadAction<boolean>) {
            state.schedulerOpen = action.payload;
        },
        setActiveSection(state, action: PayloadAction<string>) {
            state.activeSection = action.payload;
        },
    },
});

export const { setActiveSection, setMobileNavOpen, setSchedulerOpen } = uiSlice.actions;
export default uiSlice.reducer;
