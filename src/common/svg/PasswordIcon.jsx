export const PasswordIcon = ({
    size = 24,
    primaryColor = "#FF003C",
    accentColor = "#00F0FF",
    className = "",
    ...props
}) => {
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
            <rect x="2" y="18" width="20" height="3" fill={primaryColor} />
            <rect x="2" y="13" width="20" height="3" fill={primaryColor} />
            <rect x="2" y="8" width="20" height="3" fill={primaryColor} />
            <rect x="2" y="3" width="20" height="3" fill={accentColor} />
        </svg>
    );
};