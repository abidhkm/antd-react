import React, { useState } from 'react';
import { Form, Input, Button, Card, Upload } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { formItemLayout, tailFormItemLayout } from './constants';
import './styles.scss'

const NewItem = ({ title = 'Add New Category', onSubmit, onCancel }) => {

    const [form] = Form.useForm();
    const [img, setImg] = useState({});
    const [compessMode, setCompessMode] = useState({ web: false, mob: false })

    const onFinish = values => {
        onSubmit(values)
    };

    function getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }


    const onReset = () => {
        onCancel();
    }

    const onChange = (name, val) => {

        form.setFieldsValue({
            [name]: val
        })

        if(name === 'web' || name === 'mob') {
            setCompessMode({
                web: form.getFieldValue('web'),
                mob: form.getFieldValue('mob')
            })
            form.setFieldsValue({
                compress:compessMode
            })
        }
    }


    const handleChange = info => {
        // if (info.file.status === 'uploading') {
        //     setImg({
        //         loading: true
        //     })
        //     return;
        // }
        // if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, imageUrl => {
                setImg({ ...img, imageUrl, loading: false })
                onChange('image', imageUrl)
            }
            );
        // }
    };

    return (
        <Card title={title} className="form-card" >
            <Form
                layout="vertical"
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
            >
                <Form.Item label="Category Name *" style={{ marginBottom: 0 }}>
                    <Form.Item
                        name="english"
                        rules={[{ required: true }]}
                    >
                        <Input placeholder="English" />
                    </Form.Item>
                    <Form.Item
                        name="arabic"
                        rules={[{ required: true }]}
                    >
                        <Input placeholder="Arabic" />
                    </Form.Item>
                </Form.Item>


                <Form.Item
                    name="image"
                    label="Image/Icon 100*100 *"
                    rules={[
                        {
                            validator: () => {
                                return (img.imageUrl) ? Promise.resolve() : Promise.reject('Should upload picture')
                            }
                        },
                    ]}
                >

                    <Upload
                        accept="image/*"
                        id="upload-file"
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        onChange={handleChange}
                    >
                        {img.imageUrl ? <img src={img.imageUrl} style={{ width: 100, height: 100 }} alt="avatar" /> : <></>}
                    </Upload>
                    <Button
                        onClick={() => document.getElementById('upload-file').click()}
                    >
                        Upload
                     </Button>
                </Form.Item>

                <Form.Item
                    label="Select frame size to compress *"
                    name='compress'
                    rules={[
                        {
                            validator: () => {
                                return Promise.resolve()
                                // return (form.getFieldValue('mob') || form.getFieldValue('web')) ? Promise.resolve() : Promise.reject('Should select either one')
                            }
                        },
                    ]}
                >
                    <Form.Item
                        name="mob"
                        style={{ display: 'inline-block', width: 'calc(50% - 5px)' }}
                    >
                        <Button onClick={() => onChange('mob', !form.getFieldValue('mob'))} type="default" size={'large'}>
                            Mobile 10x10
                            {
                                compessMode.mob ?
                                    <CheckCircleOutlined style={{ color: '#00CB77' }} /> : <CheckCircleOutlined style={{ color: 'transparent' }} />
                            }
                        </Button>
                    </Form.Item>

                    <Form.Item
                        name="web"
                        style={{ display: 'inline-block', width: 'calc(50% - 5px)' }}
                    >
                        <Button onClick={() => onChange('web', !form.getFieldValue('web'))} type="default" size={'large'}>
                            Web 25x25
                            {
                                compessMode.web ?
                                    <CheckCircleOutlined style={{ color: '#00CB77' }} /> : <CheckCircleOutlined style={{ color: 'transparent' }} />
                            }
                        </Button>
                    </Form.Item>

                </Form.Item>


                <Form.Item {...tailFormItemLayout}>
                    <Form.Item
                        style={{ display: 'inline-block', width: 'calc(50% - 5px)' }}
                    >
                        <Button type="primary" htmlType="submit">
                            Register
                     </Button>
                    </Form.Item>
                    <Form.Item
                        style={{ display: 'inline-block', width: 'calc(50% - 5px)' }}
                    >
                        <Button onClick={onReset} htmlType="button">
                            Cancel
                     </Button>
                    </Form.Item>
                </Form.Item>


            </Form>
        </Card>)
}

export default NewItem