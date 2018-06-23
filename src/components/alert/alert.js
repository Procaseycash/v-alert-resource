import {EventsHandler} from '../../utils/event.handler'
import ALERT_TIMEOUT from "./alert.config";

export default {
    name: 'v-alert',
    props: ['overlap'],
    data() {
        return {
            alert: {
                visible: false,
                message: '',
                type: '',
                alert_class: ''
            },
            overlay: this.overlap || true,
            alertClosure: null,
            message: null
        }
    },
    methods: {
        closeAlert() {
            this.alertClosure = setTimeout(() => {
                this.alert.visible = false
            }, ALERT_TIMEOUT)
        }
    },
    watch: {
        overlap(data) {
            this.overlay = data || true
        }
    },
    created() {
        EventsHandler.on('AlertMessage', (data) => {
            clearTimeout(this.alertClosure)
            setTimeout(() => {
                this.alert = data
                // // console.log('alert=', data);
                this.message = this.alert.message
                this.closeAlert()
            }, 200)
        })
        EventsHandler.on('closeAlertMessage', () => {
            this.alert.visible = false
            clearTimeout(this.alertClosure)
        })
    }

}
