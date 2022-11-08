import { Link } from 'react-router-dom'

const PreviewDate = ({date}) => {

  const { day, month, province, country, club, urlTickets, _id } = date
  return (
    <div className=' flex justify-between border-b p-5'>
      <div className=" flex justify-between">
        <p className=" text-white">{day}<span> {month}</span><span> {club}</span></p>
      </div>
      <div>
        <Link
          to={`${_id}`}
        >
        ver date
        </Link>
      </div>
    </div>
  )
}

export default PreviewDate