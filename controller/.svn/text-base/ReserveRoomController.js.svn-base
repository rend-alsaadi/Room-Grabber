/**
 * @author Rend Alsaadi
 */
Ext.define('RoomGrab.controller.ReserveRoomController', {
    extend : 'Ext.app.Controller',

    requires : [
    //'RoomGrab.view.QuickReserve',
    //'RoomGrab.view.ConferenceListItem'
    ],

    config : {

        refs : {
            cancelQuickReserve : 'button[action="cancelQuickReserve"]',
            dataView : 'dataview',
            datePickerField : 'datepickerfield',
            dateTimePickerField : 'datetimepickerfield',
            quickReserveRoom : 'button[action="quickReserveRoom"]',
            roomName : 'label[cls=x-roomName]',
            roomAddress : 'label[cls=x-emailAddress]', //email address of the room.
            view : 'quickreserve'
        },

        control : {
            quickReserveButton : {
                tap : 'onQuickReserve'
            },

            quickReserveRoom : {
                tap : 'onQuickReserveRoom'
            },

            dataView : {
                quickReserve : 'onQuickReserve'
            },

            cancelQuickReserve : {
                tap : "onCancelQuickReserve"
            }
        }
    },


    onQuickReserve : function(record) {
        console.dir(record);
        Ext.Viewport.add({
            xtype : 'quickreserve',
            record : record
        });
    },

    onQuickReserveRoom : function(button, e, eOpts) {
        var record = this.getView().getRecord(),
            startTime = this.getDateTimePickerField().getValue(),
            hour = startTime.getHours(),
            minutes = startTime.getMinutes(),
            startDate = this.getDatePickerField().getValue(),
            year = startDate.getFullYear(),
            day = startDate.getDate(),
            month = startDate.getMonth(),
            roomname = record.get('roomName'),
            roomaddress = record.get('emailAddress'),
            endTime;
            
        startTime = RoomGrab.util.Shared.getISODate(new Date(year, month, day, hour, minutes));
        endTime = RoomGrab.util.Shared.getISODate(new Date(year, month, day, hour, (minutes + 30)));

        Ext.getStore('reserveroomstore').reserveRoom(30, startTime, endTime, roomaddress, 'test subject', 'test body', roomname, function (response) {
            var pnl = this.getView();
            pnl.destroy();
        });
    },

    onCancelQuickReserve : function(button, e, eOpts) {
        var pnl = this.getView();
        pnl.destroy();
    }
});
