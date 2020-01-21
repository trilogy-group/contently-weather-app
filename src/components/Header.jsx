import React from 'react'

const Header = ({handleSubmit, updateCity}) => {
  function handleChange(e){
    updateCity(e.target.value)
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
       <input type='text' onChange={handleChange} />
       <button type='submit'> Submit </button>
      </form>
    </section>
  )
}

export default Header;
