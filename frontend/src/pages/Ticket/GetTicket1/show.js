import requestApi from "~/fetch";
import axios from "axios";

export const getShowtimes = async (film_id) => {
    let data = []
    await requestApi(`showtime?film_id=${film_id}`, 'get')
        .then(res => {
            data = res
        })
        .catch((error) => {
            console.log(error)
        })
    return data
}