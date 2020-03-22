import React, { useContext } from 'react';
import './Start.css';
import { Context } from '../../context';
import logo from './img/start-logo.svg'
import title from './img/title.svg'

function Start() {
    const { changeLevel } = useContext(Context);

    const ist = {
        fontSize: '1.25em',
        fontWeight: 'normal'
    }

    return (
        <div className="Start">
            <span className="start-logo">
                <img src={logo} alt="avito" />
            </span>
            <div className="start-header">
                <div className="title">
                    <img src={title} alt="Спаси Билли, Киану и Илона!" />
                </div>
                <div className="sub-title">
                    Герои мемов попадают в непростые ситуации в России
                </div>
            </div>
            <div className="start-content">
                <span>
                    После ЧМ по футболу в Россию стало приезжать больше иностранцев. Представь, что твоим соседом по лестничной площадке стал Илон Маск, Билли Айлиш или Киану Ривз. И они живут как обычные люди! Ходят в Пятёрочку, отдыхают на черноморском побережье, <a href="https://www.avito.ru/rossiya?utm_campaign=press_medialeaks.ru_160320&utm_medium=press&utm_source=medialeaks.ru&utm_term=2" target="_blank" rel="noopener noreferrer">совершают сделки на Авито.</a><br />Твоя задача — научить звезд совершать сделки на Авито правильно и безопасно. И если с “Пятёрочкой” все понятно, то с покупками и продажами в интернете все немного сложнее.
                </span>
                <p>
                    <i style={ist}>П</i>осмотрим, сможешь ли ты помочь иностранцам<br />и самому не попасть в непростую ситуацию!
                </p>
            </div>
            <button onClick={() => changeLevel('select')}>Играть</button>
        </div>
    );
}

export default Start;
