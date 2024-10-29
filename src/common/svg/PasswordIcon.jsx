export const PasswordIcon = ({
    size = 24,
    primaryColor = "#FF003C",
    accentColor = "#00F0FF",
    className = "",
    strength,
    ...props
}) => {
    const firstColor = strength >= 1 ? accentColor : primaryColor;
    const secondColor = strength >= 2 ? accentColor : primaryColor;
    const thirdColor = strength >= 3 ? accentColor : primaryColor;
    const fourthColor = strength >= 4 ? accentColor : primaryColor;
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <rect x="2" y="18" width="20" height="3" fill={firstColor} />
            <rect x="2" y="13" width="20" height="3" fill={secondColor} />
            <rect x="2" y="8" width="20" height="3" fill={thirdColor} />
            <rect x="2" y="3" width="20" height="3" fill={fourthColor} />
        </svg>
    );
};