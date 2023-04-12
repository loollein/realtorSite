import {models} from './model.js'
import {functions} from './functions.js'

const $bm = document.querySelector('#selectBlock')

models.forEach(block => {
    const html = functions[block.type]
    if (html) {
        $bm.insertAdjacentHTML('beforeend', html(block))
    }
})