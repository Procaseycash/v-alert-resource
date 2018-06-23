import VAlert from './alert.vue';
import vAlertService from "../../services/alert.service";
import ALERT_TIMEOUT from "./alert.config";

/* -- Plugin definition & Auto-install -- */
/* You shouldn't have to modify the code below */


// Plugin
const VAlertResource = {
// eslint-disable-next-line no-unused-vars
    install: (Vue) => {
        Vue.vAlertService = Vue.prototype.$vAlertService = vAlertService
        Vue.vAlertTimeout = Vue.prototype.$vAlertTimeout = ALERT_TIMEOUT
        Vue.component('v-alert', VAlert)
    }
}


// Expose
export {
    VAlert,
    vAlertService,
    ALERT_TIMEOUT
}

export default VAlertResource;

// Auto-install
const GlobalVue = (typeof window !== 'undefined') ? window.Vue : (typeof global !== 'undefined') ? global.Vue : null;
if (GlobalVue) {
    GlobalVue.use(VAlertResource)
}
