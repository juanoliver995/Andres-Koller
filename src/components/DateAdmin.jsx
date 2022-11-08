import { useParams, Link } from 'react-router-dom'
import useDates from '../hooks/useDates'
import { useEffect } from 'react'
const DateAdmin = () => {

  const params = useParams()
  const { getDate, date } = useDates()

  const { club } = date

  useEffect(()=>{
    getDate(params.id)
  },[])


  return (
    <div className='flex justify-between'>
      <h1>{club}</h1>
      <div>
        <Link
          className=' bg-neutral-800 p-2'
          to={`/admin/editdate/${params.id}`}
        >Edit Date</Link>
      </div>
    </div>
  )
}

export default DateAdmin