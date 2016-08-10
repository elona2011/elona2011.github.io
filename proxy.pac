function FindProxyForURL(url, host) {
    if ( dnsDomainIs(host, "google.com") ) {
        alert("google");
        return "PROXY 127.0.0.1:1080";
    } else {
        alert("no google");
        return "DIRECT";
    }
}