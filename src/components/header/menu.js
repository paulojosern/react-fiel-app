import React from 'react'
import useToggle from '../modal-index/useModal'
import Modal from '../modal-index/modal'
import Icon from '../icon'
import About from './../modal-index/about'
import Faq from './../modal-index/faq'
import Benefits from './../modal-index/benefits'
import Terms from './../modal-index/terms'

const Menu = ( {changeToogle} ) => {

    const [openAbout, setOpenAbout] = useToggle(false);
    const [openFaq, setOpenFaq] = useToggle(false)
    const [openBe, setOpenBe] = useToggle(false)
    const [openTerms, setOpenTerms] = useToggle(false)

    return (
        <React.Fragment>         
            <nav className='menu'>
                <ul className='navbar'>
                    <li className='navbar__item navbar__item--submenu'> 
                        <a className='navbar__link scroll' data-href='#categories' href='index.asp#categories'>PLANOS</a>
                        <div className='icon__arrow'></div>
                        <ul className='navbar__submenu'>
                            <li className='submenu__item'>
                                <div className='navbar__link jsmodal'  onClick={() => setOpenBe()}>BENEFÍCIOS</div>
                            </li>
                            <li className='submenu__item'>
                                <div className='navbar__link jsmodal'  onClick={() => setOpenTerms()}>REGULAMENTO</div>
                            </li>
                        </ul>
                    </li>
                    <li className='navbar__item'> 
                        <div className='navbar__link' href onClick={() => setOpenAbout()}>CONHEÇA O FT</div>
                    </li>
                    <li className='navbar__item'> 
                        <div className='navbar__link' href onClick={() => setOpenFaq()} >DÚVIDAS</div>
                    </li>
                    <li className='navbar__item'><a className='navbar__link scroll' data-href='#contact' href='index.asp#contact'>CONTATO</a></li>
                </ul>
                <a className='btn btn--primary btn--home' href onClick={changeToogle}>ENTRAR</a>
                <div className='menu__sign'> 
                    <div className='sign__content'>
                        <p>Ainda não é um Fiel Torcedor,</p>
                        <p>assine um plano agora mesmo</p>
                    </div><a className='btn btn--primary btn--home' href='register.asp'>ASSINAR</a>
                </div>
                <div className='menu__social-media'>
                    <a className='media__item' href='https://www.facebook.com/pages/Programa-Fiel-Torcedor/758079524242041?ref=ts&fref=ts' target='blank'>
                        <Icon local='media/medias' name='facebook' />
                    </a>
                    <a className='media__item' href='https://twitter.com/fieltorcedor' target='blank'>
                        <Icon local='media/medias' name='twitter' />
                    </a>
                    <a className='media__item' href='https://www.youtube.com/user/corinthiansoficial' target='blank'>
                        <Icon local='media/medias' name='youtube' />
                    </a>
                    <a className='media__item' href='https://instagram.com/programafieltorcedor' target='blank'>
                        <Icon local='media/medias' name='instagram' />
                    </a>
                </div>
            </nav>
            <Modal open={openAbout} toggle={setOpenAbout} children={<About/>} />
            <Modal open={openFaq} toggle={setOpenFaq} children={<Faq/>} />
            <Modal open={openBe} toggle={setOpenBe} children={<Benefits/>} />
            <Modal open={openTerms} toggle={setOpenTerms} children={<Terms/>} />
        </React.Fragment>
    )
}

export default Menu