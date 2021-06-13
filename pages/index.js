import Head from 'next/head'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="screen">
      <header>
        <section className="media-nav">
          <a href="#" className="active">
            Games
          </a>
          <a href="#">Media</a>
        </section>
        <section className="settings">
          <span className="icon">
            <i className="fa fa-search"></i>
          </span>
          <span className="icon">
            <i className="fa fa-cog"></i>
          </span>
          <span className="icon">
            <img className="user" src="https://yt3.ggpht.com/ytc/AAUvwngwgu78scRXbhOINMc-clJn7loR7a8Y1LWlijns0A=s88-c-k-c0x00ffffff-no-rj"></img>
          </span>
          <span className="time">8:06 PM</span>
        </section>
      </header>
      <div className="container">
        <section className="game-nav">
          <div className="game active">
            <i className="fa fa-location-arrow"></i>
          </div>
          <div className="game">
            <div 
            className="img" 
            style={{
              background: "url('https://i.redd.it/8pvdi0pne8a51.png')",
              backgroundSize: "contain", 
              backgroundPosition: "center", 
              transform: "scale(1.5)",
              }}
            />
          </div>
          <div className="game">
            <div 
            className="img" 
            style={{
              background: "url('https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6427/6427993cv11d.jpg;maxHeight=640;maxWidth=550')",
              backgroundSize: "contain", 
              backgroundPosition: "center", 
              transform: "scale(1.5)",
              }}
            />
          </div>
          <div className="game">
            <div 
            className="img" 
            style={{
              background: "url('https://i.redd.it/8pvdi0pne8a51.png')",
              backgroundSize: "contain", 
              backgroundPosition: "center", 
              transform: "scale(1.5)",
              }}
            />
          </div>
          <div className="game">
            <div 
            className="img" 
            style={{
              background: "url('https://i.redd.it/8pvdi0pne8a51.png')",
              backgroundSize: "contain", 
              backgroundPosition: "center", 
              transform: "scale(1.5)",
              }}
            />
          </div>
        </section>
        <section className="info">
          <span className="sub-title">
            Official news from PlayStation | 11/28/2020
          </span>
          <h1>Ready for a PS5 Adventure?</h1>
          <p>
            ASTRO's PLAYROOM is pre-loaded and waiting for you! 
            Explore the new capabilities of PS5 and feel the world...
          </p>
        </section>
        
      </div>
      <section id="video-trailers">
          <div className="trailer">
            <img 
              className="image"
              src="https://i.ytimg.com/vi/ZM7HC4aQ57g/maxresdefault.jpg"
            />
            <div className="video-info">
              <div className="circle-player">
                <i className="fa fa-play"></i>
              </div>
              <span className="title">Grand Theft Auto 6</span>
            </div>
          </div>
          <div className="trailer">
            <img 
              className="image"
              src="https://i.ytimg.com/vi/ZM7HC4aQ57g/maxresdefault.jpg"
            />
            <div className="video-info">
              <div className="circle-player">
                <i className="fa fa-play"></i>
              </div>
              <span className="title">Grand Theft Auto 6</span>
            </div>
          </div>
          <div className="trailer">
            <img 
              className="image"
              src="https://i.ytimg.com/vi/ZM7HC4aQ57g/maxresdefault.jpg"
            />
            <div className="video-info">
              <div className="circle-player">
                <i className="fa fa-play"></i>
              </div>
              <span className="title">Grand Theft Auto 6</span>
            </div>
            
          </div>
        </section>
    </div>
  )
}
