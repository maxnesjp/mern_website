import React from 'react'
import Meta from '../components/Meta'
import { Col, Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

const AboutScreen = ({}) => {
  return (
    <>
      <Meta title="About Page | Maxim Nesterov's MERN store" />
      <h1 className='about-heading'>FULL MERN Website</h1>
      <p>
        This e-commerce website is entirely created by using the following
        frameworks and libraries:{' '}
      </p>

      <Row>
        <Col md={6} ms={6} xs={12}>
          <h5 className='about-heading'>React</h5>
          <p>
            React Js is used as the primary way to layout everything on the
            frontend of the website. Everything that users and admins interact
            with is created using React code in Javascript. Other libraries and
            frameworks included:
            <ul>
              <li>axios</li>
              <li>react-bootstrap</li>
              <li>react-dom</li>
              <li>react-redux</li>
              <li>react-router-bootstrap</li>
              <li>react-router-dom</li>
              <li>redux</li>
              <li>redux-devtools-extension</li>
              <li>redux-thunk</li>
            </ul>
            and others...
          </p>
          <p>
            I enjoyed creating various components and then reusing them in
            different places of the website. For instance, The 'rating'
            component - the stars that illustrate how people assess a certain
            product - is a component that is used on HomeScreen and on each
            product's page. Unlike HTML, React gives this opportunity to create
            certain elements of a website and reuse them wherever we want; it is
            really convenient and I really love it.
          </p>
        </Col>
        <Col md={6} ms={6} xs={12}>
          <h5 className='about-heading'>Redux</h5>
          <p>
            Redux played an important role in the process of creating the site.
            Using Redux devtools and various tutorials, I was able to create
            reducers and actions that played a key role in manipulating the data
            in the database.
          </p>
          <p>For instance, 'productList' reducer has such properties:</p>
          <p>
            <i>loading</i>, <i>products (list)</i>, <i>pages</i>, and{' '}
            <i>page</i>.
          </p>
          <ul>
            <li>
              loading property is either false or true and the value depends on
              whether the data of products if available to users or not. When
              the page loads the data is fetched from the db, the loading
              changes to false and the loading spinner disappears.
            </li>
            <li>products is the list of products on the page.</li>
            <li>
              pages is the number of pages that show all products in the store.
            </li>
            <li> page is the number of the current page</li>
          </ul>
          <p>
            Redux is very convenient in a way that it provides flexibility and
            better understanding how elements and data interacts with each
            other.{' '}
          </p>
        </Col>
        <Col md={6} ms={6} xs={12}>
          <h5 className='about-heading'>MongoDB</h5>
          <p>
            On the backend of the project, I used MongoDB as the ultimate source
            to store all the neccesary data. The database has 3 collections:
            products, users and orders. By using controllers, models,
            middleware, routes, a requested function is triggered and a specific
            data created, updated or deleted.
          </p>
        </Col>
        <Col md={6} ms={6} xs={12}>
          <h5 className='about-heading'>On the backend: Express and Node</h5>
          <p>
            Express and Node are used to control the flow of data in the
            backend. It controls the server, database and handles the requests
            to the server from the frontend.
          </p>
        </Col>
      </Row>
      <Row></Row>
      <hr></hr>
      <p>
        Most of my time developing this project I spent on creating the
        connection between each click and method that handles the changes of the
        layout of the website and, if neccesary, the data fields in the specific
        collection of MongoDB.
      </p>

      <p>
        Git repository for this website:{' '}
        <a
          href='https://github.com/maxnesjp/mern_website'
          className='about-a-tag'
        >
          <i class='fab fa-github-square fa-2x about-icon'></i> MERN Website -
          maxnesjp
        </a>
      </p>
      <Card className='my-3 p-3 rounded'>
        <Card.Img src='/images/sample-code-screenshot.png' variant='top' />
        <Card.Text as='h5' className='about-heading about-heading-card'>
          Sample Screenshot
        </Card.Text>
      </Card>
      <hr></hr>
      <h4 className='about-heading'>My other projects</h4>
      <p>
        1. Feel free to check out{' '}
        <a className='about-a-tag' href='https://maxnes-blog.herokuapp.com/'>
          <i class='fab fa-python fa-2x about-icon'></i> Blog Website
        </a>{' '}
        that I created using Python Flask
        <p>
          However, at the current moment, Contact Page for the website is turned
          off
        </p>
      </p>
      <p>
        2. First ever created{' '}
        <a
          className='about-a-tag'
          href='https://maxnesjp.github.io/my_website/'
        >
          <i class='fab fa-html5 fa-2x about-icon'></i> HTML5 + CSS website
        </a>{' '}
        (which I am not really proud), but we all started with something simple,
        right?
      </p>

      <hr></hr>

      <h3 className='about-footer-heading'>Maxim Nesterov's social media</h3>
      <Row className='about-row'>
        <Col xs={3}>
          <a href='https://github.com/maxnesjp' className='about-a-tag'>
            <i class='fab fa-github-square fa-3x about-icon'></i>
          </a>
        </Col>
        <Col xs={3}>
          <a
            href='https://www.linkedin.com/in/maxim-nesterov-7b31a9180/'
            className='about-a-tag'
          >
            <i className='fab fa-linkedin fa-3x about-icon'></i>
          </a>
        </Col>
        <Col xs={3}>
          <a href='https://www.facebook.com/NesMaxJP/' className='about-a-tag'>
            <i className='fab fa-facebook-square fa-3x about-icon'></i>
          </a>
        </Col>
        <Col xs={3}>
          <a
            href='https://www.instagram.com/crazyrussian_jp/'
            className='about-a-tag'
          >
            <i className='fab fa-instagram fa-3x about-icon'></i>
          </a>
        </Col>
      </Row>
    </>
  )
}

export default AboutScreen
