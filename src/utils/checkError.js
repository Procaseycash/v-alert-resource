export const CheckError = {

    /**
     * This is used to compose validation messages
     * @param validationObj
     * @param message
     * @returns {string}
     */
    message(validationObj, message) {
        let msg = ''
        if (validationObj && validationObj.constructor === Object) {
            msg = this.processObj(validationObj)
        } else if (validationObj && validationObj.constructor === Array) {
            msg = this.processArray(validationObj)
        } else if (validationObj.constructor === String) {
            msg = validationObj
        }
        return (msg || message);
    },

    processObj(data) {
        let msg = ''
        Object.keys(data).forEach((key) => {
            if (data[key] && data[key].constructor === String) {
                msg += `${(key.toLowerCase() !== 'message' && key.toLowerCase() !== 'detail') ? `${key.split('_').join(' ')}:` : ''} ${data[key]}. <br/>`
            } else if (data[key] && data[key].constructor === Object) {
                msg += this.processObj(data[key])
            } else if (data[key] && data[key].constructor === Array) {
                msg += this.processArray(key, data[key])
            }
        })
        return msg
    },

    processArray(key, dataObj) {
        let msg = ''
        dataObj.forEach((data) => {
            if (data && data.constructor === String) {
                msg += `${(key.toLowerCase() !== 'message' && key.toLowerCase() !== 'detail') ? `${key.split('_').join(' ')}:` : ''} ${data}. <br/>`
            } else if (data && data.constructor === Object) {
                msg += this.processObj(data)
            } else if (data && data.constructor === Array) {
                msg += this.processArray(data)
            }
        })
        return msg
    },


};


