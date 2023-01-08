import React from 'react'

const About = () => {
  return (
    <div
      name='about'
      className='w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className='text-xl mt-20'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quidem perspiciatis, dignissimos, animi eaque at placeat blanditiis eum exercitationem eveniet aliquam sapiente, odio error esse ipsam praesentium in corporis obcaecati dolorum. Quas consequuntur dolore dignissimos similique, necessitatibus odit enim doloribus magnam, in veniam minus, doloremque optio dicta fugit magni. At.
        </p>

        <br />

        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nam culpa, cumque similique ratione minus veniam repudiandae. Quibusdam cupiditate, aut molestias facilis doloremque consequatur itaque aspernatur asperiores iure ad porro laboriosam quaerat dolore fugit reiciendis odio ut placeat! Dignissimos hic cupiditate rerum fugiat culpa impedit iste vel tempore error laborum.
        </p>

      </div>
    </div>
  )
}

export default About