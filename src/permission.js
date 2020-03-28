import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false })

router.beforeEach(async (to, from, next) => {
    NProgress.start()
    // 设置页面的标题
    document.title = getPageTitle(to.meta.title)
    // 监控打开的链接地址。修改 header 的index
    const { path } = to
    if (path) {
        let index
        if (path === '/index' || /\/post\/+/.test(path)) {
            index = 1
        } else if (path === '/tag/开心') {
            index = 2
        } else if (path === '/tag/美丽') {
            index = 3
        } else if (path === '/shop') {
            index = 4
        }
        await store.dispatch('app/setTabIndex', index)
    }
    next()
    NProgress.done()
})

router.afterEach(() => {
    // finish progress bar
    NProgress.done()
})
