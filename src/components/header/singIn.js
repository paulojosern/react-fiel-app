import React from 'react';
import Icon from '../icon'

const SingIn = ({ singInOpen, hide }) => singInOpen ? (
    <div className='singin'>
        <div className='singin__container'>
            <button className='singin__close' onClick={hide} />
            <div className='singin__content'>
                <div className='form'>
                    <div className='form__item'>
                        <div className='singin__title'> </div>
                    </div>
                    <div className='form__item'>
                        <input className='form__text' type='text' placeholder='Digite seu login'  tabIndex='1' required />
                    </div>
                    <div className='form__item'>
                        <input className='form__text' type='password' placeholder='Digite sua senha' tabIndex='2' required />
                    </div>
                    <div className='form__item'> 
                        <button className='btn btn--primary'>ENTRAR</button>
                    </div>
                    <div className='form__item'> 
                        <a className='btn btn--facebook' href='login_facebook.asp'>
                            <Icon local='media/medias' name='facebook' />
                            Entrar com facebook
                        </a>
                    </div>
                    <div className='form__item'>
                        <a href='esqueci.asp' className='link'>Esqueceu sua senha?</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
) : null

export default SingIn
