import React, { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [dataMahasiswa, setDataMahasiswa] = useState([
    {
      aspek_penilaian_1: 1,
      aspek_penilaian_2: 1,
      aspek_penilaian_3: 1,
      aspek_penilaian_4: 1,
    },
    {
      aspek_penilaian_1: 1,
      aspek_penilaian_2: 1,
      aspek_penilaian_3: 1,
      aspek_penilaian_4: 1,
    },
    {
      aspek_penilaian_1: 1,
      aspek_penilaian_2: 1,
      aspek_penilaian_3: 1,
      aspek_penilaian_4: 1,
    },
    {
      aspek_penilaian_1: 1,
      aspek_penilaian_2: 1,
      aspek_penilaian_3: 1,
      aspek_penilaian_4: 1,
    },
    {
      aspek_penilaian_1: 1,
      aspek_penilaian_2: 1,
      aspek_penilaian_3: 1,
      aspek_penilaian_4: 1,
    },
    {
      aspek_penilaian_1: 1,
      aspek_penilaian_2: 1,
      aspek_penilaian_3: 1,
      aspek_penilaian_4: 1,
    },
    {
      aspek_penilaian_1: 1,
      aspek_penilaian_2: 1,
      aspek_penilaian_3: 1,
      aspek_penilaian_4: 1,
    },
    {
      aspek_penilaian_1: 1,
      aspek_penilaian_2: 1,
      aspek_penilaian_3: 1,
      aspek_penilaian_4: 1,
    },
    {
      aspek_penilaian_1: 1,
      aspek_penilaian_2: 1,
      aspek_penilaian_3: 1,
      aspek_penilaian_4: 1,
    },
    {
      aspek_penilaian_1: 1,
      aspek_penilaian_2: 1,
      aspek_penilaian_3: 1,
      aspek_penilaian_4: 1,
    },
  ]);

  const handleChange = useCallback(
    (index: number, event: any) => {
      let newData = [...dataMahasiswa];

      newData[index][event.target.name] = Number(event.target.value);
      setDataMahasiswa(newData);
    },
    [dataMahasiswa]
  );

  const handleSubmit = () => {
    const groupedData: any = {};

    [...dataMahasiswa].forEach((item: any, index) => {
      Object.keys(item).forEach((key: any) => {
        if (key.startsWith("aspek_penilaian")) {
          if (!groupedData[key]) {
            groupedData[key] = {};
          }
          groupedData[key][`mahasiswa_${index + 1}`] = item[key];
        }
      });
    });

    console.log(groupedData);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Aspek Penilaian 1</th>
            <th>Aspek Penilaian 2</th>
            <th>Aspek Penilaian 3</th>
            <th>Aspek Penilaian 4</th>
          </tr>
        </thead>
        <tbody>
          {dataMahasiswa.map((val, index: number) => {
            return (
              <tr key={index}>
                <td>Mahasiswa {index + 1}</td>

                <MemoizedSelectOption
                  index={index}
                  onChange={handleChange}
                  val={val["aspek_penilaian_1"]}
                  name="aspek_penilaian_1"
                />

                <MemoizedSelectOption
                  index={index}
                  onChange={handleChange}
                  val={val["aspek_penilaian_2"]}
                  name="aspek_penilaian_2"
                />

                <MemoizedSelectOption
                  index={index}
                  onChange={handleChange}
                  val={val["aspek_penilaian_3"]}
                  name="aspek_penilaian_3"
                />

                <MemoizedSelectOption
                  index={index}
                  onChange={handleChange}
                  val={val["aspek_penilaian_4"]}
                  name="aspek_penilaian_4"
                />
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={handleSubmit}>Simpan Data</button>
    </div>
  );
}

function SelectOption({ index, val, onChange, name }: any) {
  return (
    <td style={{ width: "20%" }}>
      <select
        style={{ width: "100%" }}
        name={name}
        value={val}
        onChange={(e: any) => onChange(index, e)}
      >
        {Array.from(new Array(10)).map((_, key) => (
          <option key={key} value={`${key + 1}`}>
            {key + 1}
          </option>
        ))}
      </select>
    </td>
  );
}

function compare(prevProps: any, nextProps: any) {
  return JSON.stringify(prevProps.val) === JSON.stringify(nextProps.val);
}

const MemoizedSelectOption = React.memo(SelectOption, compare);

export default App;
