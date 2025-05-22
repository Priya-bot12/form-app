import { useNavigate } from "react-router-dom";

const SubmissionPage = () => {
  const navigate = useNavigate();
  const formData = JSON.parse(localStorage.getItem("formData"));

  if (!formData) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
          Registration Successful!
        </h1>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Your Details:</h2>
          <p><strong>First Name:</strong> {formData.firstName}</p>
          <p><strong>Last Name:</strong> {formData.lastName}</p>
          <p><strong>Username:</strong> {formData.username}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone:</strong> {formData.phoneCode} {formData.phoneNumber}</p>
          <p><strong>Country:</strong> {formData.country}</p>
          <p><strong>City:</strong> {formData.city}</p>
          <p><strong>PAN Number:</strong> {formData.panNo}</p>
          <p><strong>Aadhar Number:</strong> {formData.aadharNo}</p>
        </div>
        <button 
          onClick={() => navigate("/")} 
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Back to Form
        </button>
      </div>
    </div>
  );
};

export default SubmissionPage;