import { useState } from 'react';

import products from '../assets/products';

import { IconSwitch } from './IconSwitch';
import { CardsView } from './CardsView';
import { ListView } from './ListView';

export const Store = () => {
  const [icon, setIcon] = useState('view_list');
  
  const handleSwitch = (currentIcon) => {
    const nextIcon = currentIcon === 'view_list' ? 'view_module' : 'view_list';
    setIcon(nextIcon);
  }

  return (
    <>
      <header className="header">
        <IconSwitch icon={icon} onSwitch={handleSwitch} />
      </header>

      <main className="container">
        {
          (icon === 'view_list') ? <CardsView cards={products} /> : <ListView items={products} />
        }
      </main>
    </>
  );
}
