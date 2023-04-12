import {row, col, bg} from './utils.js'

export const functions = {
    blockMenu
}

function blockMenu(block) {
    const imageHtml = block.value.image.map(item => `<img src="${item}" alt="house" class="imgHouse">`)

    const blockHtml = block.value.house.map(item =>
        bg(`<div class="iconPush">Популярно</div>
        <div class="titleBlock">${item}</div>
        <div class="imgHouse">${imageHtml.join('')}</div>`,
        ),
    )
    return row(col(blockHtml.join('')))
}