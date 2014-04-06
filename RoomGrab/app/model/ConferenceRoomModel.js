/**
 * @author Rend Alsaadi
 */
Ext.define('RoomGrab.model.ConferenceRoomModel',{
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{name: 'roomName', type: 'string'},
			{name: 'emailAddress', type: 'string'},
			{name: 'location', type: 'string'},
			{name: 'telephoneNumber', type: 'string'},
			{name: 'status', type: 'string'},
			{name: 'free', type: 'boolean', defaultValue: true}
		]
	}
});