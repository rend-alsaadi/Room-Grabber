Ext.define('RoomGrab.view.Main', {
    extend: 'Ext.NavigationView',
    xtype: 'main',
    requires: [
    	'RoomGrab.view.ConferenceRoomList'
    ], 
    config: {
    	layout: {
            type: 'card',
            animation: Ext.os.is('Android') ? false : {
                type: 'slide',
                direction: 'left'
            }            
        }, 
    	items: [		
            { xtype: 'conferenceroomlist', store: 'conferenceroomlivestore' }
    	]
    }
    		
});


