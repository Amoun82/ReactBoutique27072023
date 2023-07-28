import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

import '../../utils/style/getArticles.css'

import { URLS } from '../../utils/constant/url';

const GetArticles = () => {

    const [articles, setArticles] = useState();

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await axios.get(URLS.fetchArticles);
            // console.log(response);
            // console.log(response.data['hydra:member']);
            setArticles(response.data['hydra:member']);
        }
        fetchArticles()

    }, []);

    return (
        <div>
            <h1>Liste des articles</h1>
            {/* {console.log('dans le html',articles)} */}
            {articles && articles.map(article =>
                (
                    // console.log(article);
                    <div className='cadre' key={article.id}>
                        <h2>
                            {article.name}
                        </h2>
                        <p>category : {article.category}, desciption : {article.description}, prix : {article.price}€</p>
                        <figure>
                            <img className='img' src={article.picture} alt="" />
                        </figure>

                        <Link className='margin-x' to={{ pathname: `detail-article/${article.id}` }}
                            state={{ title: 'page article 🎁' }}
                        >
                            Article
                        </Link>
                        <Link className='margin-x' to={{ pathname: `modifier-article/${article.id}` }}
                            state={{ title: 'Modifier article', category: 'truc' }}
                        >
                            Modifer articles
                        </Link>
                    </div>
                )
            )}
        </div>
    )
}

export default GetArticles