export const ArrowIcon = ({
    size = 24,
    color = "#00F0FF",
    strokeWidth = 2,
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
            <path
                d="M12.5625 5.25L19.3125 12L12.5625 18.75M18.375 12H4.6875"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="square"
            />
        </svg>
    );
};