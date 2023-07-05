import "../form-input/form-input.scss"
const FormInput = ({label, ...props}) =>{
    return(
   <div className="group">
        <input {...props}></input>

    <label className={`${props.value.length && 'shrink '} form-input-label`}>{label}</label>
   </div>
  
    )
  }

  export default FormInput