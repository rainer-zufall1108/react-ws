export const cardListCode: string = 'export default function CardList() {\n' +
    '  const [heroes, setHeroes] = useState<Member[]>(members);\n' +
    '  \n' +
    '  const removeCard = (cardId: string) => {\n' +
    '    setHeroes((oldVal: Member[]) => oldVal.filter((mem: Member) => mem.id !== cardId));\n' +
    '  }\n' +
    '\n' +
    '  return (\n' +
    '      <div style={{display: "flex", margin: 10}}>\n' +
    '        <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", minWidth: \'30%\'}}>\n' +
    '          {heroes.map((hero: Member, index: number) => {\n' +
    '            return <MemberCard key={index} member={hero} removeCard={removeCard}/>\n' +
    '          })}\n' +
    '        </div>\n' +
    '      </div>\n' +
    '  )\n' +
    '}\n';
