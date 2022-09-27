const validation = (values) => {

    let errors={};

    if(!values.fullname){
        errors.fullname="Name is required."
    }
    if(!values.email){
        errors.email="Email is required."
    } else if (/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid"
    }
    if (!values.phone){
        errors.phone="Phone is required"
    }else if(values.phone.length <5){
        errors.phone="phone must be more than 5 character."
    }
  return errors;
};

export default validation;