import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Home | Mikey Max Club"
          meta={[
            { name: 'description', content: 'Mikey Max Club' },
            { name: 'keywords', content: 'catering, gaming' },
          ]}
        />

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Catering</h3>
                <p>Kitchen gadget fuelled dinner parties</p>
              </header>
              <Link to="/catering" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Game Development</h3>
                <p>The future of gaming is here</p>
              </header>
              <Link to="/game-dev" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>Hot Sauce</h3>
                <p>Making the worlds best condiments</p>
              </header>
              <Link to="/hot-sauce" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>Web Development</h3>
                <p>Making websites for those in need</p>
              </header>
              <Link to="/web-dev" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>Sub10</h3>
                <p>Golfing banter</p>
              </header>
              <Link to="/sub10" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3>Business Development</h3>
                <p>Turning dreams into reality</p>
              </header>
              <Link to="/busines-dev" className="link primary" />
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>The Mikey Max Club</h2>
              </header>
              <p>We need to fill in this with more content</p>
              <ul className="actions">
                <li>
                  <Link to="/events" className="button next">
                    Upcoming Events
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
