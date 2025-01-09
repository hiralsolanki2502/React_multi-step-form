const UserForm = (props) => {

const { handleSubmit,
    index,
    handleBack,
    forms,
    formData,
    handelInputChange
} = props;

return (

<form className='container' onSubmit={handleSubmit}>
{
    index > 0 && 
    <a href='/' 
    onClick={handleBack}>
    Back
    </a>
}
<label>{forms[index].label}</label>
<input 
    required
    value={formData[forms[index].id]}
    onChange={handelInputChange}
        id={forms[index].id}
        type={forms[index].inputType}
        placeholder={forms[index].placeholder}>
        </input>
<button>{forms[index].buttonName}</button>
</form>
)
}

export default UserForm;