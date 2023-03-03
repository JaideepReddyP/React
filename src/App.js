import './App.css';
import Footer from './components/Footer'
import Apples from './components/Apples';
import Pears from './components/Pears';
import Bag from './components/Bag';

function App() {
    return (
        <Bag>
            <Apples color="yellow" number="5" />
            <Pears friend="Peter" />
        </Bag>
    )
}

export default App;
