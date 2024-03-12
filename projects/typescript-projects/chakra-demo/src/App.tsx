import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { useState } from "react";

const App = () => {
  // const [gameQuery, setGameQuery] = useState<GameQuery> ({} as GameQuery)
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
    </Grid>
  );
};

export default App;
