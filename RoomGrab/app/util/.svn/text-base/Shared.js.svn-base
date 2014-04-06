/**
 * @author Rend Alsaadi
 */
Ext.define('RoomGrab.util.Shared', {
    singleton: true, 
    
    config: {
    },
    
    constructor: function (config) {
        this.initConfig(config);

        this.callParent([config]);
    },

    /**
     return a string formatted as 'yyyy-mm-ddTHH:nn' in local time.  The toISOString function returns this format, but in UTC time.
     */
    getISODate : function(date) {
        return date.getFullYear() + '-' + RoomGrab.util.Shared.pad((date.getMonth() + 1), 2) + '-' + RoomGrab.util.Shared.pad(date.getDate(), 2) + 'T' + RoomGrab.util.Shared.pad(date.getHours(), 2) + ':' + RoomGrab.util.Shared.pad(date.getMinutes(), 2);
    },
    
    /**
     if str is less than max length, recursively add 0 characters to the left
     */
    pad : function(str, max) {
        str = str.toString();
        return str.length < max ? RoomGrab.util.Shared.pad("0" + str, max) : str;
        // Change "app" to the name of the object that owns the pad method
    },
    
    getSelectedDate: function(){
    	var selectedDate = Ext.ComponentQuery.query('touchcalendarview')[0].getSelected()[0];
    	return selectedDate;    
    	}  
});