import { Provider } from "react-redux"
import store, { persistor } from "./redux/store.js"
import { PersistGate } from "redux-persist/integration/react";
import MuiThemeProvider from "./theme/index.jsx";
import { Navbar, RecipeReviewCard } from './components'
import { Box, Stack } from '@mui/material'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MuiThemeProvider>
          <Navbar />
          <Box sx={{ display: "flex", justifyContent: 'center', mt: 8 }}>
            <Stack direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}>
              <RecipeReviewCard />
              <RecipeReviewCard />
              <RecipeReviewCard />
            </Stack>
          </Box>
        </MuiThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
