import React, {Component, useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import Chess from "chess.js"; // import Chess from  "chess.js"(default) if recieving an error about new Chess not being a constructor
import Chessboard from "chessboardjsx";


export default function WithPredefinedMoves({index, currentFen}) {

    const game = useRef(new Chess());
    const [fen, setFen] = useState(game.current.fen());

    useEffect(() => {
        if (currentFen) {
            setFen(currentFen);
        }
    }, [ currentFen]);

    return (
        <div className="App">
            {index}
                <Chessboard
                    id="arena"
                    position={fen}
                    transitionDuration={500}
                    width={400}
                />
        </div>
    );
}
