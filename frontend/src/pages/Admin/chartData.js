import requestApi from "~/fetch";

export const getAllCinemaPay = async (month) => {
    let data = []
    console.log(month)
    await requestApi(`cinema/statistic/pay?month=${month}`, 'get')
        .then(res => {
            data = res
        })
        .catch((error) => {
            console.log(error)
        })
    return data
}

export const getCinemaPay6Month = async (cinema_id) => {
    let data = []
    // console.log(month)
    await requestApi(`cinema/statistic/pay6month?cinema_id=${cinema_id}`, 'get')
        .then(res => {
            data = res
        })
        .catch((error) => {
            console.log(error)
        })
    return data
}