import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTopics } from "./api";

export default function TopicSelector() {
  const navigate = useNavigate();
  const [loading , setLoading] = useState('')
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    setLoading(true)
    getTopics()
      .then((response) => {
        setTopics(response.topics);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSelection = (event) => {
    event.preventDefault();
    const selection = event.target.value;

    if (selection !== "") {
      navigate(`/articles/topics/${selection}`);
    }
  };

  return (
    <>
      <select onChange={(e) => handleSelection(e)} name="Topics" id="TopicSelector">
        {!loading ? (
          <>
            <option value="" disabled>Select Topic</option>
            {topics.map((element, index) => (
              <option value={element.slug} key={index}>
                {element.slug}
              </option>
            ))}
          </>
        ) : (
          <option value="" disabled>
            Loading...
          </option>
        )}
      </select>
    </>
  );
}
