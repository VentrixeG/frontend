
import {Route, Routes} from 'react-router-dom'

import './App.css'
import EventPage from './assets/pages/EventPage.jsx'
import EventDetailsPage from './assets/pages/EventDetailsPage.jsx'
import BookingEvent from './assets/pages/BookingEventPage.jsx'
import BookingEventPage from './assets/pages/BookingEventPage.jsx'




function App() {
  

  return (
    <>
    <Routes>
<Route path="/" element={<EventPage />} />
<Route path="/events/:id" element={<EventDetailsPage />} />
<Route path="/events/booking/:id" element={<BookingEventPage />} />
<Route path="/events/booking" element={<BookingEvent />} />
    </Routes>
    </>
   
  )
}

export default App
