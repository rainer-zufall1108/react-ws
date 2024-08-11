import React, {useState} from "react";
import {Member} from "../types/Member";
import {members} from "../mocks/Members";
import MemberCard from "./MemberCard";
import {CodeBlock} from "react-code-blocks";
import {cardListCode} from "../code/cardListCode";
import {memberCardCode} from "../code/memberCardCode";

export default function CardList() {
  const [heroes, setHeroes] = useState<Member[]>(members);

  const removeCard = (cardId: string) => {
    setHeroes((oldVal: Member[]) => oldVal.filter((mem: Member) => mem.id !== cardId));
  }

  return (
      <div style={{display: "flex", margin: 10}}>
        <div style={{display: "flex",  flexDirection: "column", alignItems: "center", minWidth: '30%'}}>
          {heroes.map((hero: Member, index: number) => {
            return <MemberCard key={index} member={hero} removeCard={removeCard}/>
          })}
        </div>
        <div>
          <h4>CardList Component</h4>
          <CodeBlock codeContainerStyle={{textAlign: 'left'}} language={'tsx'} text={cardListCode}/>
          <h4>Card Component</h4>
          <CodeBlock codeContainerStyle={{textAlign: 'left'}} language={'tsx'} text={memberCardCode}/>
        </div>
      </div>
  )
}
