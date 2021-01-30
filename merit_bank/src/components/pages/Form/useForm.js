import { useState, useEffect} from 'react';

// Use Form 

const useForm = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });

    const [errors, setErrors] = useState({});

    //e = event

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
            // above replaces this [e.target.name]: e.target.value
        });
    };

    return { handleChange };
};

export default useForm;