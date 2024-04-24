export function iso8601ToSeconds(duration: string): number {
    // Verwende ein reguläres Ausdrucksmuster, um die Teile der ISO-Dauer zu extrahieren
    const matches = duration.match(/^P(?:([0-9]+)Y)?(?:([0-9]+)M)?(?:([0-9]+)W)?(?:([0-9]+)D)?(?:T(?:([0-9]+)H)?(?:([0-9]+)M)?(?:([0-9]+)S)?)?$/);
    
    if (!matches) {
        throw new Error("Invalid ISO 8601 duration format");
    }

    // Extrahiere die Teile der Dauer
    const years = matches[1] ? parseInt(matches[1]) : 0;
    const months = matches[2] ? parseInt(matches[2]) : 0;
    const weeks = matches[3] ? parseInt(matches[3]) : 0;
    const days = matches[4] ? parseInt(matches[4]) : 0;
    const hours = matches[5] ? parseInt(matches[5]) : 0;
    const minutes = matches[6] ? parseInt(matches[6]) : 0;
    const seconds = matches[7] ? parseInt(matches[7]) : 0;

    // Berechne die Gesamtzahl der Sekunden
    const totalSeconds = (
        years * 365 * 24 * 60 * 60 +
        months * 30 * 24 * 60 * 60 +
        weeks * 7 * 24 * 60 * 60 +
        days * 24 * 60 * 60 +
        hours * 60 * 60 +
        minutes * 60 +
        seconds
    );
    // console.log("ISO Zeit: ", duration, " Sekunden Zeit: ", totalSeconds)
    return totalSeconds;
}
