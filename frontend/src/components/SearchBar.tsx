import "./SearchBar.css";

type Props = {
    value: string;
    onChange: (value: string) => void;
};

export default function SearchBar({
    value,
    onChange,
}: Props) {
    return (
        <input
            className="search-bar"
            type="text"
            placeholder="Search by vendor or filename..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}