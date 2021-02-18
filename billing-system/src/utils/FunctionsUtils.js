const getDateTimeString = (datetime, withTime) => {
    let dtString = "";
    if (datetime) {
      let dt = new Date(datetime);
      dtString += `${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()}`;

      if (withTime) {
        let hours =
          dt.getHours().toString().length === 1
            ? "0" + dt.getHours()
            : dt.getHours();
        let minutes =
          dt.getMinutes().toString().length === 1
            ? "0" + dt.getMinutes()
            : dt.getMinutes();
  
        dtString += ` ${hours}:${minutes}`;
      }
    }
    return dtString;
  };

  export { getDateTimeString }