import img3 from '../sources/image 3.png'
import img4 from '../sources/image 4.png'
import img5 from '../sources/image 5.png'
import img6 from '../sources/image 6.png'

export const getServices = () => {
    return [
        {name: 'okko', img: img3, serviceUrl: 'https://okko.tv'},
        {name: 'sber-sound', img: img4, serviceUrl: 'https://sber-zvuk.com'},
        {name: 'sber-market', img: img5, serviceUrl: 'https://sbermarket.ru'},
        {name: 'delivery-club', img: img6, serviceUrl: 'https://www.delivery-club.ru'}
    ]
}