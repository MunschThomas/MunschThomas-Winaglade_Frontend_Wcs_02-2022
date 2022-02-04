import './styles/Contact.css'

const Form = () => {
  return (
    <div className='holderFormContact'>
      <div className='formContact1'>
        <input typ='name' placeholder='Nom' className='formName'></input>
        <input
          typ='mail'
          placeholder='Adresse Mail'
          className='formMail'
        ></input>
      </div>
      <div className='formContact2'>
        <input
          type='textarea'
          placeholder="C'est une bonne situation ça Scribe ?"
          className='inputForm'
        ></input>
        <button className='submitButton'>Envoyer</button>
      </div>
    </div>
  )
}

export default Form
