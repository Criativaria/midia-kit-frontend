
type pageMarker = {
    name: string,
    id: number
}

export function pageMarkers(){

    const Markers: pageMarker[] = [
        {
            name: "home",
            id: 0
        },
        {
            name: "onde me achar",
            id: 1
        },
        {
            name: "publico alvo",
            id: 2
        },
        {
            name: "metricas",
            id: 3
        }, 
        {
            name: "projetos",
            id: 4
        }
    ];

    return Markers;
    }