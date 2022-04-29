import { useParams } from "react-router-dom";

const Info = () => {
  const { id } = useParams();

  return <div>Informações adicionais do produto {id}</div>;
};

export default Info;
