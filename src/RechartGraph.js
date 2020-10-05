import React, {useState, useEffect,} from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import { getPngData } from "recharts-to-png";
import dataUriToBuffer from 'data-uri-to-buffer';


function RechartGraph({handleImage}) {
  // The chart that we want to download the PNG for.
  const [chart, setChart] = useState();

  // const handleDownload = useCallback(async () => {
  //   if (chart !== undefined) {
  //     // Send the chart to getPngData
  //     const pngData = await getPngData(chart);
  //     // const element = ReactDOM.findDOMNode(chart)
  //     // const pngData = await html2canvas(element).then((canvas) => canvas.toBlob((blob)=> blob.arrayBuffer()));
  //     handleImage(dataUriToBuffer(pngData))
  //     // handleImage(pngData)
  //     // Use FileSaver to download the PNG
  //     //FileSaver.saveAs(pngData, "test.png");
  //   }
  // }, [chart, handleImage]);

  useEffect(() => {
    async function load() {
      if (chart !== undefined) {
        // Send the chart to getPngData
        const pngData = await getPngData(chart);
        handleImage(dataUriToBuffer(pngData))
      }
    }
    load()
  },[chart, handleImage]);

  const data = [
    {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
  ];

  return (
    <>
      <LineChart
        ref={(ref) => setChart(ref)} // Set target element
        data={data}
        height={300}
        width={600}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend wrapperStyle={{ bottom: 0 }} />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
      {/* <div style={{ float: "left" }}>
        <button onClick={handleDownload}>Download as Image</button>
      </div> */}
    </>
  );
}

export default RechartGraph;
