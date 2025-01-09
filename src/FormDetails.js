

const FormDetails = (props) => {
    const { formData } = props;

    return (
        <div>
        <h1>Success!!!</h1>
        <hr></hr>
        <span>Name : {formData.name}</span>
        <br></br>
        <span>Email : {formData.email}</span>
        <br></br>
        <span>dob : {formData.dob}</span>
        <br></br>
        <span>Password : {formData.password}</span>
        <br></br>
    </div>
    )
    }

export default FormDetails;