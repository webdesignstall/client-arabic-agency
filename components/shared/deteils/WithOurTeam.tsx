export default function WithOurTeam() {
    return (
        <div className="grid grid-cols-4 mt-10">
        <div className="bg-gray-200 p-5 col-span-3 rounded">
            <h1 className="text-xl text-black">With our team, you can get:</h1>
            <div>
                {
                    teams.map(team =><div key={team.id} className="flex gap-3 pt-2">
                    <img src={team.select} alt="" className="w-[23px]  h-[20px]"/>
                    <h1 className="text-lg">{team.data}</h1>
                </div>)
                }
                
            </div>
        </div>
        </div>
    );
};

const teams = [
    {
      id: 'team-1',
      data: 'Domain-specific models based on Big Data;',
      select: "https://static.thenounproject.com/png/1227034-200.png",
    },
    {
      id: 'team-2',
      data: 'Predictive maintenance;',
      select: "https://static.thenounproject.com/png/1227034-200.png",
    },
    {
      id: 'team-3',
      data: 'Conversion and purchase prediction;',
      select: "https://static.thenounproject.com/png/1227034-200.png",
    },
    {
      id: 'team-4',
      data: 'Automated quality control;',
      select: "https://static.thenounproject.com/png/1227034-200.png",
    },
    {
      id: 'team-5',
      data: 'Operational improvement;',
      select: "https://static.thenounproject.com/png/1227034-200.png",
    },
    {
      id: 'team-6',
      data: 'Churn factors assessment.',
      select: "https://static.thenounproject.com/png/1227034-200.png",
    },
  ];