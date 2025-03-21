const getData = async () => {
    const response = await fetch(
        "https://cdn.dinero.today/api/latest.json"
    );
    const data = await response.json();
    return data;
};

export default getData;