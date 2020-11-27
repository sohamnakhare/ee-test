import { Card } from "antd";
const { Meta } = Card;

const ProductCard = ({ productName, price, units }) => {
  return (
    <Card
      className="app-card"
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta
        className="app-card-description"
        title={productName}
        description={
          <div>
            <h3>{price}</h3>
            <span>{units}</span>
          </div>
        }
      ></Meta>
    </Card>
  );
};

export default ProductCard;
