import '../index.css'
const countryCityMap = {
  "": ["Select a country first"],
  "India": ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad"],
  "USA": ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego"],
  "UK": ["London", "Manchester", "Birmingham", "Liverpool", "Glasgow", "Bristol", "Leeds", "Sheffield"],
  "Canada": ["Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton", "Ottawa", "Winnipeg"],
  "Australia": ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Canberra"],
  "Germany": ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf"],
  "France": ["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg"],
  "Japan": ["Tokyo", "Yokohama", "Osaka", "Nagoya", "Sapporo", "Fukuoka", "Kobe"],
  "Brazil": ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Fortaleza", "Belo Horizonte"],
  "China": ["Shanghai", "Beijing", "Chongqing", "Tianjin", "Guangzhou", "Shenzhen", "Chengdu"],
  "Italy": ["Rome", "Milan", "Naples", "Turin", "Palermo", "Genoa", "Bologna"],
  "Spain": ["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza", "Malaga", "Murcia"],
};

const CountryCitySelector = ({ country, city, onChange, errors }) => {
  const cities = countryCityMap[country] || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      {/* Country Selector */}
      <div className="space-y-2">
        <label className="block text-sm font-medium">Country</label>
        <select
          name="country"
          value={country}
          onChange={onChange}
          className={`block w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 ${
            errors.country 
              ? "border-red-500 focus:ring-red-200 focus:border-red-500" 
              : "border-gray-300 focus:ring-blue-200 focus:border-blue-500"
          }`}
        >
          <option value="">Select Country</option>
          {Object.keys(countryCityMap)
            .filter(key => key !== "")
            .map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
        </select>
        {errors.country && (
          <span className="text-sm text-red-600">{errors.country}</span>
        )}
      </div>

      {/* City Selector */}
      <div className="space-y-2">
        <label className="block text-sm font-medium">City</label>
        <select
          name="city"
          value={city}
          onChange={onChange}
          disabled={!country}
          className={`block w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 ${
            errors.city 
              ? "border-red-500 focus:ring-red-200 focus:border-red-500" 
              : "border-gray-300 focus:ring-blue-200 focus:border-blue-500"
          } ${
            !country ? " cursor-not-allowed" : "bg-white"
          }`}
        >
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        {errors.city && (
          <span className="text-sm text-red-600">{errors.city}</span>
        )}
      </div>
    </div>
  );
};

export default CountryCitySelector;