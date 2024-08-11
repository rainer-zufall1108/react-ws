export const memberCardCode: string = 'interface MemberCardProps {\n' +
    '  member: Member,\n' +
    '  removeCard: (memberId: string) => void\n' +
    '}\n' +
    'export default function MemberCard({member, removeCard}: MemberCardProps) {\n' +
    '  return (\n' +
    '      <div style={styles.container}>\n' +
    '        <IoIosCloseCircleOutline color={\'red\'} onClick={() => removeCard(member.id)}/>\n' +
    '        <h4>{member.name}</h4>\n' +
    '        <h6>Alter: {member.age}</h6>\n' +
    '      </div>\n' +
    '  )\n' +
    '}'
