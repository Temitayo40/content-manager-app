import "bulma/css/bulma.min.css";
import "../styles/global.csss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// export default MyApp;

// const DEFAULT_STATE = {
//   title: "",
//   descripition: "",
//   link: "",
//   priority: 2,
// };

// function handleFormSubmition() {
//   const { form, useForm } = useState(DEFAULT_STATE);

//   const handleSubmit = () => {
//     fetch("/api/resources", {
//       body: JSON.stringify(form),
//       headers: { "Content-Type": "application/json" },
//       method: "POST",
//     });

//     axios.post("/api/resources", form);
//   };
// }

// eslint-disable-next-line import/no-anonymous-default-export
// export default async function (req, res) {
//   if (req.method === "GET") {
//     const dataSet = await fetch("htpp://localhost:3001/api/resources");
//     const data = await dataSet.json();

//     return res.send(data);
//   }

//   if (req.method === "POST") {
//     const { title, description, priority, link } = req.body;

//     if ((!title, !description, !priority, !link)) {
//       return res.status(422).send({ message: "Data is missing" });
//     }

//     return res.send("Data is receieved");
//   }
// }
