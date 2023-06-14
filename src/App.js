import "./App.css";
import { Button, Input, Grid, Stack, Textarea, Container } from "@mantine/core";

import CardComponent from "./components/Card";
import { useState } from "react";

let arr = [
  {
    id: 1,
    title: "Dağ1",
    detay: "Acıklama1",
  },
  {
    id: 2,
    title: "Dağ2",
    detay: "Acıklama2",
  },
  {
    id: 3,
    title: "Dağ3",
    detay: "Acıklama3",
  },
  {
    id: 4,
    title: "Dağ4",
    detay: "Acıklama4",
  },
];

function App() {
  const [list, setList] = useState(arr);

  const [title, setTitle] = useState("");

  const [paragraf, setParagraf] = useState("");

  const click = () => {
    setTitle("");
    setParagraf("");
    const copyList = [...list];
    copyList.push({
      id: 5,
      title,
      detay: paragraf,
    });
    setList(copyList);
  };
  return (
    <Container>
      <h1>Kart oluşturma programı</h1>
      <Stack>
        <Input.Wrapper withAsterisk label="Başlık:">
          <Input
            placeholder="Başlık yazınız"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Input.Wrapper>
        <Textarea
          withAsterisk
          label="Paragraf:"
          placeholder="Paragraf Yazınız"
          autosize
          value={paragraf}
          onChange={(e) => setParagraf(e.target.value)}
        />
        {title && paragraf ? (
          <Button variant="outline" onClick={click}>
            Kart Oluştur
          </Button>
        ) : (
          <Button variant="outline" disabled>
            Kart Oluştur
          </Button>
        )}
      </Stack>
      <h4>Kartlar:</h4>
      <Grid>
        {list.map(({ title, detay }, id) => (
          <Grid.Col key={id} span={4}>
            <CardComponent
              title={title}
              detay={detay}
              id={id}
              click={() => {
                let copyList = [...list];
                copyList.splice(id, 1);
                setList(copyList);
              }}
            ></CardComponent>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
