export const handleState = (
    timeoutID: number,
    setState: React.Dispatch<React.SetStateAction<boolean>>
) => {
    clearTimeout(timeoutID);

    setState(true);

    timeoutID = setTimeout(() => {
        setState(false);
    }, 1000);
};
