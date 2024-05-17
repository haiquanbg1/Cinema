import requestApi from "~/fetch";

export const getCommentById = async (cinema_id) => {
    let data = []
    await requestApi(`comment/${cinema_id}`, 'get')
        .then(res => {
            data = res.data.data
        })
        .catch((error) => {
            console.log(error)
        })
    return data
}