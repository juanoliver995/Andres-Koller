import { useState, useEffect } from 'react'
import useDates from '../hooks/useDates'
import { useParams, useNavigate} from 'react-router-dom'

const FormDates = () => {
  
  const [day, setDay] = useState('')
  const [id, setId] = useState(null)
  const [month, setMonth] = useState('')
  const [province, setProvince] = useState('')
  const [country, setCountry] = useState('')
  const [club, setClub] = useState('')
  const [urlTickets, setUrlTickets] = useState('')
  const [alert, setAlert] = useState(false)
  const [alertSucces, setAlertSucces] = useState(false)
  const params = useParams()
  const { submitDate, date } = useDates()
  const navigate = useNavigate()

  useEffect(() => {
    if(params.id){
      setId(date._id)
      setDay(date.day)
      setMonth(date.month)
      setProvince(date.province)
      setCountry(date.country)
      setClub(date.club)
      setUrlTickets(date.urlTickets)
    }
  },[params])

  const handleSubmit = (e) => {
    e.preventDefault()

    if([day, month, province, country, club, urlTickets].includes('')){
      setAlert(true)
      return
    }
    submitDate({ id, day, month, province, country, club, urlTickets})
    setId(null)
    setDay('')
    setMonth('')
    setProvince('')
    setCountry('')
    setClub('')
    setUrlTickets('')
    setAlert('')
    setAlertSucces(true)
    setTimeout(() => {
      setAlertSucces(false)
      navigate('/admin')
    }, 2000)
   
   
  }


  return (

    <form onSubmit={handleSubmit} className='bg-neutral-800 py-10 px-5 md:w-1/2 rounded-sm form-date'>
      <div>
        <label className='uppercase'
          htmlFor='day'
        >day</label>
        <input
          id='day'
          type="text"
          className='w-full mt-2 mb-2 border-2'
          placeholder='day'
          value={day}
          onChange={({target})=> setDay(target.value)}
        />
      </div>
      <div>
        <label className='uppercase'
          htmlFor='month'
        >Month</label>
        <select
          id='month'
          className='w-full mt-2 mb-2 border-2'
          value={month}
          onChange={({ target }) => setMonth(target.value)}
        >
          <option value="">Select Month</option>
          <option value="Jan">Jan</option>
          <option value="Feb">Feb</option>
          <option value="Mar">Mar</option>
          <option value="Apr">Apr</option>
          <option value="May">May</option>
          <option value="Jun">Jun</option>
          <option value="Jul">Jul</option>
          <option value="Aug">Aug</option>
          <option value="Oct">Oct</option>
          <option value="Nov">Nov</option>
          <option value="Dec">Dec</option>
        </select>
      </div>
      <div>
        <label className='uppercase'
          htmlFor='province'
        >province</label>
        <input
          id='province'
          type="text"
          className='w-full mt-2 mb-2 border-2'
          placeholder='province'
          value={province}
          onChange={({ target }) => setProvince(target.value)}
        />
      </div>
      <div>
        <label className='uppercase'
          htmlFor='country'
        >country</label>
        <input
          id='country'
          type="text"
          className='w-full mt-2 mb-2 border-2'
          placeholder='country'
          value={country}
          onChange={({ target }) => setCountry(target.value)}
        />
      </div>
      <div>
        <label className='uppercase'
          htmlFor='club'
        >club</label>
        <input
          id='club'
          type="text"
          className='w-full mt-2 mb-2 border-2'
          placeholder='club'
          value={club}
          onChange={({ target }) => setClub(target.value)}
        />
      </div>
      <div>
        <label className='uppercase'
          htmlFor='urlTickets'
        >urlTickets</label>
        <input
          id='urlTickets'
          type="text"
          className='w-full mt-2 mb-2 border-2'
          placeholder='urlTickets'
          value={urlTickets}
          onChange={({ target }) => setUrlTickets(target.value)}
        />
      </div>
      {
        alert
          ? <div className='error-auth'>
            <p>Todos los campos son obligatorios</p>
          </div>
          : ''
      }
      {
        alertSucces
          ? <div className='succes-auth'>
            <p>{params.id ? 'Fecha editada correctamente': 'Fecha creada correctamente'}</p>
          </div>
          : ''
      }
      <input
        type="submit"
        value={params.id ? 'Edit date' : 'Create new Date'}
        className='w-full p-1 bg-slate-50 mt-2 cursor-pointer'
      />
    </form>

  )
}

export default FormDates