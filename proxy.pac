function FindProxyForURL(url, host) {
    
     if (shExpMatch(host, "sne*"))
     {
          return "DIRECT";
     }
    
     return "PROXY timarray.internal.timbrasil.com.br:8080; DIRECT";
}