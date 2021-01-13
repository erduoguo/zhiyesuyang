//跨域代理前缀
const BASEAPI = process.env.VUE_APP_API_BASE_URL//
// const BASEAPI = '/wxtest'//wxtest/测试
//api端口
const BASE_URL = "/questionnaire"
const ANSWER = "/answer"
const SURVEY = "/survey"//
const ANALYSIS = "/analysis"

// /survey/list
// /survey/create
//api接口地址
module.exports = {
    SAVE: BASEAPI + BASE_URL + "/save",//保存
    ANSWER_SAVE: BASEAPI + ANSWER + '/save',
    GETDETAIL: BASEAPI + ANSWER + "/getSurvey",

    GETHAVE_S: BASEAPI + BASE_URL + "/getDetail",

    URLLIST: BASEAPI + BASE_URL + "/list",
    COLLECT: BASEAPI + ANSWER + "/submit",
    SURVEY_DY_LIST: BASEAPI + ANALYSIS + "/show",
    GET_MOBAN: BASEAPI + SURVEY + "/list",
    SAVE_CREATE: BASEAPI + SURVEY + "/create",//创建调研
    // /survey/stop/{surveyId}
    STOP_CREATE: BASEAPI + SURVEY + "/stop",//创建调研
    STOP_FORM: BASEAPI + BASE_URL + "/disable",
    //old

    GET_WX_LIST: BASEAPI + "/manage/wxAccount/list",
    GET_WX_OPENID: BASEAPI + "/wxAuth/codeToOpenid"

}
