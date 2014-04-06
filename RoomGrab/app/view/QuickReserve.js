/**
 * @author Rend Alsaadi
 */
Ext.define('RoomGrab.view.QuickReserve', {
    extend : 'Ext.form.Panel',
    xtype : 'quickreserve',
    alias : 'widget.QuickReservePanel',

    requires : ['Ext.field.DatePicker', 'Ext.ux.picker.DateTime', 'Ext.DateExtras', 'RoomGrab.util.Shared'],

    config : {
        cls : 'quickreserve',
        title : 'Quick Reserve',
        itemId : 'quickReserveBox',
        floating : true,
        centered : true,        
        modal : true,
        height : '50%',
        width : '85%',
        layout: {
            type: 'vbox',
            align: 'center',
            pack: 'middle'
        }, 
    },
    
    initialize: function(){
    	this.callParent(arguments);
    	var hours = hours; 
    	var mins= this.minutes;
    	this.setItems([{
                xtype : 'fieldset',
                title: 'Reserve Room',
                items : [{
                    xtype : 'datetimepickerfield',
                    name : '12hr',
                    label : 'Start',
                    value : RoomGrab.util.Shared.getSelectedDate(),
                    dateTimeFormat : 'h:i:A',
                    picker : {
                        yearFrom : 2014,
                        minuteInterval : 10,
                        ampm : true,
                        slotOrder : ['hour', 'minute', 'ampm']
                    }
                },
                {
                	xtype : 'datetimepickerfield',
                	action: 'endTime', 
                    name : '12hr',
                    label : 'End',
                    value : RoomGrab.util.Shared.getSelectedDate(),
                    dateTimeFormat : 'h:i:A',
                    picker : {
                        yearFrom : 2014,
                        minuteInterval : 10,
                        ampm : true,
                        slotOrder : ['hour', 'minute', 'ampm']
                    }
                }]
            },
            {
            xtype: 'container',
            height: 50,
            width: '80%',
            layout: {
                type: 'hbox'
            },
            items: [{
                xtype : 'button',
                ui : 'round',
                action : 'reserve',
                text : 'Reserve',
                flex: 1,
                margin: 5
            }, {
                xtype : 'button',
                ui : 'round',
                action : 'cancelQuickReserve',
                text : 'Cancel',
                flex: 1,
                margin: 5
            }
          ]
      
        }]);
    },
    /*
    applyTitle: function (title) {
        this.down('fieldset').setTitle(title);
    }
	*/ 
});
