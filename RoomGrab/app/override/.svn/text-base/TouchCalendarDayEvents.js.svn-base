Ext.define('RoomGrab.override.TouchCalendarDayEvents', {
    override: 'Ext.ux.TouchCalendarDayEvents',
    constructor: function(config) {
        this.callParent(arguments);
    },

    getVerticalDayPosition: function(event){
        var startDate           = event.data.Record.get(this.getPlugin().getStartEventField()),
            roundedStartDate    = this.getRoundedTime(startDate),
            timeSlotCount       = (roundedStartDate.getHours() * 2) + (roundedStartDate.getMinutes() === 30 ? 1 : 0),
            minutesDiff         = (startDate.getTime() - roundedStartDate.getTime()) / 1000 / 60,
            firstTimeSlotEl     = this.getCalendar().element.select('table.time-slot-table td', this.getCalendar().element.dom).first(),
            verticalPosition    = 0;

        if(firstTimeSlotEl){
            var firstTimeSlotHeight = firstTimeSlotEl.getHeight(),
                firstTimeSlotY      = firstTimeSlotEl.getY(), // first time slot position - needed so we take the header row into account
                minutesPerPixel     = firstTimeSlotHeight / 30,
                extraMinutesY       = minutesDiff * minutesPerPixel,
                pixelOffset = Math.floor(timeSlotCount/2) * 2;

            if(firstTimeSlotHeight % 2 !== 0)
                pixelOffset = pixelOffset + (timeSlotCount/2);

            if(timeSlotCount === 0){
                verticalPosition = firstTimeSlotY + (timeSlotCount * firstTimeSlotHeight) + extraMinutesY;
            }
            else{
                verticalPosition = firstTimeSlotY + (timeSlotCount * firstTimeSlotHeight) + extraMinutesY - pixelOffset;
            }
        }

        return verticalPosition;


    }
});