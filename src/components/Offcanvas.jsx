import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Radar } from "react-chartjs-2";

export default ({ member, handleChange }) => {
    const labels = ["HP", "Attack", "Defense", "Special Attack", "Special Defense", "Speed"];
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="link" onClick={handleShow} key={member.id} className={`${member.type[0]}`}>
        <div>
            <div className="number">#{member.id}</div>
            <div className="name">{member.name}</div>
            <ul>
                        {member.type.map(x => (
                            <li key={"w" + x} className={x}><span className="bubble">{x}</span></li>
                        ))}
                    </ul>
            <img src={`images/${member.id}.png`} alt={member.name} />
        </div>
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end" id="pokeDetail">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="visually-hidden">{member.name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <div className={`thumb ${member.type[0]}`}>
              <img src={`images/${member.id}.png`} alt={member.name} />
            </div>
            <div className="dataMain">
                <h2>{member.id} - {member.name}</h2>
                <p>{member.bio}</p>
                <div className="typeWrap">
                    <h3>Type</h3>
                    <ul>
                        {member.type.map(x => (
                            <li key={"w" + x} className={x}><span className="bubble">{x}</span></li>
                        ))}
                    </ul>
                </div>
                <div className="weaknessWrap">
                    <h3>Weakness</h3>
                    <ul>
                    {member.weakness.map(x => (
                        <li key={"w" + x} className={x}><span className="bubble">{x}</span></li>
                    ))}
                    </ul>
                </div>
                <div className="statsWrap">
                    <h3>Stats</h3>
                    <div className="dataDisplay">
                        <div className="stat hp">
                            <span className="statLbl">HP:</span>
                            <span className="statVal">{member.stats.hp}</span>
                        </div>
                        <div className="stat attack">
                            <span className="statLbl">Attack:</span>
                            <span className="statVal">{member.stats.attack}</span>
                        </div>
                        <div className="stat defense">
                            <span className="statLbl">Defense:</span>
                            <span className="statVal">{member.stats.defense}</span>
                        </div>
                        <div className="stat spAttack">
                            <span className="statLbl">Special Attack:</span>
                            <span className="statVal">{member.stats.spattack}</span>
                        </div>
                        <div className="stat spDefense">
                            <span className="statLbl">Special Defense:</span>
                            <span className="statVal">{member.stats.spdefense}</span>
                        </div>
                        <div className="stat speed">
                            <span className="statLbl">Speed:</span>
                            <span className="statVal">{member.stats.speed}</span>
                        </div>
                    </div>
                    <div className="dataViz">
                        <Radar data={{
                            labels: labels,
                            datasets: [{
                                label: "Stats",
                                backgroundColor: "rgb(255, 99, 132, .5)",
                                borderColor: "rgb(255, 99, 132)",
                                fill: true,
                                data: [Number(member.stats.hp), Number(member.stats.attack), Number(member.stats.defense), Number(member.stats.spattack), Number(member.stats.spdefense), Number(member.stats.speed)]
                            }]
                        }} options={{
                            scales: {
                                r: {
                                    min: 0,
                                    max: 250
                                }
                            },
                            plugins: {
                                legend: {
                                    display: false
                                }
                            },
                            animation: {
                                duration: 0
                            }
                        }} />
                        </div>
                </div>
                
            </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}