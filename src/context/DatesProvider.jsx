import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DatesContext = createContext()

const DatesProvider = ({children}) => {

  const [dates, setDates] = useState([])
  const [date, setDate] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    const getProyects = () => {
      fetch('https://andres-back-production.up.railway.app/api/dates')
        .then(res => {
          if (!res.ok) throw new Error('Response is NOT ok')
          return res.json()
        }).then(res => {
          setDates(res)
          console.log(dates)
        })
        .catch(err => {
          console.log(err)
        })
    }
    getProyects()
  },[])

  const getDate = id => {
    fetch(`https://andres-back-production.up.railway.app/api/dates/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Response is NOT ok')
        return res.json()
      })
      .then(res => {
        setDate(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const submitDate = ({ id, day, month, province, country, club, urlTickets }) => {

    if(id){
      updateDate({ id, day, month, province, country, club, urlTickets })
    }else{
      createNewDate({ day, month, province, country, club, urlTickets })
    }
    
  }

  const createNewDate = ({ day, month, province, country, club, urlTickets }) => {
    return fetch('https://andres-back-production.up.railway.app/api/dates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ day, month, province, country, club, urlTickets })
    })
      .then(res => {
        if (!res.ok) throw new Error('Response is NOT ok')
        return res.json()
      }).then(res => {
        setDates([...dates, res])
        return res
      })
      .catch(err => {
        console.log(err)
      })
  }

  const updateDate = ({ id, day, month, province, country, club, urlTickets }) => {
    return fetch(`https://andres-back-production.up.railway.app/api/dates/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id, day, month, province, country, club, urlTickets })
    })
      .then(res => {
        if (!res.ok) throw new Error('Response is NOT ok')
        return res.json()
      }).then(res => {
        const updateProyects = dates.map(dateState => dateState._id === res._id ? res : dateState)
        setDates(updateProyects)
        return res
      })
      .catch(err => {
        console.log(err)
      })
  }

  const deleteDate = (id) => {
    return fetch(`https://andres-back-production.up.railway.app/api/dates/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok) throw new Error('Response is NOT ok')
        return res.json()
      }).then(res => {
        const updateProyects = dates.filter(dateState => dateState._id !== id)
        setDates(updateProyects)
        setTimeout(() => {
          navigate('/admin')
        }, 2000)
        return res
      })
      .catch(err => {
        console.log(err)
      })
  }

  return(
    <DatesContext.Provider
      value={{
        dates,
        submitDate,
        getDate,
        date,
        deleteDate
      }}
    >
      {children}
    </DatesContext.Provider>
  )
}

export {
  DatesProvider
 
}

export default DatesContext