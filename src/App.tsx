import Header from "./components/Header";
import ContactsTable from "./components/ContactsTable";
import { Divider, Box } from "@chakra-ui/react";
import { NewUserForm } from "./components/NewUserForm";
import { useState } from "react";

function App() {

  const [isActive, setIsActive] = useState<boolean>(false);

  const handleActive = () => {
    setIsActive(prevValue => !prevValue);
  }

  return (
    <>
      <Header handleActive={handleActive} />
      {
        isActive ? (
            <NewUserForm />
          ) : (
            null
          )
      }
      <ContactsTable />
    </>
  );
}

export default App;
