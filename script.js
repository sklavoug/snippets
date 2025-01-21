function map_it() {

    // Data (snippets)
    var data =[[-33.8835835,151.1963671, '10/07/2024 13:35', "Ohh they *do* have Mentos!"],
            [-33.9112859,151.1525396, '20/07/2024 10:58', "Well you're not carrying that home."],
            [-33.8837118,151.1114214, '25/07/2024 19:21', 'The bin is interesting.'],
            [-33.8721458,151.2037548, '26/07/2024 12:26', 'Yeah I *said* Dexter.'],
            [-33.8602911,151.2035154, '26/07/2024 12:46', 'They have different Starbucks here. (American accent)'],
            [-33.913159,151.1595189, '04/08/2024 11:15', 'It is a symbol of decay.'],
            [-33.9095094,151.152181, '07/09/2024 09:42', "I wouldn't spill coffee on Frank (Green keepcup)"],
            [-33.8673486,151.2083067, '26/11/2024 12:46', "He said 'sent from my iPhone', like a dickhead."],
            [-33.8704662,151.203047, '28/11/2024 12:46', "Where are the bevvies? It's a bit weird."],
            [-33.8845771,151.2155423, '05/12/2024 19:55', 'Who was spreading rumours that I went to Orange?'],
            [-33.8673486,151.2083067, '12/12/2024 13:28', 'I prefer to rent tech.'],
            [-33.8665421,151.2108345, '13/12/2024 18:11', 'I love my family but I hate my family'],
            [-33.610032,115.0929636, '23/12/2024 16:35', 'I see why people eat this.'],
            [-34.7758397,150.6943268, '31/12/2024 08:46', 'Are you on Facebook?'],
            [-33.8655707,151.196616, '18/12/2024 17:19', "Nah man crack a beer; what are they gonna do about it?"]
    ]

    // Create map
    let map = L.map('map').setView([-25.4815226,134.9387853], 5);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Add data to map
    data.forEach(add_to_map);

    function add_to_map(item) {
        L.marker([item[0], [item[1]]]).addTo(map).bindPopup(item[3]);
    }

    // TODO: Filtering on date/time
    // TODO: Filtering on words from selection
    // TODO: Colouring of markers based on type of location

    
}