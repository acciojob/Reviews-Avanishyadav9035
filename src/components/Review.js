import React, { useState } from 'react'
import '../styles/App.css'

const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text:
      'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text:
      'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text:
      'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const Review = () => {
  const[index, setIndex] = useState(0)
  const { id, name, job, image, text} = reviews[index]

  const checkIndex =(num) =>{
    if(num<0) return reviews.length-1
    if(num>=reviews.length) return 0
    return num;
  }

  function handlePrevious(){
    setIndex((prevIndex)=>checkIndex(prevIndex-1))
  }
  function handleNext(){
    setIndex((prevIndex)=>checkIndex(prevIndex+1))
  }

  function handleRandom(){
    let randomIndex = Math.floor(Math.random() * reviews.length)
    while(randomIndex == index){
        randomIndex = Math.floor(Math.random() * reviews.length)
    }
    setIndex(randomIndex)
  }
  return (
      <article className="review">
         <img
            src={image}
            class="person-img"
            alt="name"
         />
         <h4 class="author" id={`author-${id}`}>{name}</h4>
         <p class="job">{job}</p>
         <p class="info">{text}</p>
        
         <div className="button-container">
          <button  
              onClick={handlePrevious}
               className="prev-btn">previous</button>
          <button 
          onClick={handleNext}
           className="next-btn">next</button>
         </div>
         <button onClick={handleRandom}
          className="random-btn">surprise me</button>
      </article>
  )
}

export default Review
