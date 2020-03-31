import React, { useState, useEffect, lazy, useCallback } from 'react';
import CategoriesComponet from '../../components/classifications';
import ItemList from '../../components/itemList';
import { Button, Row, Col } from 'antd';
import NewItem from '../../components/newItem';
import PropTypes from 'prop-types';
import './styles.scss'

const NotFound = lazy(() => import('../notFound'))

const Categories = ({ selected }) => {

    const [type, setType] = useState(selected);
    const [list, setList] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null)
    const [subList, setSubList] = useState([])
    const [showForm, setShowForm] = useState({});

    useEffect(() => {
        const titleIdMapping = {
            8: 0,
            9: 1
        }
        setType(titleIdMapping[selected])
    }, [selected])

    useEffect(() => {
        setList([
            { id: 0, english: 'Tops', arabic: 'Tops ar', sublist: [{ id: 0, english: 'Shirt', arabic: 'Shirt ar' }, { id: 0, english: 'Blouse', arabic: 'Blouse ar' }, { id: 0, english: 'T Shirt', arabic: 'T Shirt ar' }, { id: 0, english: 'Office Uniform', arabic: 'Office Uniform ar' }] },
            { id: 1, english: 'Bottoms', arabic: 'Bottoms ar', sublist: [] }])
        setSelectedItem(0)
    }, [])

    useEffect(() => {
        const subList = list.find(item => item.id === selectedItem);
        if (subList)
            setSubList(subList.sublist)
    }, [selectedItem, list])

    const onSelect = useCallback((item) => {
        console.log(item)
        setType(item)
    }, [])


    const showFormFn = useCallback((field, value) => {
        setShowForm({
            [field]: value
        })
    }, []);

    const onNewCategory = useCallback((data) => {
        const itemId = list.length;
        setList([...list, { id: itemId, english: data.english, arabic: data.arabic, sublist: [], image: data.image }])
        showFormFn('newCategory', false)
        setSelectedItem(itemId)
    }, [list, showFormFn])

    const onNewSubCategory = useCallback((data) => {
        setList(list => {
            const copy = [...list]
            const selected = copy[selectedItem];
            console.log(selected)
            selected.sublist = [...selected.sublist, { id: selected.sublist.length, english: data.english, arabic: data.arabic, image: data.image }]
            return copy;
        })
        showFormFn('newSubCategory', false)
    }, [showFormFn, selectedItem])


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
                                <Button onClick={() => showFormFn('newCategory', true)} >Add Category +</Button>
                            </Row>
                            <div style={{ marginTop: 30 }} ></div>
                            <ItemList
                                list={list}
                                onSelect={(item) => { setSelectedItem(item.id) }}
                                selected={selectedItem}
                            />
                            {
                                showForm.newCategory ?
                                    <NewItem title="New Category" onSubmit={onNewCategory} onCancel={() => { showFormFn('newCategory', false) }} /> : ''
                            }
                        </Col>

                        <Col span={10}>
                            <Row justify="end" >
                                <Button onClick={() => showFormFn('newSubCategory', true)} >Add Sub-Category +</Button>
                            </Row>
                            <div style={{ marginTop: 30 }} ></div>

                            <ItemList
                                list={subList}
                                onSelect={() => { }}
                            />
                            {
                                showForm.newSubCategory ?
                                    <NewItem title="New Sub Category" onSubmit={onNewSubCategory} onCancel={() => showFormFn('newSubCategory', false)} /> : ''
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

Categories.prototype = {
    seselected: PropTypes.number.isRequired
}

export default Categories;