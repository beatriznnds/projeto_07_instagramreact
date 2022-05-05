import Menu from './Menu';
import Sidebar from './Sidebar';
import Stories from './Stories';
import Posts from './Posts';
import BgMobile from './BgMobile';

export default function Instagram () {
    return (
        <div class="root">
            <Menu />
            <div class="corpo">                
                <div class="esquerda">
                    <Stories />
                    <Posts />
                    <Sidebar />
                </div>
                <BgMobile />
            </div>
        </div>
    )
}