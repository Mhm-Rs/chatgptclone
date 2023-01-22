import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import './Imgenerator.css';
import { Link } from 'react-router-dom';


function Imgenerator() {
  // texte que l'utilisateur entre pour spécifier son image
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  //pour configurer l'API avec notre clé
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPEN_AI_Key,
  });

  const openai = new OpenAIApi(configuration);

  //générer une image par AI
  const generateImage = async () => {
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });

    //garder le lien du résultat 
    setResult(response.data.data[0].url);
  };


  return (
    <div className='app-main'>
      {/* récupérer ce que l'utilisateur entre et le ranger dans prompt */}
      <input 
        className='app-input' 
        onChange={(e) => setPrompt(e.target.value)}
        placeholder='Type something to generate an image !' />
      <h3>Generate an Image using OpenAI API</h3>
      <button onClick={generateImage}>Generate an Image !</button>

      {/* Afficher une image si on appuyé sur le bouton de génération */}
      {result.length > 0 ? <img className='result-image' src={result} alt="result"/> : <></>}

      {/* Lien vers la page principale */}
      <Link to="/"><button className="toGenerator">Go back to main page</button></Link>
    </div>
  )
}

export default Imgenerator
