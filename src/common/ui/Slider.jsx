
export const Slider = ({
    min = 0,
    max = 50,
    id,
    value,
    onChange,
    name,
    className = '',
}) => {
    return (
        <div className={className}>
            <input
                type="range"
                id={id}
                name={name}
                min={min}
                max={max}
                className="w-full h-[2px] bg-secondary appearance-none cursor-pointer accent-primary
                [&::-webkit-slider-thumb]:appearance-none 
                [&::-webkit-slider-thumb]:h-5 
                [&::-webkit-slider-thumb]:w-5
                [&::-webkit-slider-thumb]:bg-primary
                [&::-webkit-slider-thumb]:border-2
                [&::-webkit-slider-thumb]:hover:bg-warning
                [&::-moz-range-thumb]:h-5 
                [&::-moz-range-thumb]:w-5
                [&::-moz-range-thumb]:bg-primary 
                [&::-moz-range-thumb]:border-2
                [&::-moz-range-thumb]:hover:bg-warning"
                onChange={onChange}
                value={value}
            />
        </div>
    );
};
