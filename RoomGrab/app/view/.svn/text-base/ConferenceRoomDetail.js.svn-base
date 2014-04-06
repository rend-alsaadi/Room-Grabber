/**
 * @author Rend Alsaadi
 */
Ext.define('RoomGrab.view.ConferenceRoomDetail',{
	extend: 'Ext.Panel',
	xtype: 'conferenceroomdetail',
	alias: 'widget.conferenceRoomDetail',
	
	
	config: {
		layout: {
			type: 'card',
            animation: Ext.os.is('Android') ? false : {
               	type: 'slide',
                direction: 'left'
               }
		},
		
		styleHtmlContent: true, 
		cls: 'conference-room-detail backgroundTexture',
		tpl: new Ext.XTemplate (
			'<tpl for= ".">',
			'<table class="conferenceRoomTable">',
				
				'<tr>',
					'<td class="conferenceRoomName">',
						'<div class="roomName">Room Name</div>',
                	'</td>',
					'<td class="conferenceRoomName">',
						'<div class="roomName">{name}</div>',
                	'</td>',
                '</tr>',
                
                '<tr>',	
                	'<td class="conferenceRoomDate">',
						'<div class="roomDate">Reservation Date</div>',
                	'</td>',
                	'<td class="conferenceRoomDate">',
                		'<div class="datePicker" type="button" value="Choose Date">',
                			'<input type="date" value="Click">',
                		'</div>', 
                	'</td>',
                '</tr>',
             '</table>',
             
                
             '<table class="conferenceRoomSlots">',
             		'<tpl for="rows">',
             			'<tr>',
             					'<td class="conferenceTime">', 
             						'<div class="timeSlot"> Time: {time} </div>', 
             					'</td>',
             					'<td class="conferenceReserved">', 
             						'<div class="slotReserved"> Resrved by: {reserved} </div>',
             					'</td>',
             			'</tr>',
             		'</tpl>',
             '</table>',
            
             '</tpl>'
		)
		}
	
}); 

//test
