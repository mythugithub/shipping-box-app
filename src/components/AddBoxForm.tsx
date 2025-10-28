import React from 'react';
import { Form, Input, InputNumber, Select, Button, ColorPicker, notification } from 'antd';
import type { Box } from '../types';
import { destinations } from '../types/index';
import { calculateCost } from '../utils/calculations';

interface AddBoxFormProps {
    onAddBox: (box: Box) => void;
    onViewChange: (view: 'add' | 'view') => void;
}

const AddBoxForm: React.FC<AddBoxFormProps> = ({ onAddBox, onViewChange }) => {
    const [form] = Form.useForm();

    const handleAddBox = async () => {
        try {
            const values = await form.validateFields();
            const cost = calculateCost(values.weight, values.destination);
            const box: Box = {
                id: Date.now().toString(),
                receiverName: values.receiverName,
                weight: values.weight,
                color: values.color.toRgbString(),
                destination: values.destination,
                cost,
            };

            onAddBox(box);
            notification.success({ message: 'Box added successfully!' });
            form.resetFields();
            onViewChange('view');
        } catch (errorInfo) {
        }
    };

    return (
        <div className="p-6 max-w-md my-auto mx-auto bg-white rounded-lg shadow-md">
            <Form
                form={form}
                layout="vertical"
                validateTrigger={['onBlur', 'onChange']}
                onFinish={handleAddBox}
            >
                <Form.Item
                    name="receiverName"
                    label="Receiver Name"
                    rules={[
                        { required: true, message: 'Receiver name is required' },
                        {
                            validator: (_, value) => {
                                if (!value) {
                                    return Promise.resolve();
                                }
                                if (value.length < 2) {
                                    return Promise.reject(new Error('Receiver name must be at least 2 characters'));
                                }
                                return Promise.resolve();
                            },
                        },
                    ]}
                >
                    <Input placeholder="Enter receiver name" />
                </Form.Item>

                <Form.Item
                    name="weight"
                    label="Weight (kg)"
                    rules={[
                        { required: true, message: 'Weight is required' },
                        {
                            validator: (_, value) => {
                                if (value === undefined || value === null) {
                                    return Promise.resolve(); // let required rule handle empty
                                }
                                return value > 0
                                    ? Promise.resolve()
                                    : Promise.reject(new Error('Weight must be greater than 0 kg'));
                            }

                        },
                    ]}
                >
                    <InputNumber className="w-full" placeholder="Enter weight in kg" onKeyDown={(e) => {
                        // Prevent typing '-', 'e', '+'
                        if (['-', 'e', '+'].includes(e.key)) e.preventDefault();
                    }} />
                </Form.Item>

                <Form.Item
                    name="color"
                    label="Box Colour"
                    rules={[{ required: true, message: 'Box color is required' }]}
                >
                    <ColorPicker />
                </Form.Item>

                <Form.Item
                    name="destination"
                    label="Destination"
                    rules={[{ required: true, message: 'Please select a destination' }]}
                >
                    <Select placeholder="Select destination">
                        {Object.keys(destinations).map((d) => (
                            <Select.Option key={d} value={d}>
                                {d}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        className="w-full"
                        onClick={handleAddBox}
                    >
                        Add Box
                    </Button>

                </Form.Item>
            </Form>

        </div>
    );
};

export default AddBoxForm;
