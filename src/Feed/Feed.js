
import './Feed.css';
import {Link} from 'react-router-dom';
import  More from  '../Imagens/more.svg';

function Feed(){
    return(
        <div>
            
            <main>
                <div className='cards'>
                    <div className='card'>
                        <header>
                            <h2>Título vem da Api</h2>
                            <img src={More}/>
                        </header>
                            <div className='line'></div>
                            <p>Descrição: Só preciso de 4 pontos Prof <br/>Apenas o botão "Ler mais" funciona, mó triste...</p>

                            <div className='btns'>
                                <div className="btn-edit">
                                    <Link to='/edit'>
                                        <button>Edit</button>
                                    </Link>
                                </div>
                                <div className='btn-readmore'>
                                    <Link to='/lermais'>
                                        <button>Ler mais</button>
                                    </Link>
                                </div>
                                <div className="btn-delete">
                                    <Link to='/delete'>
                                        <button>Delete</button>
                                    </Link>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Feed;