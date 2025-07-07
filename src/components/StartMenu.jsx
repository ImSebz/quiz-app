function StartMenu({ topics, onStart }) {
    return (
        <div className="menu">
            <h1>Quiz de Marketing Digital</h1>
            <h2>Selecciona un tema:</h2>
            {topics.map((topic) => (
                <button key={topic} onClick={() => onStart(topic)}>
                    {topic}
                </button>
            ))}
        </div>
    )
}

export default StartMenu