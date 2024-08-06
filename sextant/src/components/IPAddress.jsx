import { useEffect, useState } from "react";

const IPAddress = ({IPType}) => {

    const [fetchedIP, setFetchedIP] = useState("");

    const fetchIPAddress = async (IPType) => {
        let apiUrl = "";
        if (IPType === "IPv4") apiUrl = "https://api.ipify.org";
        else if (IPType === "IPv6") apiUrl = "https://api6.ipify.org";
        else {
            return;
        }
        const response = await fetch(apiUrl);
        const data = await response.text();
        setFetchedIP(data);
    }

    useEffect(() => {
        fetchIPAddress(IPType)
    }, [IPType]);

    return (
        <>
        <p>{`User's public ${IPType} address ${fetchedIP}`}</p>
        </>
    );
}

export default IPAddress;