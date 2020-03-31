import React from 'react'
import { Row, Col, Typography } from 'antd';
import { defaultImage } from './constants';
import PropTypes from 'prop-types';
import './styles.scss'

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
            list.map((item, index) => <Row key={index}
                onClick={() => onSelect && onSelect(item)}
                className={`item-row ${selected === item.id ? 'highlight' : ''}`}  >

                <Col span={2} >
                    <img className="item-image" alt={item.english} src={item.image ? item.image : defaultImage} />
                </Col>
                <Col span={11} className="col1"  >
                    <Text className="item-text" >
                        {item.english}
                    </Text>
                </Col>
                <Col span={11} className="col2" >
                    <Text className="item-text">
                        {item.arabic}
                    </Text>
                </Col>

            </Row>)
        }
    </div>)
}

ItemList.propTypes = {
    list: PropTypes.array.isRequired,
    onSelect: PropTypes.func,
    selected: PropTypes.number
  };

export default ItemList;