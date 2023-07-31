import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { ItemData } from './interface/ItemData';
import { useItemData } from './hooks/useItemData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const { data } = useItemData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="container">
      <h1>Shop</h1>
      <div className="card-grid">
        {data?.map(itemData => 
          <Card
            price={itemData.price} 
            title={itemData.title} 
            image={itemData.image}
          />
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>new</button>
    </div>
  )
}

export default App