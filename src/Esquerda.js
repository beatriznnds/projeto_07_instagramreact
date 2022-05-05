import Sidebar from './Sidebar';
import Stories from './Stories';
import Posts from './Posts';

export default function Esquerda () {
    return (
        <div class="esquerda">
            <Stories />
            <Posts />
            <Sidebar />
        </div>
    )
}