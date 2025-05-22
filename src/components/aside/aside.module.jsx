import MenuSide from "../navMenu/menuSide.module.jsx";
import styles from "./aside.module.css";

import { BaseballCap, UserGear, Browsers  } from '@phosphor-icons/react';

export default function Aside() {
  return (
    <div>
      <aside className={styles.aside}>
        <MenuSide icon={BaseballCap} titulo={"Peças"} />
        <MenuSide icon={Browsers} titulo={"Visualização"} />
        <MenuSide icon={UserGear} titulo={"Clientes"} />
      </aside>
    </div>
  );
}