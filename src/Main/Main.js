import React, { useEffect } from "react";
import { fetchAllStays } from "../store/staysSlice";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();
  const stays = useSelector((state) => state.stays);
  useEffect(() => {
    dispatch(fetchAllStays("../data/stays.json"));
  }, [dispatch]);
  let content = "";
  if (stays.fetchStatus === "loading") {
    content = <p className="text-lg font-mulish">Loading...</p>;
  } else {
    content = stays.filteredStaysList.map((data) => {
      return (
        <Card
          title={data.title}
          rating={data.rating}
          type={data.type}
          photo={data.photo}
          superHost={data.superHost}
          key={data.title}
        />
      );
    });
  }
  console.log(stays.filteredStaysList.length);
  return (
    <main className="mt-10">
      <div className="flex items-center justify-between font-montserrat mb-7">
        <h1 className="font-bold text-black1 text-2xl">Stays in Finland</h1>
        <h2 className="text-base">{stays.filteredStaysList.length} stays</h2>
      </div>
      <section className="grid lg:grid-cols-3 md:grid-cols-2 xl:gap-9 lg:gap-6 md:gap-7">
        {content}
      </section>
    </main>
  );
};

export default Main;
