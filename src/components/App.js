// create your App component here
import React, {useEffect, useState} from 'react'

function App() {
    const [loading, setLoading] = useState(true);
    const [imageUrl, setImageUrl] = useState(' ')

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
          .then(response => response.json())
          .then(data => {
            setImageUrl(data.message); // Update the image URL state
            setLoading(false); // Update the loading state
          })
          .catch(error => {
            console.error('Error fetching the dog image:', error);
          });
      }, []); // Empty dependency array ensures this effect runs only once
    
      return (
        <div>
            {loading ? (<p>Loading ...</p>) : (<img src={imageUrl} alt="A Random Dog"/>)}
        </div>
      )


}

export default App
