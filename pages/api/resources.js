import axios from "axios";
// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req, res) {
  if (req.method === "GET") {
    const resData = await fetch("http://localhost:3001/api/resources");
    const data = await resData.json();

    return res.send(data);
  }

  if (req.method === "POST") {
    const { title, description, link, timeToFinish, priority } = req.body;

    if (!title || !description || !link || !timeToFinish || !priority) {
      return res.status(422).send("Data Not Found");
    }

    try {
      const axiosRes = await axios.post(
        "https://localhost:3001/api/resources",
        req.body
      );
      return res.sen(axiosRes.data);
    } catch (error) {
      return res.status(422).send("Data cannot be stored");
    }
  }
}
