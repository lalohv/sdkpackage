ApsContent = function () {
	var that = this; 
	
	that.componentData = {

"specComp" : 
{
  "databound": false,
  "extension": "Component",
  "group": "ScnCommunityBasics",
  "handlerType": "sapui5",
  "height": "40",
  "id": "NotificationBar",
  "package": "basics",
  "parentControl": "sap.ui.ux3.NotificationBar",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Notification Bar 2.0",
  "tooltip": "Notification Bar",
  "width": "auto"
},

"spec" : 
{
  "categories": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Categories",
      "noAps": true,
      "noZtl": true,
      "tooltip": "The Notifications Pushed To Client",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "connectToCommonMessages": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Connect To Common Messages",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Setting This To TRUE Also The Common Messages From Messages Popup Will Be Handover To This Notification Bar",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "defaultImage": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Url For Default Image",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Default Image - Needed For Calculation Of The Url Prefix For Repository",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "Url",
    "type": "Url",
    "value": "",
    "visible": true
  },
  "deleteNotificationOnClick": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Delete Notification When Clicked",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Setting This To TRUE Deletes The Notification On Click Event",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "minimize": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Minimize function trigger",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Minimize function trigger",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "notifications": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Notifications",
      "noAps": true,
      "noZtl": true,
      "tooltip": "The Notifications Pushed To Client",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "removeAllOnMinimize": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Remove All Notifications When Minimized",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Setting This To TRUE Deletes All Notifications On Minimize Event",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "showOnNewNotifications": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Show Notification Bar When New Notifications Are Available",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Setting This To TRUE Shows Always Notification Bar When New Notifications Are Available",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "splitNotificationsByPriority": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Split Notifications By Priority",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Setting This To TRUE The Notifications Will Be Displayed In Categories By Priority",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  }
}, 

"specInclude" : 
{}, 

"specAbout" : 
{
  "description": "Notification Bar",
  "icon": "NotificationBar.png",
  "title": "Notification Bar 2.0",
  "topics": [
    {
      "content": "Notification Bar",
      "title": "Notification Bar"
    },
    {
      "content": "This component is a visualization component. It requires specific space in the application canvas.",
      "title": "Visualization"
    }
  ]
}

};

	org_scn_community_component_Core(that, that.componentData);
    
	return that;
};