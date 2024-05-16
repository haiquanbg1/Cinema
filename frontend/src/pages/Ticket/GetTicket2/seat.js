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

export const getShowTime = async (showtime_id) => {
    let data
    await requestApi(`showtime/${showtime_id}`, 'get')
        .then(res => {
            data = res
        })
        .catch((error) => {
            console.log(error)
        })

    return data
}