import Head from 'next/head'
import Image from 'next/image'

export default function Homett() {
    return (
      <>
        <div className='separator'>
          <div className='organizer'>
            <div className='left'>
              <div className='leftorganizer'>
                <img className='logo' src='/images/logo.png' />
                <button className='cmbutton'><img className='logobtn' src='/images/home.png' />Página Inicial</button>
                <button className='cmbutton'><img className='logobtn' src='/images/home.png' />Explorar</button>
                <button className='cmbutton'><img className='logobtn' src='/images/home.png' />Notificações</button>
                <button className='cmbutton'><img className='logobtn' src='/images/home.png' />Mensagens</button>
                <button className='cmbutton'><img className='logobtn' src='/images/home.png' />Itens salvos</button>
                <button className='cmbutton'><img className='logobtn' src='/images/home.png' />Listas</button>
                <button className='cmbutton'><img className='logobtn' src='/images/home.png' />Perfil</button>
                <button className='cmbutton'><img className='logobtn' src='/images/home.png' />Mais</button>
                <button className='ttbutton'>Tweetar</button>
                <div className='footeruser'>
                  <img className='eu'src='/images/eu.png'/>
                  <div>
                    <p className='nome'>gsouza</p>
                    <p className='nomeuser'>@gsouza</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='middle'>
              <h2 className='pginicial'>Página Inicial</h2>
              <div className='tweeting'>
                <div className='tweetingorg'>
                  <img className='eu'src='/images/eu.png'/>
                  <input className='tweettext' type='text' placeholder='O que está acontecendo?'/>
                </div>
                  <div className='icon'>
                    <div className='iconorg'>
                    <button className='cmbutton'><img className='iconbtn' src='/images/home.png' /></button>
                    <button className='cmbutton'><img className='iconbtn' src='/images/home.png' /></button>
                    <button className='cmbutton'><img className='iconbtn' src='/images/home.png' /></button>
                    <button className='cmbutton'><img className='iconbtn' src='/images/home.png' /></button>
                    <button className='cmbutton'><img className='iconbtn' src='/images/home.png' /></button>
                    </div>
                      <button className='ttbutton2'>Tweetar</button>
                </div>
              </div>
              <div className='tweetsorg'>
                <div>
                  <img className='pages' src='/images/cinelogo.jpeg'/>
                </div>
                <div>
                  <h2>Cinemark Theatres <span className='teste'>@Cinemark</span></h2>
                  <div>
                    <h3>See you tomorrow morning for our next Summer Movie Clubhouse movie: <br></br><br></br>The Lego Movie 2: The Second Part!

                    Get your $1.50 Admission tickets now: <br></br><br></br> http://cinemark.com/series-events-info-pages/summer-movie-clubhouse?utm_source=tw&utm_medium=social&utm_campaign=int&utm_content=Organic</h3>
                  </div>
                  <img className='postimg' src='/images/post.png'/>
                </div>   
              </div>
            </div>
            <div className='right'>
              <h2>usahduashdsauhdsadko,asd</h2>
            </div>
          </div> 
        </div>
      </>
    )
  }