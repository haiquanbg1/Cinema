import FilmList from "~/components/FilmList";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketSimple, faCircleInfo, faLanguage } from '@fortawesome/free-solid-svg-icons';
import Image from "~/components/Image";
import Button from "~/components/Button";
import { useSelector } from 'react-redux';
import FilmInfo from "~/components/FimInfo";
import requestApi from "~/fetch";

const cx = classNames.bind(styles)

const getFilmList = async () => {
    let data = []
    await requestApi('film', 'get')
        .then((res) => {
            for (let i = 0; i < res.data.data.length; i++) {
                let categories = ""
                res['data']['data'][i]['film_categories'].forEach(element => {
                    categories = categories + element.Category.name + ', '
                })
                data.push({
                    src: res['data']['data'][i].image,
                    title: res['data']['data'][i].title,
                    id: res['data']['data'][i].id,
                    type: categories.substring(0, categories.length - 2),
                    showing: res['data']['data'][i].showing,
                    description: res['data']['data'][i].description,
                    classify: res['data']['data'][i].Classify.description,
                    actor: res['data']['data'][i].actor,
                    director: res['data']['data'][i].director,
                    release: res['data']['data'][i].release_date,
                    language: res['data']['data'][i].Language.name
                })
            }
        })
        .catch(err => console.log(err))
    return data
}

export const films = await getFilmList()

const filmsNow = films.filter((film, index) => {
    return film.showing == 1
})

const filmsAfter = films.filter((film, index) => {
    return film.showing == 0
})

function Home() {

    return (<div>
        <FilmInfo></FilmInfo>
        <div className={cx('showing')}>
            <h2>Phim đang chiếu</h2>
            <FilmList films={filmsNow} />
        </div>
        <div className={cx('pre-sale')}>
            <h2>Vé bán trước</h2>
            <FilmList films={films} />
        </div>
        <div className={cx('coming')}>
            <h2>Phim sắp chiếu</h2>
            <FilmList films={filmsAfter} />
        </div>
    </div >);
}

export default Home;