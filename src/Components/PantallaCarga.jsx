import { HashLoader } from 'react-spinners';

function PantallaCarga({ loading }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: '#470308ff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      flexDirection: 'column'
    }}>
      <HashLoader color="#36d7b7" loading={loading} size={60} />
      <h2>Cargando...</h2>
    </div>
  );
}

export default PantallaCarga;