import image from '../img/houseBig.webp'
import imageLittle from '../img/little.jpeg'
import imageSmall from '../img/small.jpeg'
import imageMedium from '../img/medium.jpeg'
import imageBig from '../img/big.jpg'

export const models = [
    {type: 'blockMenu', value: {
        house: [
            'Загородная недвижимость',
            'Студия',
            'Однокомнатная',
            'Двухкомнатная',
            'Трехкомнатная',
        ],
        image: [
            image,
            imageLittle,
            imageSmall,
            imageMedium,
            imageBig
        ]
        }},
    {type: 'popular', value: 'Популярно'},
]