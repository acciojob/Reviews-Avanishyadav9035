<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

import React from 'react'
import Review from './Review'

const App = () => {
  return (
   <main>
    <section class="container">
          <h1 id='review-heading'>Our Reviews</h1>
          <Review/>
    </section>
   </main>
  )
}

export default App
