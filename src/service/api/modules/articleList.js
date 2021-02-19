export default [
    {
        name: 'getChapterById',
        method: 'GET',
        desc: '根据文章id查询文章详情',
        path: '/api/weekly/getChapterById',
        mockEnable: false,   //true为关闭Mock，false或不写为看全局config当前环境下的MOCK_DEFAULT_CONFIG.mock
        mockPath: '/api/article/getChapterById',
        params: {
            chapterId: 0        //文章id，int
        },
        subCode: {
            success: ['4603b00'],       //成功
            err_notToast: ['4603b0d']   //不需要弹窗的，其它弹窗(需要弹的占多数，不需要弹的占少数)
        }
    },{
        name: 'getHotChapterByWeeklyId',
        method: 'GET',
        desc: '查看本期文章',
        path: '/api/weekly/getHotChapterByWeeklyId',
        mockPath: '/api/article/getHotChapterByWeeklyId',
        params: {
            weeklyId : 0        //周刊id，int
        },
        subCode: {
            success: ['4603800'],       //成功
            err_notToast: []   //不需要弹窗的，其它弹窗(需要弹的占多数，不需要弹的占少数)
        }
    },{
        name: 'deleteByIds',
        method: 'DELETE',
        desc: '根据周刊id集删除书架周刊',
        path: '/api/weekly/deleteByIds',
        mockPath: '/api/article/deleteByIds',
        params: {
            userId: 215547,     //订阅用户uid，int
            weeklyIds: [25, 16]  //周刊id数组
        }
    }, {
        name: 'postSubscribe',
        method: 'POST',
        desc: '加入书架',
        path: '/api/weekly/postSubscribe',
        mockPath: '/api/article/postSubscribe',
        params: {
            userId: 215549,     //用户id，int
            weeklyId: 20        //周刊id，int
        }
    }
]