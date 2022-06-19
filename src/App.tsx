import Header from "./components/Header";
import ContactsTable from "./components/ContactsTable";
import { Divider, Box } from "@chakra-ui/react";
import { NewUserForm } from "./components/NewUserForm";

function App() {
  return (
    <>
    
        <Header />
        <Divider />
        <NewUserForm />
        <ContactsTable />
      
    </>
  );
}

export default App;
