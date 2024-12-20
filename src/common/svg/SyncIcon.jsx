
export const SyncIcon = ({
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
                d="M20.3752 13.387V11.9902C20.3752 7.36219 16.6139 3.60938 11.9752 3.60938C10.7132 3.60783 9.46724 3.89093 8.32989 4.43761C7.19253 4.98429 6.19314 5.78047 5.4061 6.76688M3.60001 10.6106V12.0075C3.60001 16.6406 7.35938 20.3906 12 20.3906C13.2583 20.3888 14.5004 20.1063 15.6357 19.5636C16.7709 19.0209 17.7708 18.2318 18.5625 17.2538"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="square"
            />
            <path
                d="M1.5 12L3.5625 9.9375L5.71875 12M22.5 12L20.4375 14.0625L18.2812 12"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="square"
            />
        </svg>
    );
};