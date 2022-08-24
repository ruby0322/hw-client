import React, { useEffect, useState } from 'react';

interface itemNode {
  name: string;
  email: string;
  avatar: string;
}

function Info() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState<itemNode[]>([]);

  const fetchItems = async () => {
    const data = await fetch('https://hw-platform-backend.herokuapp.com/info');
    const res = await data.json();
    // console.log(res);
    setItems(res);
  };

  return (
    <section>
      <div>
        <h1>Member Information</h1>
        {items.map((item) => (
          <div>
            <div>
              <i />
              {' '}
              <i>
                {item.name}
                {' '}
                (
                {item.email}
                ):
                {item.avatar}
              </i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Info;
