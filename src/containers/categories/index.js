import React, { useState, useEffect } from 'react';
import CategoriesComponet from '../../components/categories';
import ItemList from '../../components/itemList';
import { Button, Row, Col } from 'antd';
import NewItem from '../../components/newItem';
import './styles.scss'
import NotFound from '../notFound';

const Categories = ({ selected }) => {

    const [type, setType] = useState(selected);
    const [list, setList] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null)
    const [subList, setSubList] = useState([])
    const [showForm, setShowForm] = useState({});

    useEffect(() => {
        const titleIdMapping = {
            8:0,
            9:1
        }
        setType(titleIdMapping[selected])
    }, [selected])

    useEffect(() => {
        setList([
            { id: 0, english: 'item1', sublist: [{ id: 0, english: 'subitem 1 1' }, { id: 0, english: 'subitem 1 2' }, { id: 0, english: 'subitem 1 3' }, { id: 0, english: 'subitem 1 4' }] },
            { id: 1, english: 'item2', sublist: [{ id: 0, english: 'subitem 2 1' }, { id: 0, english: 'subitem 2 2' }, { id: 0, english: 'subitem 2 3' }, { id: 0, english: 'subitem 2 4' }] }])
        setSelectedItem(0)
    }, [])

    useEffect(() => {
        const subList = list.find(item => item.id === selectedItem);
        if (subList)
            setSubList(subList.sublist)
    }, [selectedItem, list])

    const onSelect = (item) => {
        console.log(item)
        setType(item)
    }


    const onBtnClick = (field, value) => {
        setShowForm({
            [field]: value
        })
    };

    const onNewCategory = (data) => {
        const itemId = list.length;
        setList([...list, { id: itemId, english: data.english, sublist: [], image: data.image }])
        onBtnClick('newCategory', false)
        setSelectedItem(itemId)
    }

    const onNewSubCategory = (data) => {
        setList(list => {
            const copy = [...list]
            const selected = copy[selectedItem];
            console.log(selected)
            selected.sublist = [...selected.sublist, { id: selected.sublist.length, english: data.english, image: data.image }]
            return copy;
        })
        onBtnClick('newSubCategory', false)
    }


    return (
        <>
            <CategoriesComponet
                categories={[{ name: 'Normal Categories', id: 0, span: 8 }, { name: 'Commercial Categories', id: 1, span: 8 }]}
                selected={type}
                onSelect={onSelect} />

            <div className="categories-container" >

                {
                    type === 0 &&
                    <Row justify="start" gutter={48} >

                        <Col span={10}>
                            <Row justify="end" >
                                <Button onClick={() => onBtnClick('newCategory', true)} >Add Category +</Button>
                            </Row>
                            <div style={{ marginTop: 30 }} ></div>
                            <ItemList
                                list={list}
                                onSelect={(item) => { setSelectedItem(item.id) }}
                                selected={selectedItem}
                            />
                            {
                                showForm.newCategory ?
                                    <NewItem title="New Category" onSubmit={onNewCategory} onCancel={() => { onBtnClick('newCategory', false) }} /> : ''
                            }
                        </Col>

                        <Col span={10}>
                            <Row justify="end" >
                                <Button onClick={() => onBtnClick('newSubCategory', true)} >Add Sub-Category +</Button>
                            </Row>
                            <div style={{ marginTop: 30 }} ></div>

                            <ItemList
                                list={subList}
                                onSelect={() => { }}
                            />
                            {
                                showForm.newSubCategory ?
                                    <NewItem title="New Category" onSubmit={onNewSubCategory} onCancel={() => onBtnClick('newSubCategory', false)} /> : ''
                            }
                        </Col>

                    </Row>
                }
                {
                    type === 1 && 
                    <NotFound />
                }
            </div>
        </>
    )
}

export default Categories;