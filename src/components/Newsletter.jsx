import  { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Newsletter = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_1j4pfp8', 'template_ukhdocp', form.current, 'kG52zHNRR52Ueiugb')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
  }

  return (
    <div className='newsletter'>
      <h2>JOIN MY NEWSLETTER</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="field">
          <input placeholder='YOUR EMAIL ADDRES' type="text" name="email_id" id="email_id"/>
        </div>

        <input type="submit" id="button" value="SUBSCRIBE"/>
      </form>
    </div>
  )
}

export default Newsletter