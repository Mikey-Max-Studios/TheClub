import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

const Generic = props => (
  <Layout>
    <Helmet>
      <title>Mikey Max Club</title>
      <meta name="description" content="Generic Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>MMC End of Summer Bash</h1>
          </header>
          <h3>On Arrival</h3>
          <ul>
            <li>Foragers Fizz – prosecco &amp; sloe gin</li>
          </ul>
          <h3>Antipasti</h3>
          <ul>
            <li>Bruschetta – Goats Cheese &amp; Squash</li>
            <li>Aubergine Dip with homemade focaccia</li>
            <li>Assorted Salami’s &amp; Cheeses</li>
          </ul>
          <h3>Antipasti</h3>
          <ul>
            <li>Bruschetta – Goats Cheese &amp; Squash</li>
            <li>Aubergine Dip with homemade focaccia</li>
            <li>Assorted Salami’s &amp; Cheeses</li>
          </ul>
          <h3>Primi</h3>
          <ul>
            <li>Squid Ink Ravioli with mushroom and bacon filling</li>
          </ul>
          <h3>Secondi</h3>
          <ul>
            <li>
              Sous Vide Venison Loin with celeriac puree and micro herbage
            </li>
          </ul>
          <h3>Dessert</h3>
          <ul>
            <li>Zombie Brains Delight</li>
            <li>Espresso Martinis</li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
)

export default Generic
