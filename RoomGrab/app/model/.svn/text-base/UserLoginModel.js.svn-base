/**
 * @author Rend Alsaadi
 */
Ext.define('RoomGrab.model.UserLoginModel', {
    extend: 'Ext.data.Model',
    alias: 'userLogin',
    requires: [
        'Ext.data.proxy.LocalStorage',
        'Ext.data.identifier.Uuid'
    ],
    config: {
        identifier: 'uuid',
        fields: [
            {
                name: 'emailaddress'
            },
            {
                name: 'password'
            },
            {
            	name: 'username'
            },
            
            {
                defaultValue: false,
                name: 'persistLogin',
                type: 'boolean'
            }           
        ],
        validations: [
            {type: 'presence', name: 'emailaddress', message: 'Email Address is missing'},
            {type: 'presence', name: 'password', message: 'Password is missing'}
        ]        
    } 
});