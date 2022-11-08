import useDates from '../hooks/useDates'
import { useParams} from 'react-router-dom'
import { useEffect } from 'react'
import FormDates from './FormDates'
const EditDate = () => {


  const params = useParams()
  const { getDate, date, deleteDate } = useDates()

  const { club } = date

  useEffect(() => {
    getDate(params.id)
  }, [])

  const handleClick = () => {
    if(confirm('¿Deseas eliminar esta fecha?')){
      deleteDate(params.id)
    }
  }

  return (
    <div>
   
      <div className='flex justify-between'>
        <h1>Editar: {club}</h1>
        <div>
          <button onClick={handleClick} className=' bg-neutral-800 p-2'>Delete {club}</button>
        </div>
      </div>
      

      <div className='mt-10 flex justify-center'>
        <FormDates />
      </div>
    </div>
  )
}

export default EditDate