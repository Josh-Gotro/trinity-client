import React from 'react';

const AboutPage = () => {


    return (
        <div className="AboutGrid">
            <div className="display_card3">
                <h1 className='aboutTitle'>Rails 6</h1>
                <h2 className='aboutTitle2'>PostgreSQL</h2>
                <h2 className='aboutTitle2'>JWT Web Tokens</h2>
                <img id="aboutImage"  src={require('./images/rails.png')} /> 
                <img id="aboutImage2" src={require('./images/JWT.png')} /> 
            </div>

            <div className="display_card5">
                <h1 id="UUA" >THANK YOU!</h1>
                <h3 id="UUS">Contact </h3>
                <h3 id="UUD">512-744-8789</h3>
                <h3 id="UUF">github.com/Josh-Gotro</h3>
                <h3 id="UUH">joshuagauthreaux@gmail.com</h3>
                {/* <h3 id="UUI">joshuagauthreaux@gmail.com</h3> */}

            
            </div>

            <div className="display_card4">
                <h1 className='aboutTitle'>React</h1>
                <h2 className='aboutTitle2'>Hooks + Recoil Hooks</h2>
                <h2 className='aboutTitle2'>React Hook Form</h2>
                <img id="aboutImage"  src={require('./images/react.png')} /> 
                <img id="aboutImage2"  src={require('./images/atom.png')} /> 
            </div>


        </div>
    );
}

export default AboutPage;
