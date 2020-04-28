export default [
    {
        name: 'getAllFeedbackTypes',
        method: 'GET',
        desc: '获取所有反馈类型',
        path: '/api/feedback/getAllFeedbackTypes',
        mockEnable: false,
        mockPath: '/api/feedbackList/getAllFeedbackTypes'
    }, {
        name: 'postFeedback',
        method: 'POST',
        desc: '添加意见反馈',
        path: '/api/feedback/postFeedback',
        mockEnable: true,
        mockPath: '/api/feedbackList/postFeedback',
        params: {
            feedbackPostDTO: {
                "contact": "string",    //联系方式
                "content": "string",    //反馈内容
                "deviceModel": "string",    //设备型号（移动端：设备具体型号/系统版本，如：Meizu S6/Android7.0、iPhone10,3/iOS10.1，Web：系统版本）
                "imgUrls": "string",        //图片地址，多地址用,隔开
                "networkType": "string",    //网络类型，移动端必传
                "platformType": 0,          //平台类型：IOS = 1,Android = 2,WPC = 3,Web = 4,Server = 5
                "title": "string",          //标题
                "typeId": "string",         //反馈类型Id
                "userId": 0,                //反馈用户Id
                "version": "string"         //应用版本号，移动端必传
            }
        }
    }
]