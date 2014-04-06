/**
 * @author Rend Alsaadi
 */
/**
 * @author Rend Alsaadi
 */
Ext.define('RoomGrab.view.ConferenceRoomList', {
    extend : 'Ext.dataview.List',
    xtype : 'conferenceroomlist',

    config : {
        allowDeselect: true,
        cls : 'conference-list',
        title: 'Conference Rooms',
        store: 'conferenceroomlivestore',
        itemTpl: new Ext.XTemplate(
            '<div><span class="{[this.getFreeBusy(values.free)]}">{roomName}</span></div>',
            {
                getFreeBusy: function (free) {
                    if (free) {
                        return 'free';
                    } else {
                        return 'busy';
                    }
                }
            }    
        ),
        onItemDisclosure: true,
        preventSelectionOnDisclose: true,
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                ui: 'neutral',
                layout: {
                    align: 'right'
                },
                items: [
                    {
                      xtype: 'spacer',
                      flex: 1  
                    },
                    { 
                        xtype: 'button',
                        action: 'quickReserve',
                        text: 'Reserve',
                        disabled: true,
                        docked: 'right'
                    },
                    {
                    	xtype: 'button', 
                    	action: 'refreshRoomList', 
                    	iconCls: 'refresh',
                    	docked: 'left'
                    },
                    {
                    	xtype: 'button', 
                    	action: 'openLogin',
                    	iconCls: 'user',
                    	docked: 'left'
                    }
                ]
            }
        ]
    }
});
