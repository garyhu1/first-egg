module.exports = {
    formatUser(user) {
        return only(user,[ "name", "phone" ])
    },

    toInt(str) {
        // 是数字就直接返回
        if (typeof str === 'number') return str;
        // 为空直接返回
        if (!str) return str;
        // 以十进制转成数字
        return parseInt(str, 10) || 0;
    }
}