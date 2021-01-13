import { SAVE, GETDETAIL, URLLIST, COLLECT, SURVEY_DY_LIST, GET_WX_OPENID, GETHAVE_S } from '@/services/api.js?v=1'
import { request, METHOD } from '@/utils/request'


export async function savefrom(data) {
    // debugger;
    console.log(data)
    return request(SAVE, METHOD.POST, data)
}

export async function getDetail(data) {
    // debugger;
    // console.log(LOGIN)
    return request(GETDETAIL, METHOD.GET, {
        surveyId: data.id
    })
}


export async function haveGetDetail(data) {
    // debugger;
    // console.log(LOGIN)
    return request(GETHAVE_S, METHOD.GET, {
        questionnaireId: data.id
    })
}


export async function getfromlist(data) {
    return request(URLLIST, METHOD.GET, {
        keywords: data.keywords,
        limit: data.limit,
        page: data.page
    })
}

/**
 * @param {integer} contents 表单内容
 * @param {integer} surveyId 服务ID
 * @param {integer} questionnaireId 医生ID
 * @param {integer} source ?
 * @param {integer} userId userid?
 * @returns {object} //收集表单提交提交
 */

export async function answerCollect(data) {

    return request(COLLECT, METHOD.FROM, {
        contents: data.contents,
        userId: data.userId,
        source: data.source,
        questionnaireId: data.questionnaireId,
        surveyId: data.surveyId
    })
}
/**
 * @param {integer} limit 每页条数
 * @param {integer} page 第几页
 * @returns {object} //查询收集列表
 */

export async function getDylist(data) {
    return request(SURVEY_DY_LIST, METHOD.GET, {
        limit: data.limit,
        page: data.page,
        questionnaireId: data.questionnaireId,
        surveyId: data.surveyId
    })
}

/**
 * @param {string} code 每页条数
 * @returns {object} //获取openid
 */

export async function getopenidFrom(data) {
    return request(GET_WX_OPENID, METHOD.POST, {
        code: data.code
    })
}