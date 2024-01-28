import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface TranslateState {
    translate: any | null;
}

const initialState: TranslateState = {
    translate: 'en'
};


const TranslateSlice = createSlice({
    name: 'translate',
    initialState,
    reducers: {
        setEnglish(state, action: PayloadAction<any>) {
            state.translate = action.payload;
            localStorage.setItem('translate', 'en');
        },
        setArabic(state, action: PayloadAction<any>) {
            state.translate = action.payload;
            localStorage.setItem('translate', 'ar');
        }
    },
});

export const { setEnglish, setArabic } = TranslateSlice.actions;

export default TranslateSlice.reducer;
