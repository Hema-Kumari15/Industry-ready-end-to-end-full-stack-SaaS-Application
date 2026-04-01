import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { day: "Mon", tasks: 2 },
  { day: "Tue", tasks: 4 },
  { day: "Wed", tasks: 3 }
];

function Analytics() {
  return (
    <LineChart width={300} height={200} data={data}>
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Line dataKey="tasks" />
    </LineChart>
  );
}

export default Analytics;
