import hljs from 'highlight.js'
import 'highlight.js/styles/default.css'

export default function highlight(el) {
    const blocks = el.querySelectorAll('pre code')
    blocks.forEach((block) => {
        hljs.highlightBlock(block)
    })
}

