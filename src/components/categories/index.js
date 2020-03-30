import React from 'react';
import { Row, Col, Typography } from 'antd';
import './styles.scss'

const { Title } = Typography;

const Categories = ({ categories = [], onSelect, selected }) => {

    return <Row justify="start" className="classification" >
        {
            categories.map(item => <Col
                span={item.span}
                onClick={() => onSelect(item.id)} >
                <Title level={3} underline={selected === item.id}  >
                    {item.name}
                </Title>
            </Col>)
        }
    </Row>
};

export default Categories;