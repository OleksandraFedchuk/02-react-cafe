import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import css from "./App.module.css";
import { useState } from "react";
import { type Votes } from "../types/votes";
import { type VoteType } from "../types/votes";

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function handleVote(type: VoteType) {
    setVotes((generalVotes) => ({
      ...generalVotes,
      [type]: generalVotes[type] + 1,
    }));
  }

  function resetVotes() {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  const totalVotes = votes.good + votes.bad + votes.neutral;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        votes={votes}
        onVote={handleVote}
        onReset={resetVotes}
        canReset={totalVotes > 0}
      />
      <VoteStats />
    </div>
  );
}
