import Model from 'js-model'

const articleDetailModel = new Model({
    total: {
        total1: Number,
        a: String
    },
    items: [
        {
            id: Number,
            timestamp: Number,
            author: String,
            reviewer: String,
            title: String,
            content_short: String,
            content: String,
            forecast:Number,
            importance: Number,
            type: String,
            status: String,
            display_time: String,
            comment_disabled: Boolean,
            pageviews: Number,
            image_uri: String,
            platforms: Array
        }
    ]
})

export default articleDetailModel;