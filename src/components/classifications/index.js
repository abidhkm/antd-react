import React from 'react';
import { Row, Col, Typography } from 'antd';
import PropTypes from 'prop-types';
import './styles.scss'

const { Title } = Typography;

const Classification = ({ categories = [], onSelect, selected }) => {

    return <Row justify="start" className="classification" >
        {
            categories.map((item, index) => <Col
                key={index}
                span={item.span}
                onClick={() => onSelect(item.id)} >
                <Title level={3} underline={selected === item.id}  >
                    {item.name}
                </Title>
            </Col>)
        }
    </Row>
};

Classification.propTypes = {
    categories: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    selected: PropTypes.number.isRequired
  };

export default Classification;