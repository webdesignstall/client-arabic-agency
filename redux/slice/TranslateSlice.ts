import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface TranslateState {
    locale: any | null;
}

const initialState: TranslateState = {
    locale: 'en'
};


const TranslateSlice = createSlice({
    name: 'translate',
    initialState,
    reducers: {
        setEnglish(state, action: PayloadAction<any>) {
            state.locale = action.payload;
            localStorage.setItem('locale', 'en');
        },
        setArabic(state, action: PayloadAction<any>) {
            state.locale = action.payload;
            localStorage.setItem('locale', 'ar');
        }
    },
});

export const { setEnglish, setArabic } = TranslateSlice.actions;

export default TranslateSlice.reducer;
