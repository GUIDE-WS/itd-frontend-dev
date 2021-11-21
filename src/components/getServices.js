import axios from "axios";

/*export const getServices = () => {
    return [
        {name: 'okko', img: img3, serviceUrl: 'https://okko.tv'},
        {name: 'sber-sound', img: img4, serviceUrl: 'https://sber-zvuk.com'},
        {name: 'sber-market', img: img5, serviceUrl: 'https://sbermarket.ru'},
        {name: 'delivery-club', img: img6, serviceUrl: 'https://www.delivery-club.ru'}
    ]
}*/

export const getServices = async () => {
    let response = await axios.get('http://127.0.0.1:8000')
    return response
}
