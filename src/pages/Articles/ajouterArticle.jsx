import { useState } from 'react'

import '../../utils/style/formArticle.css'

const AjouterArticle = () => {

    const [name,setNAme] = useState('')

    return (
        <div>
            <form className='flex flex-direction-column'>
                <div className='flex flex-direction-column'>
                    <label className='flex' htmlFor="name">Nom :</label>
                    <input type="text" name='name' />
                </div>

                <div className='flex flex-direction-column'>
                    <label className='flex' htmlFor="description">desciption :</label>
                    <textarea name="description" id="" cols="30" rows="10"></textarea>
                </div>
                <div className='flex flex-direction-column'>
                    <label className='flex' htmlFor="category">Categorie :</label>
                    <select name='category'>
                        <option>Choix de la catégorie</option>
                        <option value='h'>
                            Homme
                        </option>
                        <option value='f'>
                            Femme
                        </option>
                    </select>
                </div>

                <div className='flex flex-direction-column'>
                    <label className='flex' htmlFor="price">prix :</label>
                    <input type="text" name='price' />
                </div>
                <div className='flex flex-direction-column'>
                    <label className='flex' htmlFor="picture">image :</label>
                    <input type="text" name='picture' />
                </div>

                <fieldset>
                    <legend>Activer :</legend>

                    <div>
                        <label htmlFor="isActive">oui</label>
                        <input type="radio" name="isActive" id="" value="1" checked/>
                    </div>
                    <div>
                        <label htmlFor="isActive">non</label>
                        <input type="radio" name="isActive" id="" value="0" />
                    </div>

                </fieldset>


                <input type="submit" value="Valider" />

            </form>



        </div>
    )
}

export default AjouterArticle