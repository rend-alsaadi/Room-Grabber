/**
 * @author Rend Alsaadi
 */
Ext.define('RoomGrab.store.CalendarEventsStore', {

    extend : 'Ext.data.Store',

    requires : [
        'RoomGrab.model.CalendarEventsModel',
        'RoomGrab.model.UserLoginModel'
    ],
    config : {
        storeId : 'calendareventsstore',
        model : 'RoomGrab.model.CalendarEventsModel',
        data: []        
    },
    
    getRoomInfo : function(duration, startTime, endTime, roomAddresses) {
        var me = this,
            user = Ext.getStore('UserLoginStore').first(),
            roomRequest = {
                organizerAddress : user.get('emailaddress'),
                password : user.get('password'),
                organizerUserName : user.get('username'),
                duration : duration,
                startTime : startTime,
                endTime : endTime,
                roomAddresses : roomAddresses
            };

        var store = Ext.getStore('calendareventsstore');
                
        store.removeAll();    
        Ext.each(Ext.ComponentQuery.query('touchcalendarview'), function (item) {
            item.refresh();
        });

        Ext.Ajax.request({
            url : RoomGrab.util.Config.getWebServiceURL() + '/postapi/Room/GetRoomInfo',
            noCache : false,
            jsonData : roomRequest,
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            
            success : function (response) {
                var eventStore = Ext.getStore('calendareventsstore'),
                    result;
                
                if (response.status == 200) {
                    result = JSON.parse(response.responseText);
                }
                
                if (result && result.AttendeesAvailability && result.AttendeesAvailability.length >= 2) {
                    var attendee = result.AttendeesAvailability[1];
                                            
                    for (var eventIndex = 0; eventIndex < attendee.CalendarEvents.length; eventIndex ++) {
                        eventRow = attendee.CalendarEvents[eventIndex];
                        console.log("start: " + eventRow.StartTime + " End: " + eventRow.EndTime);   
                        eventStore.insert(eventIndex, { event: eventRow.Details.Subject, title: eventRow.Details.Subject, start: eventRow.StartTime, end: eventRow.EndTime } );
                                            
                        Ext.each(Ext.ComponentQuery.query('touchcalendarview'), function (item) {
                            item.refresh();
                        });                        
                    }
                }
            }
        });
    }
});
