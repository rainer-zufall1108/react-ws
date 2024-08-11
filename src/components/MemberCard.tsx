import React from "react";
import {Member} from "../types/Member";
import {IoIosCloseCircleOutline} from "react-icons/io";

interface MemberCardProps {
  member: Member,
  removeCard: (memberId: string) => void
}
export default function MemberCard({member, removeCard}: MemberCardProps) {
  return (
      <div style={styles.container}>
        <IoIosCloseCircleOutline color={'red'} onClick={() => removeCard(member.id)}/>
        <h4>{member.name}</h4>
        <h6>Alter: {member.age}</h6>
      </div>
  )
}

const styles = {
  container: {
    border: '1px solid grey',
    borderRadius: 10,
    maxWidth: '30%',
    margin: 5,
    padding: 5,
    minWidth: '30%'
  }
}
