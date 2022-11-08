
const Date = ({ date }) => {

  const { day, month, province, country, club, urlTickets } = date
  return (
    <div className='container-date'>
      <div className='info-date'>
        <time>{month} {day}</time>
        <strong>{club}, {country}</strong>
        <p>{province}</p>
      </div>
      <div className='btn-tickets'>
        <a target="_blank" href={`${urlTickets}`} className="custom-btn btn-7" rel="noreferrer"><span>Buy Tickets</span></a>
      </div>
    </div>
  )
}

export default Date