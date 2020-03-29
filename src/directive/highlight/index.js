import highlight from './highlight'

const install = function (Vue) {
    Vue.directive('highlight', highlight)
}

if (window.Vue) {
    window['highlight'] = highlight
    // eslint-disable-next-line no-undef
    Vue.use(install)
}

highlight.install = install
export default highlight
