import Logo from './_components/Logo';
import Description from './_components/Description';
import Content from './_components/Content';
import GitHub from './_components/GitHub';

import OpenLink from '../components/OpenLink';
const Default = () => {
    return (
        <div>
            <header className="App-header">
                <Logo />
                <Description />
                <OpenLink titulo={"Learn React"} url="https://reactjs.org/"/>
                <OpenLink titulo={"Mi Proyecto GitHub"} url="https://github.com/Maribelbms/desarrollo-frontend-react.git"/>
            

            </header>
        </div>
    );
};

export default Default;