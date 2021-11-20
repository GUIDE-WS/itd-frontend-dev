import img3 from '../sources/image 3.png'
import img4 from '../sources/image 4.png'
import img5 from '../sources/image 5.png'
import img6 from '../sources/image 6.png'

export const getServices = () => {
    return [
        {name: 'okko', img: img3, serviceUrl: 'okko'},
        {name: 'sber-sound', img: img4, serviceUrl: 'sber-sound'},
        {name: 'sber-market', img: img5, serviceUrl: 'sber-market'},
        {name: 'delivery-club', img: img6, serviceUrl: 'delivery-club'}
    ]
}