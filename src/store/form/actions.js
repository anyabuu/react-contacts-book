
export const FORM_SET = 'FORM_SET';

export const formValuesSet = (payload) => {
    return {
        type: FORM_SET,
        payload
    }
}

export const FORM_ERROR = 'FORM_ERROR';

export const formError = () => {
    return {
        type: FORM_ERROR,
    }
}

export const FORM_TOGGLE = 'FORM_TOGGLE';

export const formToggle = () => {
    return {
        type: FORM_TOGGLE,
    }
}

export const FORM_RESET = 'FORM_RESET';

export const formReset = () => {
    return {
        type: FORM_RESET,
    }
}