export function WeatherItem({ weatherItem }) {
    return (
        <div className="weatherItem">
            <h2>{weatherItem.stacja}</h2>
            <p>Temperatura: {weatherItem.temperatura} st. C.</p>
            <p>
                Ciśnienie:{" "}
                {weatherItem.cisnienie
                    ? weatherItem.cisnienie + " hPa"
                    : "brak danych"}
            </p>
        </div>
    );
}
