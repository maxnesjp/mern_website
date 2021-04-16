import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SeachBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    // trim - take off white spaces
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline className='search-form-custom'>
      {/* mr-sm-2 : margin right on small screens */}
      <Form.Control
        htmlSize='30'
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
      ></Form.Control>
      <Button
        type='submit'
        variant='outline-warning'
        className='search-form-button-custom'
      >
        Search
      </Button>
    </Form>
  )
}

export default SeachBox
