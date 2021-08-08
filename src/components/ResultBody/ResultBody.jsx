import React from 'react'
import "./resultBody.css"

function ResultBody({ wordMeanings, word, category, lightMode }) {

    return (
        <div className="wordMeanings">
            {
                (category === "en" && word && wordMeanings[0]) && (
                    <audio src={wordMeanings[0].phonetics[0] && wordMeanings[0].phonetics[0].audio} controls className="audio">
                        your browser does not support the audio format!!
                    </audio>
                )
            }



            {word === "" ? (
                <span className="subTitle" style={{color: lightMode ? "black" : "white"}}>Start by typing a word into the searchBox</span>
            ) : (
                wordMeanings.map((options) => options.meanings.map((item) => item.definitions.map((unit) => (
                    <div className="single" style={{backgroundColor: lightMode ? "black" : "white", color: lightMode ? "white" : "black"}}> 
                        <span>
                            <span style={{color: "blue", fontWeight: "700"}}>Definition : </span>
                            <b> {unit.definition} </b>
                        </span>
                       
                        {
                            unit.example && (
                                <>
                                <hr style={{ backgroundColor: "black", width: "100%" }} />
                                <span>
                                    <b style={{color: "green"}}>Example: </b>
                                    {unit.example}
                                </span>
                                </>
                            )
                        }

                        {
                            unit.synonyms && (
                                <>
                                <hr style={{ backgroundColor: "black", width: "100%" }} />
                                {unit.synonyms.map((s) => (
                                    <span><b>Synonyms: </b> {s}</span>
                                ))}
                                </>
                            )
                        }
                    </div>
                ))))
            )}
        </div>
    )
}

export default ResultBody

