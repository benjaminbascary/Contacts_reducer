import Header from "./components/Header";
import ContactsTable from "./components/ContactsTable";
import { NewUserForm } from "./components/NewUserForm";
import { useState } from "react";

function App() {

  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      <Header />
      <ContactsTable />
    </>
  );
}

export default App;
