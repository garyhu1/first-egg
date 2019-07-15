const uppercase = async (ctx,next) => {
    ctx.query.name = ctx.query.name && ctx.query.name.toUpperCase();
    await next();
}

module.exports = {
    uppercase
}