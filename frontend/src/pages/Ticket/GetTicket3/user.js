import requestApi from "~/fetch";

export const getUserId = async () => {
    let data
    await requestApi(`user`, 'get')
        .then(res => {
            data = res.data.data
        })
        .catch((error) => {
            console.log(error)
        })
    // console.log(data.data.data) 
    return data
}