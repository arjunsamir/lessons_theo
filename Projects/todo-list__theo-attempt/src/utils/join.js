export default function join(...classes) {


  return classes.map(c => {

    // handle undefined or empty string
    if (!c) return null;

    // Check if its a string
    if (typeof c === 'string') return c;

    // Check if its an array
    else if (Array.isArray(c)) {

      // Destructure the array to get the classes
      const [condition, className, fallbackClass] = c;

      // If condition is true then return the className
      if (condition) return className;

      // Else return the fallbackClass if it exists
      else return fallbackClass;

    }

    // Handle error
    else return null
  }).filter(className => className).join(" ")

}

// join("adkfj", [false, "valid"], [true, "valid", "invalid"])


// // Why we need this
// let enabled = true;

// "button" // Button is enabled
// "button disabled" // Button is disabled
// `button${enabled ? '' : ' disabled'}` // Button is enabled

// join("button", [true, "enabled", "disabled"], [false, "disabled"])