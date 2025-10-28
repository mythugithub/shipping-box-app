import React, { useState } from 'react';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import AddBoxForm from './components/AddBoxForm';
import ViewBoxTable from './components/ViewBoxTable';
import type { Box } from './types';

const LOCAL_STORAGE_BOX_KEY = import.meta.env.VITE_LOCAL_STORAGE_BOX_KEY || 'boxes';

const App: React.FC = () => {
  const [boxes, setBoxes] = useState<Box[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_BOX_KEY);
    return saved ? JSON.parse(saved) : [];
  });
  const [activeView, setActiveView] = useState<'add' | 'view'>(boxes.length === 0 ? 'add' : 'view');

  const handleAddBox = (box: Box) => {
    const updatedBoxes = [...boxes, box];
    setBoxes(updatedBoxes);
    localStorage.setItem(LOCAL_STORAGE_BOX_KEY, JSON.stringify(updatedBoxes));
  };

  const handleViewChange = (view: 'add' | 'view') => {
    setActiveView(view);
  };

  const { Header, Content } = Layout;

  return (
      <Layout className="min-h-screen bg-transparent! flex flex-col">
        <Header className="flex items-center justify-between p-5!">
          <Navbar activeView={activeView} onViewChange={handleViewChange} />
        </Header>
        <Content className="flex-1 p-5">
          {activeView === 'add' ? (
            <AddBoxForm onAddBox={handleAddBox} onViewChange={handleViewChange} />
          ) : (
            <ViewBoxTable boxes={boxes} onViewChange={handleViewChange} />
          )}
        </Content>
      </Layout>
  );
};

export default App;