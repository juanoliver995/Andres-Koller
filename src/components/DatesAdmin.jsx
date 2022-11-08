import useDates from '../hooks/useDates'
import PreviewDate from './PreviewDate'
const DatesAdmin = () => {

  const { dates } = useDates()
  
  return (
    <div>
      <h1 className=" text-2xl">Dates</h1>
      <div className=' bg-neutral-800 mt-10 rounded-lg'>
        {
          dates.length ? 
            dates.map((date)=>(
              <PreviewDate date={date} key={date._id}/>
            ))
            : <p className='text-center p-5'>no dates yet</p>
        }
      </div>
    </div>
  )
}

export default DatesAdmin