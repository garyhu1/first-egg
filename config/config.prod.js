'use strict';

module.exports = appInfo => {

    const config = exports = {};

    config.logger = {
        level: 'DEBUG',
        allowDebugAtProd: true
    }

    return {
        ...config
    }
}