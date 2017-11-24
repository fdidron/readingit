import { Row, Col } from 'react-flexa';
import api from '../libs/reddit/client.js';
import Card from '../components/ui/Card.js';
import Layout from '../components/ui/Layout.js';
import Listing from '../components/listings/Listing.js';

export default class HomePage extends React.Component {
  static async getInitialProps({ req, query: { category, domain } }) {
    let endpoint = 'hot';
    if (category) endpoint = category;
    if (domain) endpoint = `domain/${domain}`;
    const { data } = await api({ endpoint });
    return { data };
  }

  render() {
    return (
      <Layout>
        <Row>
          <Col xs={12} sm={8}>
            <Card>
              <Listing listing={this.props.data} />
            </Card>
          </Col>
          <Col xs={12} sm={4}>
            <Card>Sidebar</Card>
          </Col>
        </Row>
      </Layout>
    );
  }
}
