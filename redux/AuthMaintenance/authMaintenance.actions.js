import authMaintenanceTypes from "./authMaintenance.types";

export const setAuth = (auth) => ({
    type: authMaintenanceTypes.SET_AUTH,
    payload: auth
})