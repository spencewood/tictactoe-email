module.exports = {
    isDevelopment: process.env.NODE_ENV !== 'production',
    pubnub: {
        subscribe_key: process.env.PUBNUB_SUBSCRIBE_KEY || 'demo',
        publish_key: process.env.PUBNUB_PUBLISH_KEY || 'demo'
    },
    postmark: {
        api_key: process.env.POSTMARK_API_KEY,
        from_email: process.env.POSTMARK_FROM_ADDRESS
    },
    baseUrl: process.env.BASE_WEB_URL
};