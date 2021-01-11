import React, {Suspense, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MenuList from "./common/MenuList";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useSelector} from "react-redux";

// import Game from "./common/Game";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));


const mapState = ({GameData, Routes}) => ({
    GameData,
    Routes: Routes.data
});


export default function PermanentDrawerLeft() {
    const classes = useStyles();

    const {GameData, Routes} = useSelector(mapState);


    useEffect(() => {

    }, [GameData, Routes])

    return (

        <Router
            basename={
                // 'chessboard'
                ''
            }>
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" noWrap>
                            Chess Playback
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    anchor="left"
                >
                    <div className={classes.toolbar}/>
                    <Divider/>

                    <MenuList list={Routes}/>
                    <Divider/>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    <Suspense fallback={<p>Loading...</p>}>
                        <Switch>

                            {Routes.map(({name, path, component}) => {

                                return <Route exact key={path} path={path} render={() => component}/>
                            })}
                        </Switch>
                    </Suspense>

                </main>

            </div>

        </Router>

    );
}