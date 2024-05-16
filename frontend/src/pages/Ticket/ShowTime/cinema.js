import requestApi from "~/fetchAPI";

export const getCinema = async (cinema_id) => {
    let data
    await requestApi(`cinema/${cinema_id}`, 'get')
        .then(res => {
            data = res.data.data
        })
        .catch((error) => {
            console.log(error)
        })

    return data
}