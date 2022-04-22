import React from 'react'



export default function Footer() {
    const CURRENT_YEAR = new Date().getFullYear();
  return (
    <div className='footer'>
    <footer>
        <p>Copyright &copy; {CURRENT_YEAR} </p>
    </footer>
    </div>
  )
}
