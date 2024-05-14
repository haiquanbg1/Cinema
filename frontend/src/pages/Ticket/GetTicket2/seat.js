import requestApi from "~/fetchAPI";
import axios from "axios";

export const getSeatBooked = async (time_id) => {
    let data = []
    await requestApi(`seat?showtime_id=${time_id}`, 'get')
        .then(res => {
            data = res
        })
        .catch((error) => {
            console.log(error)
        })

    return data
}

export const getFilmById = async (film_id) => {
    let data = []
    await requestApi(`filmById?film_id=${film_id}`, 'get')
        .then(res => {
            data = res
        })
        .catch((error) => {
            console.log(error)
        })

    return data
}