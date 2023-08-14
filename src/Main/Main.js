import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Main = () => {
  const [jsonData, setJsonData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      fetch("/stays.json")
        .then((response) => response.json())
        .then((data) => setJsonData(data))
        .catch((e) => console.log(e));
    };
    fetchData();
  }, []);
  console.log(jsonData);
  return (
    <main className="mt-10">
      <div className="flex items-center justify-between font-montserrat mb-7">
        <h1 className="font-bold text-black1 text-2xl">Stays in Finland</h1>
        <h2 className="text-base">12+ stays</h2>
      </div>
      <section className="grid lg:grid-cols-3 md:grid-cols-2 xl:gap-9 lg:gap-6 md:gap-7">
        {jsonData.map((data) => {
          return (
            <Card
              title={data.title}
              rating={data.rating}
              type={data.type}
              photo={data.photo}
              superHost={data.superHost}
            />
          );
        })}
      </section>
    </main>
  );
};

export default Main;
