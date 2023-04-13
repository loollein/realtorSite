import {row, col, bg, test} from './utils.js'

export const functions = {
    blockMenu
}


function blockMenu(block) {

    const blockHtml = block.value.house.map(item =>
        bg(`<div class="iconPush">Популярно</div>
        <div class="titleBlock">${item}</div>
        <img src="${block.value.image[4]}" alt="house" class="imgHouse">`),
    )

    return row(col(blockHtml.join('')))

}