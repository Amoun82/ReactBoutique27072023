import { useEffect, useState } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'

import axios from 'axios'

import { URLS } from '../../utils/constant/url';


const DetaileArticle = () => {
    const { id } = useParams();

    const stateParams = useLocation();

    const { title } = stateParams.state

    const [article, setArticle] = useState()

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await axios.get(URLS.fetchArticle + id);
            // console.log(response);
            // console.log(response.data);
            setArticle(response.data);
        }
        fetchArticles()

    }, [id]);

    return (
        <div>
            {title && (<h1>{title}</h1>)}

            {article && <div>
                <h1>{article.name}</h1>
                <p>category : {article.category}, desciption : {article.description}, prix : {article.price}€</p>
                <figure>
                    <img className='imgDetail' src={article.picture} alt="" />
                </figure>
                <Link className='margin-x' to={{ pathname: `/articles/modifier-article/${article.id}` }}
                    state={{ title: 'Modifier article' }}
                >
                    Modifer article
                </Link>
                <Link className='margin-x' to={{ pathname: `/articles/supprimer-article/${article.id}` }}
                >
                    supprimer article
                </Link>
            </div>
            }
        </div>
    )
}

export default DetaileArticle