import Model from 'js-model'

const articleDetailModel = new Model({
    code: String,
    subCode: String,
    message: String,
    timeLine: Number,
    bodyMessage: {
        audioSrc: String,
        authorName: String,
        chapterBg: String,
        chapterSummary: String,
        chapterTitle: String,
        commentsCount: Number,
        contentUrl: String,
        favorCount: Number,
        readShow: Number,
        weeklyId: Number,
        weeklyName: String,
        hello: String
    }
})

export default articleDetailModel;