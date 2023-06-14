import React, { useState } from "react";
import { Button, Modal } from "@mantine/core";

function FilterPopup() {
  const [opened, setOpened] = useState(false);

  const handleToggle = () => {
    setOpened((o) => !o);
  };

  return (
    <>
      <Button onClick={handleToggle}>Filter</Button>

      <Modal opened={opened} onClose={handleToggle} hideCloseButton>
        <div style={{ height: "100vh" }}>Pop-up İçeriği</div>
      </Modal>
    </>
  );
}

export default FilterPopup;
