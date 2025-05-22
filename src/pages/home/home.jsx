import Aside from "../../components/aside/aside.module";
import Header from "../../components/header/header.module";

export default function Home() {
    return (
        <div>
            <Header />
            <main>
                <Aside />
            </main>

        </div>
    );
}