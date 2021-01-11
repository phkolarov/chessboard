import React, {useEffect, useState} from 'react';
import WithPredefinedMovesGame from "./integrations/WithPredefinedMoves";
import {useSelector} from "react-redux";
import {Grid, Paper, Typography} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    boardsContainer: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: 30,
        marginBottom: 50
    },
    buttonGroup: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    }
}));


const mapState = ({GameData}) => ({
    GameData
});


export default function Game(props) {
    const classes = useStyles();
    const {GameData} = useSelector(mapState);
    const [currentGame, setCurrentGame] = useState({});
    const [playGame, setPlayGame] = useState(false);
    const [gameIndex, setGameIndex] = useState(false);
    const [fenIndex, setFenIndex] = useState(0);
    const [currentFen, setCurrentFen] = useState();

    useEffect(() => {
        if (GameData?.data?.length) {
            setCurrentGame(GameData.data[props.gameid])
        }
    }, [GameData])

    useEffect(() => {

        if (playGame) {
            const timer = setInterval(() => {
                setFenIndex(prevState => {
                    return prevState + 1;
                });
            }, 1000);
            // clearing interval
            return () => clearInterval(timer);
        }
    });

    useEffect(() => {
        if (playGame || fenIndex) {
            if (fenIndex <= currentGame?.fens?.length - 1) {
                setCurrentFen(currentGame?.fens[fenIndex])
            } else {
                setPlayGame(false);
            }
        }
    }, [fenIndex])


    const prepareMovesData = (currentGameData) => {
        let num = 1;
        let outputString = ''
        while (num <= currentGameData.length) {
            if (num % 2 !== 0) {
                outputString += `${num}. ${currentGameData[num - 1]}`;
            } else {
                outputString += ` - ${currentGameData[num - 1]}; `;
            }
            num++
        }
        return outputString;
    }

    const playStop = () => {
        setPlayGame(prevState => !prevState)
    }


    const nextMove = () => {
        setFenIndex(prevState => prevState + 1)
    }

    const resetGame = () => {
        setFenIndex(0)
        setCurrentFen(currentGame?.fens[0])
    }

    return (
        <>
            <Paper elevation={0}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h5" gutterBottom>
                            {props.gameid + 1}. {currentGame.white} vs {currentGame.black}
                        </Typography>
                        <Typography variant="h4" gutterBottom>
                            Result: {currentGame.result}
                        </Typography>
                        <Typography variant="h4" gutterBottom>
                            Date: {currentGame.date}
                        </Typography>
                        <Typography variant="h4" gutterBottom>
                            Moves:
                        </Typography>
                        <p>{prepareMovesData(currentGame?.moves ?? [])}</p>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.boardsContainer}>
                            <WithPredefinedMovesGame currentFen={currentFen} index={gameIndex}/>
                        </div>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <div className={classes.buttonGroup}>
                                <ButtonGroup variant="contained" color="primary"
                                             aria-label="contained primary button group">
                                    <Button onClick={playStop}> {playGame ? 'Stop' : 'Play'}</Button>
                                    <Button onClick={nextMove} disabled={playGame}>Next</Button>
                                    <Button onClick={resetGame}>Reset</Button>
                                </ButtonGroup>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>

        </>
    );
}