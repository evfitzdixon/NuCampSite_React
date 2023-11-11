import { Col } from 'reactstrap';

const Error = ({ errMsg }) => {
    return (
      <Col>
        <Col></Col>
            <h4>{errMsg}</h4>
        </Col>
    );
};

export default Error;