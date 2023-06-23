import { Input } from 'antd';
import PropTypes from 'prop-types';

function Buscador({ onSearch }) {
  const handleSearch = (e) => {
    const value = e.target.value;
    onSearch(value);
  };

  return (
    <Input.Search placeholder="Buscar localidad" onChange={handleSearch} />
  );
}
Buscador.propTypes = {
    onSearch: PropTypes.func.isRequired,
  };
export default Buscador;