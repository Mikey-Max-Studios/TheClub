import React from 'react'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>Welcome to The Club</h1>
      </header>
      <div className="content">
        <p>A place where Mikey and Max make huge plans</p>
        <ul className="actions">
          <li>
            <a href="events" className="button next scrolly">
              Upcoming Events
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
