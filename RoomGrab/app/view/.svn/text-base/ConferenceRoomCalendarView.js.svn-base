/**
 * @author Rend Alsaadi
 */
Ext.define('RoomGrab.view.ConferenceRoomCalendarView', {
    extend : 'Ext.Panel',
    xtype: 'eventlistpanel',
    alias : 'widget.CalendarView',

    requires: [
        'Ext.dataview.List',
        'Ext.layout.Fit',
        'RoomGrab.override.TouchCalendarDayEvents'
    ],
   
    config: {
        title   : 'Events List',
        layout  : 'fit',
        selectedRoom: null 
    },

    initialize: function(){
        this.callParent(arguments);

        this.setItems([{
            xclass      : 'Ext.ux.TouchCalendarView',
            itemId      : 'calendarView',
            minDate     : Ext.Date.add((new Date()), Ext.Date.DAY, -40),
            maxDate     : Ext.Date.add((new Date()), Ext.Date.DAY, 55),
            viewMode    : 'day',
            weekStart   : 0,
            value       : new Date(),
            eventStore  : Ext.getStore('calendareventsstore'),

            plugins     : [Ext.create('Ext.ux.TouchCalendarEvents', {
                eventBarTpl: '{event} - {location}'
            })]
        },
        {
            xtype: 'titlebar',
            ui: 'neutral',
            docked: 'top'
        }]);
    }    
});
