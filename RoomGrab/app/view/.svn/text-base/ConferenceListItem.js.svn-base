//RendAlsaadi 

Ext.define('RoomGrab.view.ConferenceRoomListItem',{
	extend: 'Ext.dataview.component.DataItem',
	xtype: 'conferenceroomlistitem',
	
	requires: ['Ext.Button'],
	
	config: {
		cls: 'conference-list-item', 
		dataMap: {
			getRoomName: {
                setHtml: 'roomName'
            }
            /*
            getEmailAddress: {
                setHtml: 'emailAddress'
            },
            getLocation: {
                setHtml: 'location'
            },
            getTelephoneNumber: {
            	setHtml: 'telephoneNumber'
            }
            */ 
		},
		roomName: {
            cls: 'x-roomName',
            flex: 1,
            xtype: 'label'
        },

        /*
        emailAddress: {
            cls: 'x-emailAddress',
            flex: 1,
            xtype:'label'
        },
        location: {
            cls: 'x-location',
            flex: 1
        },
        telephoneNumber: {
        	cls: 'x-telephoneNumber',
        	flex: 1
        },
        */
        button: {
        	cls: 'x-button', 
        	text: 'Quick',
        	width: 10,
            height:50,
            flex: 1,
            action: 'quickReserve'
        },
         
        layout: {
            type: 'hbox',
            align: 'center'
        }
	},
	
	applyRoomName: function(config) {
        return Ext.factory(config, Ext.Component, this.getRoomName());
    },
    
    updateRoomName: function(newRoomName, oldRoomName) {
        if (newRoomName) {
            this.add(newRoomName);
        }

        if (oldRoomName) {
            this.remove(oldRoomName);
        }
    },
    /*
     applyEmailAddress: function(config) {
        return Ext.factory(config, Ext.Component, this.getEmailAddress());
    },
    
    updateEmailAddress: function(newEmailAddress, oldEmailAddress) {
        if (newEmailAddress) {
            this.add(newEmailAddress);
        }

        if (oldEmailAddress) {
            this.remove(oldEmailAddress);
        }
    },
    
    applyLocation: function(config) {
        return Ext.factory(config, Ext.Component, this.getLocation());
    },
    
    updateLocation: function(newLocation, oldLocation) {
        if (newLocation) {
            this.add(newLocation);
        }

        if (oldLocation) {
            this.remove(oldLocation);
        }
    },
    
    applyTelephoneNumber: function(config) {
        return Ext.factory(config, Ext.Component, this.getTelephoneNumber());
    },
    
    updateLocation: function(newTelephoneNumber, oldTelephoneNumber) {
        if (newTelephoneNumber) {
            this.add(newTelephoneNumber);
        }

        if (oldTelephoneNumber) {
            this.remove(oldTelephoneNumber);
        }
    },
    */
    applyButton: function(config) {
        return Ext.factory(config, Ext.Button, this.getButton());
    },
    
    updateButton: function(newButton, oldButton) {
        if (newButton) {
        	newButton.on('tap', this.onButtonTap, this);
            this.add(newButton);
        }

        if (oldButton) {
            this.remove(oldButton);
        }
    }
    
    /*
    onButtonTap: function(button, e) {
        var record = this.getRecord();

        Ext.Msg.alert(
            record.get('name'), // the title of the alert
            "The status of of this room is: " + record.get('status')+
            "And the location of this room is: " +record.get('location') // the message of the alert
        );
    }
    */ 
    
});
