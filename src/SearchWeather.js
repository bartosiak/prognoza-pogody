export function SearchWeather({ filterWeather }) {
    return (
        <div className="searchWeather">
            <form>
                <input
                    type="text"
                    placeholder="Szukaj"
                    onChange={(e) => {
                        filterWeather(e.target.value);
                    }}
                />
            </form>
        </div>
    );
}
