import React from "react";

type RankProps = {
  entries: number;
  name: string;
};

function Rank({ entries, name }: RankProps) {
  return (
    <div>
      <div className="white f3">{`${name} your current rank is`}</div>
      <div className="white f1">{entries}</div>
    </div>
  );
}

export default Rank;
