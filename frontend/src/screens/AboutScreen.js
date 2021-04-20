import React from 'react'
import Meta from '../components/Meta'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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
      <p>MongoDB, Express, React, Node</p>
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
        <Card.Text as='h3' className='about-heading'>
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
