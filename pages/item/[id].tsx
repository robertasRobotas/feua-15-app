import Item from "@/components/Item/Item";
import { Inventory } from "@/types/inventories";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import PageTemplate from "@/components/PageTemplate/PageTemplate";

const ItemPage = () => {
  const [inventory, setInventory] = useState<Inventory | null>(null);

  const router = useRouter();

  const fetchInvenory = async () => {
    const fetchedInventory = await axios.get(
      `http://localhost:3002/inventories/${router.query.id}`
    );

    console.log(fetchedInventory.data.inventory);

    setInventory(fetchedInventory.data.inventory);
  };

  useEffect(() => {
    router.query.id && fetchInvenory();
  }, [router.query.id]);

  return (
    <PageTemplate>
      <div>
        {inventory && (
          <Item title={inventory.title} imgUrl={inventory.imgUrl} />
        )}
      </div>
    </PageTemplate>
  );
};

export default ItemPage;
