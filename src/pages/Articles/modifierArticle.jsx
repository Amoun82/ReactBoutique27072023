import { useEffect, useState } from 'react'

import { useParams, useLocation } from 'react-router-dom'

import axios from 'axios'

import { URLS } from '../../utils/constant/url';


const ModifierArticle = () => {
    const { id } = useParams();

    const [post, setPost] = useState(null);

    // console.log('le use param',useParams());

    const stateParams = useLocation() ;

    const { title } = stateParams.state;

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

    const modifyArticle = async (objet) => {
        const response = await axios.put(URLS.putArticle + id, {
            name: objet.name,
            description: objet.description,
            price: parseFloat(objet.price),
            category: objet.category,
            picture: objet.picture,
            isActive: objet.isActive
        })
            .then((response) => {
                setPost(response.data);
            }).catch((error) => {
                console.log(error.message);
            });
        console.log(response); 
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setArticle(article => ({ ...article, [name]: value }));
        // console.log('test change name :', name, " value :", value);
    };

    const handleChangeRadio = (event) => {
        // console.log('test radio');
        const {name, value} = event.target;

        console.log('name :' ,name, ' value : ', value );
        if(value == "true")
        {
            console.log('je suis passé dans le true') ;
            setArticle(article => ({ ...article, [name]: true }));
        }
        else
        {
            console.log('je suis passé dans le false') ;
            setArticle(article => ({ ...article, [name]: false }));
        }
    };

    const handleSubmit = (event) => {
        if (article.name === '' || article.name.length < 3)
            event.preventDefault();
        else {
            event.preventDefault();
            alert(`envoye du formulaire\n
                    Article\n
                    Name : ${article.name}\n
                    Description : ${article.description}\n
                    categorie : ${article.category}\n
                    prix : ${article.price}€\n
                    Photo : ${article.picture}\n
                    IsActive : ${article.isActive}\n
            `);
            console.log("votre formulaire est envoyé");
            modifyArticle(article);
            // navigate('/articles') ;
        }
    }

    return (
        <div>
            {/* {console.log('stateParams')} */}
            {title && (<h1>{title}</h1>)}
            {article && (<form className='flex flex-direction-column' onSubmit={handleSubmit}>
                <div className='flex flex-direction-column margin'>
                    <label className='flex' htmlFor="name">Nom :</label>
                    <input type="text" placeholder='ajouter un nom' name='name' onChange={handleChange} value={article.name} required />
                </div>

                <div className='flex flex-direction-column margin'>
                    <label className='flex' htmlFor="description">desciption :</label>
                    <textarea name="description" placeholder='ajouter une description' id="" cols="30" rows="10" value={article.description} onChange={handleChange} required></textarea>
                </div>
                <div className='flex flex-direction-column margin' onChange={handleChange}>
                    <label className='flex' htmlFor="category">Categorie :</label>
                    <select name='category' defaultValue={article.category} required>
                        <option value="">Choix de la catégorie</option>
                        <option value='h'>
                            Homme
                        </option>
                        <option value='f'>
                            Femme
                        </option>
                    </select>
                </div>

                <div className='flex flex-direction-column margin'>
                    <label className='flex' htmlFor="price">prix :</label>
                    <input type="text" placeholder='ajouter un prix' name='price' value={article.price} onChange={handleChange} required />
                </div>
                <div className='flex flex-direction-column margin'>
                    <label className='flex' htmlFor="picture">image :</label>
                    <input type="text" placeholder='Ajouter le liens de la photo' name='picture' value={article.picture} onChange={handleChange} required />
                </div>

                <fieldset onChange={handleChangeRadio}>
                    <legend>Activer :</legend>

                    <div>
                        <label htmlFor="isActive">oui</label>
                        <input type="radio" name="isActive" value="true" defaultChecked={article.isActive === true} />
                    </div>
                    <div>
                        <label htmlFor="isActive">non</label>
                        <input type="radio" name="isActive" value="false" defaultChecked={article.isActive === false} />
                    </div>

                </fieldset>


                <input className='margin' type="submit" value="Valider" />

            </form>)}

            {console.log('mon Article', article)}

        </div>
    )
}

export default ModifierArticle