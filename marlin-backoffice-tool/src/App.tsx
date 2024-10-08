import Credentials from "./components/Credentials/Credentials";
import MainLayout from "./layouts/MainLayout";
import { useCredentials } from "./hooks/useCredentials";
import DataContent from "./components/DataConent/DataContent";

function App() {
  const credentials = useCredentials((state) => state.credentials);

  return (
    <MainLayout>{!credentials ? <Credentials /> : <DataContent />}</MainLayout>
  );
}

export default App;

