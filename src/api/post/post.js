import request from '@/utils/request'

/**
 * 依据博文的id 获取博文详情
 * @param data
 * @returns {AxiosPromise}
 */
export function getPostById(data) {
    const { id } = data
    return request({
        url: '/posts/' + id,
        method: 'get'
    })
}

export function getCategorys() {
    return request({
        url: '/posts/getCategorys',
        method: 'get'
    })
}
