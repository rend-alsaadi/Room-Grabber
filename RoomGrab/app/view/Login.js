/**
 * @author Rend Alsaadi
 */
Ext.define('RoomGrab.view.Login',{
	extend: 'Ext.form.Panel',
	xtype: 'login', 
	alias: 'widget.LoginPanel', 
	
	requires: [
		'Ext.field.Toggle',
		'Ext.field.Password',
		'Ext.form.FieldSet',
		'Ext.Img'
	],
	
	config: {
		cls: 'login',
		title: 'Login', 
		itemId: 'loginBox',
		floating: true,  
      	centered: true,  
     	modal: true,  
     	height: '75%',  
     	width: '75%', 
		items: [
			{
				xtype: 'image',
				src: 'resources/icons/padlock_closed.png',
				style: 'width:50px;height:50px;margin:auto'
			},
			
			{
				xtype: 'fieldset',
                cls: 'loginForm',
                title: 'Please login...',
                items: [
                	{xtype: 'textfield', name: 'emailaddress', placeHolder: 'user@example.com', autoCorrect: false, autoCapitalize: false, autoComplete: false },
                	{xtype: 'textfield', name: 'username', placeHolder: 'username', autoCorrect: false, autoCapitalize: false, autoComplete: false}, 
                    {xtype: 'passwordfield', name: 'password', placeHolder: 'password', autoCorrect: false, autoCapitalize: false, autoComplete: false }, 
                    {xtype: 'togglefield', label: 'Save', name: 'persistLogin' }
                    
                ]
			},
			
			{xtype: 'button', ui: 'round', padding: '10px', width: '50%', cls: 'loginbutton', action: 'login', text: 'Log in'}
		]		
	}
});
