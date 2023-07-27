import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import axios from 'axios'

import { URLS } from '../../utils/constant/url';


const DetaileArticle = () => {
    const { id } = useParams();

    const [article, setArticle] = useState()

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await axios.get(URLS.fetchArticle + "/" + id);
            // console.log(response);
            // console.log(response.data);
            setArticle(response.data);
        }
        fetchArticles()

    }, [id]);

    return (
        <div>
            {article && <div>
                <h1>{article.name}</h1>
                <p>category : {article.category}, desciption : {article.description}, prix : {article.price}€</p>
                <figure>
                    <img className='imgDetail' src={article.picture} alt="" />
                </figure>
            </div>
            }
        </div>
    )
}

export default DetaileArticle