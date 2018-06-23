import {EventsHandler} from '../utils/event.handler.js'
import {CheckError} from '../utils/checkError.js'

const vAlertService = {
    alert: {
        visible: false,
        message: '',
        type: '',
        alert_class: ''
    },
    /**
     * Success Alert
     * @param message
     * @returns {{message: string, alert_class: string}}
     */
    success(message) {
        this.alert.alert_class = 'alert alert-success animated fadeIn'
        this.alert.message = message
        this.alert.visible = true
        this.alert.type = 'success'
        EventsHandler.broadcast('AlertMessage', this.alert)
        return this.alert
    },

    /**
     * Info Alert
     * @param message
     * @returns {{message: string, alert_class: string}}
     */
    info(message) {
        this.alert.alert_class = 'alert alert-info animated fadeIn'
        this.alert.message = message
        this.alert.visible = true
        this.alert.type = 'info'
        // console.log(this.alert)
        EventsHandler.broadcast('AlertMessage', this.alert)
        return this.alert
    },

    /**
     * Warning Alert
     * @param message
     * @returns {{message: string, alert_class: string}}
     */
    warning(message) {
        this.alert.alert_class = 'alert alert-warning animated fadeIn'
        this.alert.message = message
        this.alert.visible = true
        this.alert.type = 'warning'
        EventsHandler.broadcast('AlertMessage', this.alert)
        return this.alert
    },

    /**
     * Error Alert
     * @param message
     * @param data
     * @returns {{message: string, alert_class: string}}
     */
    error(message, data) {
        this.alert.alert_class = 'alert alert-danger animated fadeIn'
        this.alert.message = message
        if (data) {
            // console.log('DataSent=', data)
            this.alert.message = this.showError(data, message)
        }
        this.alert.visible = true
        this.alert.type = 'error'
        EventsHandler.broadcast('AlertMessage', this.alert)
        return this.alert
    },


    /**
     * This is used to clear alert from display
     */
    clear() {
        EventsHandler.broadcast('closeAlertMessage', new Date())
    },

    /**
     * This is used to display Error message
     * @param data
     * @param message
     */
    showError(data, message) {
        // // console.log('constru=', data instanceof Response, data.constructor);
        if (data.constructor === Object || data.constructor === Array) {
            // console.log('i was here')
            return CheckError.message(data, message)
        } else if (data.body || data.message) {
            // console.log('i was here 9990')
            data = data.body || data.message
            return CheckError.message(data, message)
        }
        data = (data.constructor === String) ? data : message
        return data || message || data.message || data.statusText || 'Error encountered while processing request, please try again.'
    }

};

export default vAlertService;
