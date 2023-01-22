import { useState } from "react";
import { arrayItems } from "../AIOptions";
import "./Chat.css";
import OptionSelection from "../components/OptionSelection";
import Translation from "../components/Translation";
import { Configuration, OpenAIApi } from 'openai'
import { Link } from "react-router-dom";


function Chat() {
    //pour configurer l'API avec notre clé
    const configuration = new Configuration({
        apiKey: import.meta.env.VITE_OPEN_AI_Key,
    });

    const openai = new OpenAIApi(configuration);


    //option choisie par l'utilisateur
    const [option, setOption] = useState({});

    //nom de l'option choisie par l'utilisateur
    const [choosed,setChoosed] = useState("");

    //ce que l'utilisateur saisit après avoir choisi une option
    const [input, setInput] = useState("");

    //résultat de l'action
    const [result,setResult] = useState("");

    //choisir une option
    const selectOption = (option,choosed) => {
        setOption(option)
        setChoosed(choosed)
        console.log(choosed)
    }

    //effectuer une action avec les données fournies par l'utilisateur
    const proceed = async () => {
        //rajouter input à l'objet option et créer un objet
        let action = { ...option, prompt: input }

        //effecuter l'action avec l'API et conserver le résultat
        const response = await openai.createCompletion(action);

        setResult(response.data.choices[0].text)

    }

    return (
        // Afficher l'écran de choix d'une option , et si on en choisit une afficher l'écran d'entrée
        <div className="Chat">
            {Object.values(option).length === 0 ? (<OptionSelection
                arrayItems={arrayItems}
                selectOption={selectOption}
            />) : (<Translation proceed={proceed} setInput={setInput} result={result} setResult={setResult} choosed={choosed} setOption={setOption}/>)}

  
      {/* Lien vers la page de génération d'image */}

            <Link to="/imgenerator"><button className="toGenerator">Try our Image generator !</button></Link>
        </div>
    )
}

export default Chat;