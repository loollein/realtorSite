import {models} from './model.js'
import {functions} from './functions.js'
import '../style/style.css'

const $navigation = document.querySelector('#navigation')

models.forEach(block => {
    const html = functions[block.type]
    if (html) {
        $navigation.insertAdjacentHTML('beforeend', html(block))
    }
})