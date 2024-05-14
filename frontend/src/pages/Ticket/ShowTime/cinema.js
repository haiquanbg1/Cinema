import requestApi from "~/fetch";

export const getCinema = async (cinema_id) => {
    await requestApi(`showtime?film_id=${film_id}`, 'get')
        .then(res => {
            data = res
        })
        .catch((error) => {
            console.log(error)
        })
    return data
}