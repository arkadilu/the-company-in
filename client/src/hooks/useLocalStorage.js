import React from "react";

const keyName = "listOfAddedDomains";

const useLocalStorage = () => {
  const [storedList, setStoredList] = React.useState([])

  React.useEffect(() => {
    try {
      const value = window.localStorage.getItem(keyName);

      if (value) {
        setStoredList(JSON.parse(value));
      } else {
        window.localStorage.setItem(keyName, JSON.stringify([]));
      }
    } catch (err) {
      console.error(err)
    }
  }, [setStoredList]);

  const addNewDomain = newValue => {
    try {
      let arrStr = window.localStorage.getItem(keyName)
      console.log({ arrStr })
      let arr = JSON.parse(arrStr)
      console.log({ arr })
      arr.push(newValue)
      console.log({ arr })

      window.localStorage.setItem(keyName, JSON.stringify(arr));
      setStoredList(arr);
    } catch (err) {
      console.error(err)
    }
  };

  return [storedList, addNewDomain];
};

export const getLocalDomainData = domainName => {
  try {
    const value = window.localStorage.getItem(keyName);
    return JSON.parse(value).filter(d => d.domain === domainName || d.domainAliases.includes(domainName))[0]

  } catch (err) {
    console.error(err)
  }
}

export default useLocalStorage