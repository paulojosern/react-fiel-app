'use sctrict'
import React from 'react';

const Home = () => (
    <section className='home' id='home'>
        <div className='home__title'>
            <h1 className='title__content'> </h1>
            <div className='title__info'>
                <div className='info__text'> 
                    <p>Confira os benefícios e assine agora! </p>
                    <p>Planos a partir de <strong>R$ 16,00</strong> por mês!</p>
                </div>
                <button className='btn btn--primary btn--home'>ASSINE AGORA</button>
            </div>
            <div className='home__arrow'><span></span></div>
        </div>
        <div className='home__media-asset'></div>
    </section>
)

export default Home