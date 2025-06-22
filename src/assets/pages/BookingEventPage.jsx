import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const BookingEventPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()

    const [event, setEvent] = useState({});
    
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
/*
const postBooking = async () => {
  try {
    const res = await fetch(`https://bookingservice-euchhwdpc9evgcdp.swedencentral-01.azurewebsites.net/api/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })

    if (!res.ok) {
      console.error("Booking failed")
    } else {
      console.log("Booking successful")
      navigate(`/events/${id}`)
    }
  } catch (err) {
    console.error("Error submitting booking", err)
  }
} */
const handleChange = (e) => {
  const { name, value } = e.target
  setFormData(prev => ({ ...prev, [name]: value }))
}


    const handleSubmit = async (e) => {
      e.preventDefault()

      try {
        const res = await fetch(`https://bookingservice02-dkc8bwhhc0c7g7gd.swedencentral-01.azurewebsites.net/api/bookings`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })
    
        if (!res.ok) {
          console.error("Booking failed")
        } else {
          console.log("Booking successful")
          navigate(`/`)
        }
      } catch (err) {
        console.error("Error submitting booking", err)
      }
    }
    

    return (
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
        </form>
      </div>
    );
    

//   return (
// <div>
//   <h1>Book Event - {event.title}</h1>
//   <form onSubmit={handleSubmit} noValidate>
//     <div>
//       <label>First Name</label>
//       <input
//         type="text"
//         name="firstName"
//         value={formData.firstName}
//         onChange={handleChange}
//         required
//       />
//     </div>
//     <div>
//       <label>Last Name</label>
//       <input
//         type="text"
//         name="lastName"
//         value={formData.lastName}
//         onChange={handleChange}
//         required
//       />
//     </div>
//     <div>
//       <label>E-mail</label>
//       <input
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//       />
//     </div>
//     <div>
//       <label>Street Name</label>
//       <input
//         type="text"
//         name="streetName"
//         value={formData.streetName}
//         onChange={handleChange}
//         required
//       />
//     </div>
//     <div>
//       <label>Postal Code</label>
//       <input
//         type="text"
//         name="postalCode"
//         value={formData.postalCode}
//         onChange={handleChange}
//         required
//       />
//     </div>
//     <div>
//       <label>City</label>
//       <input
//         type="text"
//         name="city"
//         value={formData.city}
//         onChange={handleChange}
//         required
//       />
//     </div>
//     <button type="submit">Book Now</button>
//   </form>
// </div>
//   );
}

export default BookingEventPage