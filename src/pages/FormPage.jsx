import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import PasswordInput from "../components/PasswordInput";
import CountryCitySelector from "../components/CountryCitySelector";
import "./FormPage.css";

const FormPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phoneCode: "+91",
    phoneNumber: "",
    country: "",
    city: "",
    panNo: "",
    aadharNo: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState({});

  const requiredFields = [
    "firstName",
    "lastName",
    "username",
    "email",
    "password",
    "phoneNumber",
    "country",
    "city",
    "panNo",
    "aadharNo",
  ];

  useEffect(() => {
    const newErrors = {};
    
    requiredFields.forEach((field) => {
      if (!formData[field] && touched[field]) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (formData.password && formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (formData.phoneNumber && !/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }

    if (formData.panNo && formData.panNo.length !== 10) {
      newErrors.panNo = "PAN must be 10 characters";
    }

    if (formData.aadharNo && !/^\d{12}$/.test(formData.aadharNo)) {
      newErrors.aadharNo = "Aadhar must be 12 digits";
    }

    setErrors(newErrors);
  }, [formData, touched]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const processedValue = name === "panNo" ? value.toUpperCase() : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: processedValue
    }));

    if (!touched[name]) {
      setTouched(prev => ({
        ...prev,
        [name]: true
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    if (!touched[name]) {
      setTouched(prev => ({
        ...prev,
        [name]: true
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const allTouched = {};
    requiredFields.forEach(field => {
      allTouched[field] = true;
    });
    setTouched(allTouched);

    const isValid = requiredFields.every(field => formData[field]) && 
                    Object.keys(errors).length === 0;

    if (isValid) {
      localStorage.setItem("formData", JSON.stringify(formData));
      navigate("/submission");
    }
    
    setIsSubmitting(false);
  };

  const isFormValid = () => {
    return requiredFields.every(field => formData[field]) && 
           Object.keys(errors).length === 0;
  };

 return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden p-6 sm:p-8 border-4 border-indigo-100">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Registration Form
          </h1>
          <p className="mt-2 text-sm text-indigo-700">
            Please filll in all required fields marked with *
          </p>
          <p className="mt-2 text-sm">
            Link:{" "}
            <a
              href="https://github.com/Priya-bot12/form-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              https://github.com/Priya-bot12/form-app
            </a>
          </p>

        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information Section */}
          <div className="form-section bg-blue-50 p-6 rounded-xl border-l-4 border-blue-400">
            <h2 className="form-section-title text-blue-800">Personal Information</h2>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-4">
              <FormInput
                label="First Name *"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.firstName}
                colorful
              />
              <FormInput
                label="Last Name *"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.lastName}
                colorful
              />
              <FormInput
                label="Username *"
                name="username"
                value={formData.username}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.username}
                colorful
              />
              <FormInput
                label="Email *"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
                colorful
              />
              <PasswordInput
                label="Password *"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password}
                colorful
              />
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="form-section bg-green-50 p-6 rounded-xl border-l-4 border-green-400">
            <h2 className="form-section-title text-green-800">Contact Information</h2>
            
            <div className="space-y-4 mt-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number *
                </label>
                <div className="phone-input-container">
                  <select
                    name="phoneCode"
                    value={formData.phoneCode}
                    onChange={handleChange}
                    className="phone-code-select bg-indigo-100 border-indigo-300 text-indigo-800"
                  >
                    <option value="+91">+91 (IN)</option>
                    <option value="+1">+1 (US)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+61">+61 (AU)</option>
                    <option value="+81">+81 (JP)</option>
                  </select>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter 10-digit phone number"
                    maxLength="10"
                    className={`phone-number-input bg-indigo-50 ${
                      errors.phoneNumber 
                        ? "border-rose-500 focus:ring-rose-200" 
                        : "border-indigo-300 focus:ring-indigo-200"
                    }`}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="error-message text-rose-600">{errors.phoneNumber}</p>
                )}
              </div>

              <CountryCitySelector
                country={formData.country}
                city={formData.city}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                colorful
              />
            </div>
          </div>

          {/* Identification Section */}
          <div className="form-section bg-purple-50 p-6 rounded-xl border-l-4 border-purple-400">
            <h2 className="form-section-title text-purple-800">Identification Details</h2>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-4">
              <FormInput
                label="PAN Number *"
                name="panNo"
                value={formData.panNo}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.panNo}
                placeholder="10 characters"
                maxLength="10"
                colorful
              />
              <FormInput
                label="Aadhar Number *"
                name="aadharNo"
                value={formData.aadharNo}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.aadharNo}
                placeholder="12 digits"
                maxLength="12"
                colorful
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={!isFormValid() || isSubmitting}
              className={`w-full py-3 px-6 rounded-xl text-lg font-bold transition-all duration-300 ${
                isFormValid()
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "✨ Submit Registration ✨"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
