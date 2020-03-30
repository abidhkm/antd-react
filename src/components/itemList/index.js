import React from 'react'
import { Row, Col, Typography } from 'antd';
import './styles.scss'
import { defaultImage } from './constants';

const { Text } = Typography;

const ItemList = ({ list = [], onSelect, selected }) => {
    return (<div className="item-list" >
        <Row className="header-row" >
            <Col span={2} ></Col>
            <Col span={11} className="col1"  >
                <Text strong>
                Name In English
                </Text>
            </Col>
            <Col span={11} className="col2" >
                <Text strong >
                Name In Arabic
                </Text>
            </Col>
        </Row>
        {
            list.map((item) => <Row onClick={() => onSelect(item)} className={`item-row ${selected === item.id ? 'highlight' : ''}`}  >
                <Col span={2} >
                    <img className="item-image" alt={item.english} src={item.image ? item.image : defaultImage}  />
                </Col>
                <Col span={11} className="col1"  >
                    <Text className="item-text" >
                        {item.english}
                    </Text>
                </Col>
                <Col span={11} className="col2" >
                    <Text className="item-text">
                        Arabic
                </Text>
                </Col>
            </Row>)
        }
    </div>)
}

export default ItemList;