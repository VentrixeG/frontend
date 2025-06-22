import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'


const BookingEventPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()

    const [event, setEvent] = useState({});
    const [success, setSuccess] = useState(false); // State to track successful booking
    const [error, setError] = useState(null); // Errortracker!
    
    const [formData, setFormData] = useState({
      eventId: id,
      firstName: '',
      lastName: '',
      email: '',
      streetName: '',
      postalCode: '',
      city: '',
      ticketQuantity: 1
    })

    useEffect(() => {
      getEvent();
      }, []);

      const getEvent = async () => {
        try {
          const res = await fetch(`https://ec-eventservice01-anathedbb5h6h8an.swedencentral-01.azurewebsites.net/api/events/${id}`)
          if (!res.ok) throw new Error("Failed to fetch event")
      
          const data = await res.json()
          setEvent(data.result)
        } catch (err) {
          console.error(err)
        }
      }

const handleChange = (e) => {
  const { name, value } = e.target
  setFormData(prev => ({ ...prev, [name]: value }))
}


    const handleSubmit = async (e) => {
      e.preventDefault()
      setError(null) // Reset error state on new submission
      setSuccess(false) // Reset success state on new submission?

      try {
        const res = await fetch(`https://bookingservice02-dkc8bwhhc0c7g7gd.swedencentral-01.azurewebsites.net/api/bookings`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })
    
        if (!res.ok) {
          const msg = await res.text() // Get error message from response
          console.error("Booking failed")
          setError ("Booking failed: " + msg)
        } else {
          console.log("Booking successful")
          alert("Booking successful!");
          setTimeout(() => navigate(`/`), 2000) // Redirect after 2 secands. Too slow?
        }
      } catch (err) {
        console.error("Error submitting booking", err)
      }
    }
    

    return (
      <>
      <Header />
      <div className="container">
        <h1 className="title-lg">Book Event – {event.title}</h1>
        <form onSubmit={handleSubmit} className="card" noValidate>
          <div className="form-grid">
            <div>
              <label className="body-sm">First Name </label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div>
              <label className="body-sm">Last Name</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
            <div>
              <label className="body-sm">E-mail</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <label className="body-sm">Street Name</label>
              <input type="text" name="streetName" value={formData.streetName} onChange={handleChange} required />
            </div>
            <div>
              <label className="body-sm">Postal Code</label>
              <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
            </div>
            <div>
              <label className="body-sm">City</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} required />
            </div>
            <div>
              <label className="body-sm">Ticket Quantity</label>
              <input type="number" name="ticketQuantity" min="1" value={formData.ticketQuantity} onChange={handleChange} />
            </div>
          </div>
          <button type="submit" className="btn-md primary" style={{ marginTop: "1rem" }}>
            Book Now
          </button>

          {success && <p style={{ color: "green" }}>Booking successful! Redirecting...</p>}
          {error && <p style={{ color: "red" }}>Error: {error}</p>}

        </form>
      </div>
      <Footer />
    </>
  );
}

export default BookingEventPage