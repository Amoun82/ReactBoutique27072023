import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios';

import { URLS } from '../../utils/constant/url';

import '../../utils/style/formArticle.css'

const AjouterArticle = () => {

    const [article, setArticle] = useState({}) ;
    const [post, setPost] = useState(null);
    const navigate = useNavigate() ; 

    const addArticle = async (objet) => {
        const response = await axios.post(URLS.postArticle, {
            name: objet.name,
            description: objet.description,
            price: parseFloat(objet.price),
            category: objet.category,
            picture: objet.picture,
            isActive: true
        })
            .then((response) => {
                setPost(response.data);
            }).catch((error) => {
                console.log(error.message);
            });
        console.log(response); 
    }

const handleChange = (event) => {
        const { name, value } = event.target;
        setArticle(article => ({ ...article, [name]: value }));
        console.log('test change name :', name, " value :", value);
    }

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
            addArticle(article);
            navigate('/articles') ;
        }
    }

    return (
        <div>
            <form className='flex flex-direction-column' onSubmit={handleSubmit}>
                <div className='flex flex-direction-column margin'>
                    <label className='flex' htmlFor="name">Nom :</label>
                    <input type="text" placeholder='ajouter un nom' name='name' onChange={handleChange} required />
                </div>

                <div className='flex flex-direction-column margin'>
                    <label className='flex' htmlFor="description">desciption :</label>
                    <textarea name="description" placeholder='ajouter une description' id="" cols="30" rows="10" onChange={handleChange} required></textarea>
                </div>
                <div className='flex flex-direction-column margin' onChange={handleChange}>
                    <label className='flex' htmlFor="category">Categorie :</label>
                    <select name='category' required>
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
                    <input type="text" placeholder='ajouter un prix' name='price' onChange={handleChange} required />
                </div>
                <div className='flex flex-direction-column margin'>
                    <label className='flex' htmlFor="picture">image :</label>
                    <input type="text" placeholder='Ajouter le liens de la photo' name='picture' onChange={handleChange} required />
                </div>

                <input className='margin' type="submit" value="Valider" />

            </form>

            {console.log('mon Article', article)}

        </div>
    )
}

export default AjouterArticle