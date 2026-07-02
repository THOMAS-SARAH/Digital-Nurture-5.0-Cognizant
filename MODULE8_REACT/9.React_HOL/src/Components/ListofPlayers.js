import React from 'react';

function ListofPlayers() {

    const players = [
        {name:"Virat Kohli", score:90},
        {name:"Rohit Sharma", score:82},
        {name:"Shubman Gill", score:68},
        {name:"KL Rahul", score:55},
        {name:"Hardik Pandya", score:77},
        {name:"Ravindra Jadeja", score:60},
        {name:"Rishabh Pant", score:88},
        {name:"Surya Kumar", score:64},
        {name:"Mohammed Shami", score:45},
        {name:"Jasprit Bumrah", score:72},
        {name:"Kuldeep Yadav", score:50}
    ];

    const lowScore = players.filter(player => player.score < 70);

    return (

        <div>

            <h2>List of Players</h2>

            <table border="1" align="center">
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                </tr>

                {
                    players.map((player,index)=>

                    <tr key={index}>
                        <td>{player.name}</td>
                        <td>{player.score}</td>
                    </tr>

                    )
                }

            </table>

            <br/>

            <h2>Players with Score Below 70</h2>

            <table border="1" align="center">

                <tr>
                    <th>Name</th>
                    <th>Score</th>
                </tr>

                {
                    lowScore.map((player,index)=>

                    <tr key={index}>
                        <td>{player.name}</td>
                        <td>{player.score}</td>
                    </tr>

                    )
                }

            </table>

        </div>

    );

}

export default ListofPlayers;