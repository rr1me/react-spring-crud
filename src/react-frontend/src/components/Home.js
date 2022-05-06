import './Home.css'

export default function Home(){
    return (
        <div className='home'>
            <h4>hi, this is my learning project aka simple react-spring rest crud app</h4>
            <hr />
            <h5>Technologies used:</h5>
            <ul>
                <li>
                    <a>Javascript</a>
                    <ul>
                        <li>Node.js</li>
                        <li>React</li>
                    </ul>
                </li>
                <li>
                    <a>Spring Boot</a>
                    <ul>
                        <li>Spring Web</li>
                        <li>Spring Data JPA</li>
                        <li>Lombok</li>
                        <li>Postgres</li>
                    </ul>
                </li>
                <li>
                    <a>Between</a>
                    <ul>
                        <li>Axios</li>
                        <li>CORS</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}