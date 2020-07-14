import axios from "axios";

const getEventsByType = (sportType) => {
  // console.log(data)
    return(
        axios.get("/eventsByType?sportType=" + sportType).then((res) => {
            // console.log(res);
            return res
          }).catch((error) => {
              console.log("ERROR", error)
          })
    );    
}

export default getEventsByType;