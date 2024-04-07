import React from 'react'

function ContactUs() {
    return (
        <div>
            <div id="contact" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Email</h3>
            <p className="text-lg text-gray-600">
              Email: contact@example.com
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Phone</h3>
            <p className="text-lg text-gray-600">
              Phone: +1 (123) 456-7890
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Address</h3>
          <p className="text-lg text-gray-600">
            1234 Main Street, City, Country
          </p>
        </div>
      </div>
    </div>
        </div>
    )
}

export default ContactUs
