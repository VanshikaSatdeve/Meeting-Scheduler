import React, { useState } from 'react'
import Navbar from './Navbar'
import Logo from './Logo'
import Formmodel from './Formmodel';
import Aboutus from './Aboutus';


function Home() {

    const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

    return (
        <div>
        <Navbar />
        <div className="container mx-auto mt-8">
          {/* Hero section */}
          <section className="text-center">
            <Logo />
            <h1 className="text-4xl font-bold text-gray-800 mt-4">Schedule Your Meetings Effortlessly</h1>
            <p className="text-lg text-gray-600 mt-2">Simplify your scheduling process with our intuitive meeting scheduler.</p>
            <button onClick={handleOpenModal} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">Schedule a Meeting</button>
          </section>
  
          {/* Features section */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800">Easy Scheduling</h3>
                <p className="text-gray-600 mt-2">Schedule meetings with just a few clicks. No more back-and-forth emails.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800">Calendar Integration</h3>
                <p className="text-gray-600 mt-2">Sync with your calendar to avoid conflicts and double bookings.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800">Email Notifications</h3>
                <p className="text-gray-600 mt-2">Receive automatic email notifications for upcoming meetings.</p>
              </div>
            </div>
          </section>
        </div>
        <Formmodel isOpen={isModalOpen} onClose={handleCloseModal} />

        
      </div>
      
    )
}

export default Home
