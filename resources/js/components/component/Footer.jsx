import React from 'react'

const Footer = () => {
  return (
      <footer className="footer mt-auto py-3 bg-gradient bg-success bg-opacity-50">
          <div className="container">
              <span className="text-primary">Copyright &copy; <strong>{(new Date().getFullYear())}</strong></span>
          </div>
      </footer>

  )
}

export default Footer