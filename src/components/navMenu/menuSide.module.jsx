import styles from './menuSide.module.css';

export default function MenuSide(props) {
    var Icon = props.icon;
    
    return(
        <div className={styles.menu}>
            <span className={styles.icon}> <Icon size={16} weight="fill" /> </span>
            <span>{props.titulo}</span>
        </div>
    )
}