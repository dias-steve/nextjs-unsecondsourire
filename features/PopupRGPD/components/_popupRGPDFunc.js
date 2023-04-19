import { useDispatch, useSelector } from "react-redux";
import { setIsAccepted } from "../redux/RGPD.reducer";


const mapState = (state) => ({
    rgpd: state.rgpd,
});

export const withContainer = (PopupView) => {

    return function Container (){
        const {rgpd: {content, isAccepted}} = useSelector(mapState);
    
        const dispatch = useDispatch();
        const handleClickAccept = (e) => {
            e.preventDefault()
            dispatch(
                setIsAccepted(true)
            )
        }

        return (
        <>{
            !isAccepted &&
            <PopupView 
                message = {content.message}
                title= {content.title}
                primaryBTNLabel= {content.btn_label_accept || "Ok"}
                pimaryBTNHandleClick = {(e) => handleClickAccept(e)}
                secondBTNLabel= {content.rgpd_pop_up_btn_label_cookie || null}
                secondBTNLink = {content.rgpd_pop_up_btn_link_cookie}
            />
        }
        </>
        )
    }
}