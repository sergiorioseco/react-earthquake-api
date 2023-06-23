import { useState, useEffect } from "react";
import { Table } from 'antd';
import Buscador from './Buscador';

function MiApi() {
  const [info, setInfo] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState([]);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    try {
        const url = "https://api.xor.cl/sismo/recent";
        const response = await fetch(url);
        const data = await response.json();
        setInfo(data.events);
        setFilteredInfo(data.events);
      } catch (error) {
        console.error("Error al consultar la API:", error);
      }
  };

  const handleSearch = (value) => {
    const filteredData = info.filter((item) => {
      return item.geo_reference.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredInfo(filteredData);
  };

  return (
    <>
    <div className="mainSection">
      <Buscador onSearch={handleSearch} />
      <Table dataSource={filteredInfo}>
      <Table.Column title="Fecha" dataIndex="local_date" key="local_date" />
      <Table.Column title="Latitud" dataIndex="latitude" key="latitude" />
      <Table.Column title="Longitud" dataIndex="longitude" key="longitude" />
      <Table.Column title="Referencia Geográfica" dataIndex="geo_reference" key="geo_reference" />
      <Table.Column title="Magnitud" dataIndex={['magnitude', 'value']} key="magnitude"  sorter={(a, b) => a.magnitude.value - b.magnitude.value} />
      </Table>
      </div>
    </>
  );
}

export default MiApi;
