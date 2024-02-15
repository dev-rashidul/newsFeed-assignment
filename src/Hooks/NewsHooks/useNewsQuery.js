// import { useEffect, useState } from "react";

// function useData(url) {
//   const [news, setNews] = useState(null);
//   useEffect(() => {
//     if (url) {
//       let ignore = false;
//       fetch(url)
//         .then((response) => response.json())
//         .then((json) => {
//           if (!ignore) {
//             setNews(json);
//           }
//         });
//       return () => {
//         ignore = true;
//       };
//     }
//   }, [url]);
//   return news;
// }

// export default useData;
