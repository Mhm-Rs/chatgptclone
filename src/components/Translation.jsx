import React from 'react'
import { init } from 'ityped'
import { useEffect } from 'react';
import { useRef } from 'react';

export default function Translation(props) {

    
    // afficher le texte à l'aide de ityped
    const textRef = useRef();
    useEffect(() => {
        if (props.result.length > 0) {
            init(textRef.current, {
                showCursor: false,
                disableBackTyping: true,
                loop:false,
                strings: [props.result]
            })
        }
    })

    // supprimer le contenu de option pour revenir au menu principal
    const reset = (props) => {
        props.setOption({})
        props.setResult("");
    }

    return (
        <div>
            <h1>{props.choosed}</h1>
            <textarea
                className='text-area'
                cols={55}
                rows={10}
                onChange={(e) => props.setInput(e.target.value)}>
            </textarea>
            <button className='action-btn' onClick={props.proceed}>Proceed</button>

            {props.result.length > 0 ? <h3 className='result-text' ref={textRef}></h3> : ""}

            {/* revenir au menu principal */}
            <div className='goback' onClick={()=>reset(props)}><p><i className="fa-solid fa-arrow-left-long"></i> Go back</p>
            </div>
        </div>
    )
}
