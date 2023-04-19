import { createSlice} from '@reduxjs/toolkit';


const initialState = {
    content: {
        title: "Politique des cookies",
        message:"Nous utilisons des cookies pour vous garantir la meilleure expérience sur notre site web. Si vous continuez à utiliser ce site, nous supposerons que vous en êtes satisfait.",
        btn_label_accept: 'Accepter',
        rgpd_pop_up_btn_label_cookie: 'En savoir plus',
        rgpd_pop_up_btn_link_cookie: '/page/205'
    },
    isAccepted: false
}
const rgpdSlice = createSlice({
    name: "rgpd", 
    initialState,
    reducers: {
        setContent: (state, action) => {
            state.content = action.payload
        },
        setIsAccepted: (state, action) => {
            state.isAccepted = action.payload
        }
    }
})

export const {setContent, setIsAccepted} = rgpdSlice.actions

export default rgpdSlice.reducer