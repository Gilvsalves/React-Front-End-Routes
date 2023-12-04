import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import './Post.css';
import axios from 'axios';

const validationPost = yup.object().shape({
    title: yup.string().required("O título é obrigatório!").max(40,"O título precisa ter menos de 40 caracteres"),
    description: yup.string().required("A descrição é obrigatória!").max(150,"A descrição precisa ter menos de 150 caracteres"),
    content:yup.string().required("O conteúdo é obrigatório!").max(500,"O conteúdo precisa ter menos de 500 caracteres")
})

function Post(){
    const { register, handleSubmit, formState: {errors}, } = useForm({
        resolver: yupResolver(validationPost)
    })
    const addPost = (data) => axios.post("http://localhost:8000/estoque", data)
    .then(()=>{
        console.log("Funciona!")
    })
    .catch(()=>{
        console.log("Deu errado :(")
    })
    
    return(
        <div>
            <main>
                <div className="card-post">
                    <h1>Criar Item Mágico</h1>
                    <div className='line-post'></div>

                    <div className='card-body-post'>

                        <form onSubmit={handleSubmit(addPost)}>
                            <div className='fields'>
                                <label>Título</label>
                                <input type='text' name='title'{...register("title")}/>
                                <p className='error-message'>{errors.title?.message}</p>
                            </div>
                            <div className='fields'>
                                <label>Descrição</label>
                                <input type='text' name='description'{...register("description")}/>
                                <p className='error-message'>{errors.description?.message}</p>
                            </div>
                            <div className='fields'>
                                <label>Conteúdo</label>
                                <textarea type='text' name='content'{...register("content")}/>
                                <p className='error-message'>{errors.content?.message}</p>
                            </div>
                            <div className='btn-post'>
                                <button type='submit'>Enviar</button>
                            </div>
                        </form>

                    </div>

                </div>
            </main>
        </div>
    )
}
export default Post;