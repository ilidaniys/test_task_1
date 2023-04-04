import './App.css';
import styled from "styled-components";
import Table from "./table/Table";
import {QueryClient, QueryClientProvider} from "react-query";

function App() {
    const Layout = styled.div`
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      width: 100%;
      height: 100vh;
      background: #282c34;
      padding: 10rem 10rem;
      gap: 4rem;
    `;
    const Header = styled.h1`
      color: white;
    `;
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <Layout>
                <Header>Users Table UI</Header>
                <Table/>
            </Layout>
        </QueryClientProvider>
    );
}

export default App;
