import { useState } from "react";

const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (onSuccess, onError) => {
    return (evt) => {
      evt.preventDefault();
      // Kiểm tra validation
      const isValid = evt.target.checkValidity();
      if (isValid) {
        onSuccess();
      } else {
        onError();
      }
    };
  };

  return { values, handleChange, handleSubmit };
};

export default useForm;
