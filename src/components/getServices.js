import axios from "axios";
import img3 from '../sources/Okko.png'
import img4 from '../sources/sberzvuk-700x450.png'
import img5 from '../sources/Sbermarket_logo.png'
import img6 from '../sources/unnamed.png'

export const getServices = () => {
    return [
        {name: 'okko', img: img3, serviceUrl: 'https://okko.tv'},
        {name: 'sber-sound', img: img4, serviceUrl: 'https://sber-zvuk.com'},
        {name: 'sber-market', img: img5, serviceUrl: 'https://sbermarket.ru'},
        {name: 'delivery-club', img: img6, serviceUrl: 'https://www.delivery-club.ru'}
    ]
}

/*export const getServices = async () => {
    let response = await axios.get('http://127.0.0.1:8000').then(res => res.data)
    return response
}*/
