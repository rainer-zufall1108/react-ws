import React, {useEffect, useState} from "react";

export default function Watch() {
  const [dateTime, setDateTime] = useState<string>(new Date().toUTCString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date().toUTCString());
      console.log("dateTime")
    }, 1000);
    return () => clearInterval(intervalId)
  }, []);

  return (<h5>{dateTime}</h5>)
}
