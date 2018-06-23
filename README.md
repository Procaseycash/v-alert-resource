# v-alert-resource

This is a VueJs Library for notification in your application

 
## Installation
 
 `npm install --save v-alert-resource`

   
## Usage

In your main.js. kindly do this as this component has been registered globally: 

`import VAlertResource from 'v-alert-resource'`

`import 'v-alert-resource/dist/v-alert-resource.css'`
 
 `Vue.use(VAlertResource)`
 
Kindly load the component once in a global visible template like in App.vue

``
<v-alert></v-alert>
``  

What matters is to use the v-alert-resource service to push message. in any script part of your SFC. You have this globally bind to Vue

`this.$vAlertTimeout` or `Vue.vAlertTimeout` // Used to set timeout period, this can be configured in a global component

`this.$vAlertService` or `Vue.vAlertService` 

  You can decide to use the following methods based on what you want to alert.
    
    EG:
    `this.$vAlertService.success('Hello World')`  
    `this.$vAlertService.info('Hello World')`  
    `this.$vAlertService.warning('Hello World')`  
    `this.$vAlertService.error('Error was encountered', {name: 'name must not be empty'})`  // accepts default message and error message.

  We have the following methods you can use to notify.
    
    success: for success alert. Accepts HTML | string
    warning: for warning alert. Accepts HTML | string
    info: for information alert. Accepts HTML | string
    error: Accepts Object | Array<HTML | string> | Array<Object>. eg  
    clear: to destroy current open alert but alert disappears based on configured time.
    
  
  <b>v-alert-resource can be used as an:</b>
   
   <b>Overlay</b>: This is best used while the `<v-alert></v-alert>` is reference in a top level component that is always visible throughout the entire state of the angular app. such as usage in app.component and header layout component of your application.
   
   <b>No Overlay</b>: This is best used if you need to override the overlay approach for a specific component and render it in that current component content.  `<v-alert [overlay]="false"></v-alert>`.  you can also choose to use this alert in every component like this but it is not advisable to do so. 
  ````