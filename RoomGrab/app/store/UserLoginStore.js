/**
 * @author Rend Alsaadi
 */
Ext.define('RoomGrab.store.UserLoginStore', {
    extend: 'Ext.data.Store',
    alias: 'store.userLoginStore',
    requires: [
        'RoomGrab.model.UserLoginModel'   
    ],
    config: {
        model: 'RoomGrab.model.UserLoginModel',
        proxy: {
            type: 'localstorage',
            id: 'roomGrab-Login'
        }
    } 
});