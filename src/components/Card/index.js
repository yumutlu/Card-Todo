import React from "react";
import { Card, Image, Text, Button, Group, CloseButton } from "@mantine/core";

function CardComponent({ title, detay, id, click }) {
  return (
    <Card
      className="cardComponent"
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
      </Group>

      <Text size="sm" color="dimmed">
        {detay}
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Detaylar
      </Button>
      <Group position="center">
        <Button
          onClick={click}
          variant="light"
          color="red"
          fullWidth
          mt="md"
          radius="md"
        >
          Kartı Sil
        </Button>
      </Group>
    </Card>
  );
}

export default CardComponent;
