import React from 'react';
import { Table, Empty } from 'antd';
import type { Box } from '../types';

interface ViewBoxTableProps {
  boxes: Box[];
  onViewChange: (view: "add" | "view") => void;
}

const ViewBoxTable: React.FC<ViewBoxTableProps> = ({ boxes, onViewChange }) => {
  const columns = [
    { title: 'Receiver Name', dataIndex: 'receiverName', key: 'receiverName' },
    { title: 'Weight (kg)', dataIndex: 'weight', key: 'weight' },
    {
      title: 'Box Colour',
      dataIndex: 'color',
      key: 'color',
      render: (color: string) => (
        <div
          style={{
            width: 24,
            height: 24,
            borderRadius: 4,
            border: '1px solid #888',
            background: color,
            boxShadow: '0 0 2px rgba(0,0,0,0.2)'
          }}
        />
      ),
    },
    { title: 'Destination', dataIndex: 'destination', key: 'destination' },
    { title: 'Cost (INR)', dataIndex: 'cost', key: 'cost', render: (cost: number) => `₹${cost.toFixed(2)}` },
  ];

  if (boxes.length === 0) {
    return (
      <div className="p-6 text-center bg-white rounded-lg shadow-md mx-6">
        <Empty
          description={
            <span>
              No boxes added yet.{' '}
              <a
                onClick={() => onViewChange('add')}
                className="text-blue-600 underline cursor-pointer"
              >
                Click here to add a box
              </a>
              .
            </span>
          }
        />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md">
      <Table dataSource={boxes} columns={columns} rowKey="id" pagination={boxes.length > 10 ? { pageSize: 10 } : false} scroll={{ x: 'max-content' }}/>
    </div>
  );
};

export default ViewBoxTable;