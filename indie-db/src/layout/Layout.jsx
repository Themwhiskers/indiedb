import Main from "./Main/Main";

const Layout = ({ children }) => {
    return(
        <>
        {/*Header*/}
        <Main>
            { children }
        </Main>
        {/*Footer*/}
        </>
    );
};

export default Layout;