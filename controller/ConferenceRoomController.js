/**
 * @author Rend Alsaadi
 */
Ext.define('RoomGrab.controller.ConferenceRoomController', {
	extend: 'Ext.app.Controller', 
	
	config: {
		refs: {
			conferenceRoomList : 'conferenceroomlist',
            container: 'main',
            reserveButton: 'button[action="quickReserve"]',
            reserve: 'button[action="reserve"]', 
            calendarView: 'touchcalendarview',
            eventCalendar: 'eventlistpanel',
            dateTimePickerField : 'datetimepickerfield',
            endTimePicker: 'datetimepickerfield[action="endTime"]',
            refreshRooms: 'button[action="refreshRoomList"]',
            view: 'quickreserve',
            cancelButton: 'button[action="cancelQuickReserve"]'
		},
		
		control: {
		    calendarView: {
		      selectionchange: function (calendarview, newDate, oldDate, eOpts) {
		      	var now = new Date (newDate); 
		      	var quick = Ext.widget('QuickReservePanel'); 
				this.getContainer().push(quick);
		      }   
		    },
		    
			conferenceRoomList : {
			    deselect: 'onDeselect',
			    disclose: 'showCalendar',
			    select: 'onSelect'
				//itemtap: 'onConferenceRowItemTap'
			},
			reserveButton: {
			    tap: 'onQuickReserve'
			},
			reserve: {
				tap: 'onReserve'
			},
			refreshRooms: {
				tap: 'onRefreshRooms'
			},
			cancelButton: {
				tap: 'onCancelQuickReserve'
			}
		}
	},
	
	onDeselect: function (list, record, eOpts) {
	   this.getReserveButton().setDisabled(true);    
	},
	
	onQuickReserve: function (button, e, eOpts) {
	   var selected = this.getConferenceRoomList().getSelection()[0],
           now = new Date(),           
           roomname = selected.get('roomName'),
           roomaddress = selected.get('emailAddress'),
           organizer = selected.get('organizerAddress'), 
           startTime = RoomGrab.util.Shared.getISODate(new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes())),
           endTime = RoomGrab.util.Shared.getISODate(new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), (now.getMinutes() + 30)));

        Ext.getStore('conferenceroomlivestore').reserveRoom(30, startTime, endTime, roomaddress, organizer, 'Reserved by Quick Reserve', roomname, function (response) {
            Ext.Msg.alert('Success', 'Reservation created');
            Ext.getStore('conferenceroomlivestore').removeAll(); 
            setTimeout(function()
            	{Ext.getStore('conferenceroomlivestore').getRooms();},3000);
        });
	},
	
	onSelect: function (list, record, eOpts) {
	   if (!record.get('free')) { 
	       this.getReserveButton().setDisabled(true);
	       return false; 
	   } else {
	       this.getReserveButton().setDisabled(false);
	       return true;
	   } 
	},
	
	showCalendar: function (list, record, target, index, e, eOpts) {
		var conferenceRoomCalendar = Ext.widget('CalendarView');
		conferenceRoomCalendar.setSelectedRoom(record); 
		this.getContainer().push(conferenceRoomCalendar);
		
		var startTime = new Date();
			var day = startTime.getDate(); 
			var month= startTime.getMonth(); 
			var year= startTime.getFullYear(); 
			var hour = startTime.getHours(); 
			var minutes= startTime.getMinutes(); 

		startTime = startTime.toISOString(); 
		startTime = startTime.substring(0, 16); 
		
		var endTime = new Date(year, month, (day + 7), hour, minutes); 
		endTime = endTime.toISOString(); 
		endTime= endTime.substring(0, 16); 	
		
		var roomAddresses= [ record.get('emailAddress') ];
		
		Ext.getStore('calendareventsstore').getRoomInfo(60, startTime, endTime, roomAddresses); 
   },
   onReserve: function(button, e, eOpts){
   	var pnl = this.getView(); 
   	var selected = this.getEventCalendar().getSelectedRoom();
   	var roomname = selected.get('roomName');
   	var roomaddress = selected.get('emailAddress');
   	var organizer = selected.get('organizerAddress'); 
   	var now= this.getDateTimePickerField().getValue();
   	var later= this.getEndTimePicker().getValue(); 
   	var startTime = RoomGrab.util.Shared.getISODate(new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes()));
   	var endTime = RoomGrab.util.Shared.getISODate(new Date(later.getFullYear(), later.getMonth(), later.getDate(), later.getHours(), later.getMinutes()));
   	
   	var duration = ( (later.getHours(), later.getMinutes()) -(now.getHours(), now.getMinutes()) ); 
   	
   	Ext.getStore('conferenceroomlivestore').reserveRoom(duration, startTime, endTime, roomaddress, organizer, 'Reserved by Quick Reserve', roomname, function (response) { 
   			pnl.destroy();  
            Ext.Msg.alert('Success', 'Reservation created');
            Ext.getStore('conferenceroomlivestore').removeAll(); 
            setTimeout(function()
            	{Ext.getStore('conferenceroomlivestore').getRooms();},3000); 
        });
   },
  
  onRefreshRooms: function(button,e, eOpts){
  	Ext.getStore('conferenceroomlivestore').removeAll(); 
  	Ext.getStore('conferenceroomlivestore').getRooms(); 
  },
  
  onCancelQuickReserve : function(button, e, eOpts) {
        var pnl = this.getView();
        pnl.destroy();
    }
});
