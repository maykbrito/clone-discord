import React from 'react';

import { Grid } from './styles';
import ServerList from "../ServerList";

const Layout: React.FC = () => {
    return <Grid>
        <ServerList></ServerList>
    </Grid>
}

export default Layout;