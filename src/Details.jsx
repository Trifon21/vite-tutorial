import {memo} from "react";

function InitialDetails({details, setDetails, handleLoading})
{
    return (
        <>
            <h1>{details.title}</h1>
            <div>{details.description}</div>
            <button onClick={() => setDetails(prev => {
                return {
                    ...prev,
                    title: prev.title + '...'
                }
            })}>{details.buttonText}</button>

            <br />
            <button onClick={handleLoading}>handleLoading</button>
        </>
    )
}

export const Details = memo(InitialDetails)