import { Card, CardImg, CardText, CardBody, CardImgOverlay, CardTitle, Col } from 'reactstrap';


const CampsiteDetail = ({ campsite }) => {
  const { image, name, description } = campsite;

  return (
    <Col md='5' className='m-1'>
      <Card>
        <CardImg top src={image} alt={name} />
        <CardImgOverlay>
          <CardTitle>{name}</CardTitle>
        </CardImgOverlay>
        <CardBody>
            <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CampsiteDetail;

