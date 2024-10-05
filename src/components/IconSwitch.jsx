export const IconSwitch = (props) => {
    const { icon, onSwitch } = props;
    const iconClass = "material-icons switch-icon"
    return (
        <button className={iconClass} onClick={() => onSwitch(icon)}>
            {icon}
        </button>
    );
}