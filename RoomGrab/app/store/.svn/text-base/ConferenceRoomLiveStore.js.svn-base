/**
 * @author Rend Alsaadi
 */
Ext.define('RoomGrab.store.ConferenceRoomLiveStore', {
	extend: 'Ext.data.Store', 
	alias: 'store.conferenceRoomLiveStore', 
	
	requires: [
		'RoomGrab.model.ConferenceRoomModel',
		'RoomGrab.util.Config'
	], 
	
	config: {
        storeId: 'conferenceroomlivestore',
        model: 'RoomGrab.model.ConferenceRoomModel'
    }, 
	    	
	getRooms: function (callback) {
        var me = this,
            user = Ext.getStore('UserLoginStore').first(),
            roomRequest = {
                organizerAddress : user.get('emailaddress'),
                password : user.get('password'),
                organizerUserName : user.get('username')
            };

        Ext.Ajax.request({
            url : RoomGrab.util.Config.getWebServiceURL() + '/postapi/Room/GetAllRooms',
            noCache : false,
            jsonData : roomRequest,
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            success : function (response) {
                var store = Ext.getStore('conferenceroomlivestore');
                
                if (response && response.status == 200) {
                    rooms = JSON.parse(response.responseText);
                    
                    for (var roomIndex = 0; roomIndex < rooms.length; roomIndex++) {
                        store.insert(roomIndex, { roomName: rooms[roomIndex].roomName, emailAddress: rooms[roomIndex].emailAddress, free: rooms[roomIndex].free });
                    }
                }
                if (callback) {
                    callback(response);
                }
            }
        });
	},
	
	
	
   reserveRoom : function(duration, startTime, endTime, roomaddress, subject, body, roomname, callback) {
        var me = this,
            user = Ext.getStore('UserLoginStore').first(),
            roomRequest = {
                organizerAddress : user.get('emailaddress'),
                password : user.get('password'),
                organizerUserName : user.get('username'),
                duration : duration,
                startTime : startTime,
                endTime : endTime,
                roomAddress : roomaddress,
                subject : subject,
                body : body,
                roomName : roomname
            };

        Ext.Ajax.request({
            url : RoomGrab.util.Config.getWebServiceURL() + '/postapi/Room/ReserveRoom',
            noCache : false,
            jsonData : roomRequest,
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            success : function(response) {
                if (callback) {
                    callback(response);
                }
            }
        });
    }	
	
});
