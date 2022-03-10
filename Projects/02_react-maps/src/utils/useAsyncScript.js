import { useState, useEffect } from "react";

const useAsyncScript = (url, id) => {

  const [loaded, setLoaded] = useState(false)

  // Use Effect Hook with no dependencies to load the script only once
  useEffect(() => {

    if (document.querySelector(`#${id}`)) {
      setLoaded(true)
      return
    }

    // Get the first script tag on the page page
    const firstScriptTag = document.querySelector("script")

    // Create a new script tag
    const newScript = document.createElement("script")

    // Set the script tag's source to the url
    newScript.src = url

    // Set the script tag's id to the id
    newScript.id = id

    // Insert the script tag before the first script tag
    newScript.async = true
    
    // Add event listener so we know when the script has loaded
    newScript.addEventListener("load", () => setLoaded(true))

    // Insert the new script tag into the DOM
    firstScriptTag.parentNode.insertBefore(newScript, firstScriptTag)

  }, [])

  return loaded

}

export default useAsyncScript;