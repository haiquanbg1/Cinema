import FilmSlider from "./FilmSlider";
import styles from './FilmList.module.scss';
import classNames from "classnames/bind";
import requestApi from "~/fetch";

const cx = classNames.bind(styles)

export const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1024 },
        items: 5,
        slidesToSlide: 2,
    },
    desktop: {
        breakpoint: { max: 1024, min: 800 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const getFilmList = async () => {
    let data = []
    await requestApi('film', 'get')
        .then((res) => {
            // console.log(res.data.data)
            for (let i = 0; i < res.data.data.length; i++) {
                let categories = ""
                res['data']['data'][i]['film_categories'].forEach(element => {
                    categories = categories + element.Category.name + ', '
                })
                data.push({
                    src: "https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg",
                    title: res['data']['data'][i].title,
                    type: categories.substring(0, categories.length - 2)
                })
            }
        })
        .catch(err => console.log(err))
    return data
}

export const films = await getFilmList()

function FilmList() {

    return (
        <FilmSlider />

    );
}

export default FilmList;