import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerEvents from '../components/BannerEvents'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Events = props => (
  <Layout>
    <Helmet>
      <title>Events | Mikey Max Club</title>
      <meta name="description" content="Events Page" />
    </Helmet>

    <BannerEvents />

    <div id="main">
      <section id="two" className="spotlights">
        <section>
          <Link to="/generic" className="image">
            <img src={pic08} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>End of Summer Bash</h3>
              </header>
              <p>
                Join us on the 13th of October for an end of summer feast fit
                for kings!
              </p>
              <ul className="actions">
                <li>
                  <Link to="/events/event-menu" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic09} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Christmas 2018</h3>
              </header>
              <p>Come and join in the festivities at Mikey Max Catering HQ</p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic10} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Christmas 2019</h3>
              </header>
              <p>Come and join in the festivities at Mikey Max Catering HQ</p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Events
