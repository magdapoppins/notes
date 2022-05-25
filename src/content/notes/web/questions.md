# Web development interview questions and example answers

1. What happens when you enter an address in your search engines address bar?

- A DNS lookup is preformed, where the corresponding ip to domain name you typed in is fetched. It might be fetched from a DNS server, or if you have viewed done the same lookup before, it may be cached on your computer, or if someone using the same ISP has viewed it, it might be found in their cache.
  1. Check the local cache
  2. Ask the ISP (internet service provider) cache - if someone using the same providers connection visited the site, the IP may be found here
  3. Ask the name servers: the ISP asks the root name server, which points to a TDL (top level domain) server (e.g. ".org"), which then points you to a host name server that can give you the requested IP.
- Once you have the IP of the domain name in the url you entered, the browser performs a HTTP request to that IP
- The host sends back some metadata and a response
- The browser renders that response

2. What is the difference between HTTP and HTTPS?
   HTTPS uses transport layer security (TLS) which adds a layer of security on top of the TCP/IP protocol. TLS uses symmetric encryption and public key encryption. It increases the latency of communication sligtly due to the encryption and decryption steps introduced.
   Here is an overview of a communication over TSL: 1. First we do a three-way TCP handshake initiated by the client (syn - ack syn - ack) 2. The client then initiates TLS by sending over info of what TLS protocol version and encryption technique it wants to use 3. If the server supports that protocol version, it confirms and sends back its digital certificate, containing its public key. Otherwise it aborts the communication. 4. The client verifies the certificate - if it isn't authentic, the connection is aborted 5. Because symmetric encryption is _much_ faster than public key encryption, the public key is only used to send over a generated symmetric key. The client creates, encrypts and sends a pre-master key to the server. 6. The server computes the shared key from the pre-master key and responds with a message encrypted by the shared key. 7. Now the two can communicate securely using a shared key.

3. Why would one choose to use a library like React over just plain HTML+JS?
   One reason is that writing code becomes faster sice you can make use of pre-existing functionality. Another reason is that due to the shadow dom provided by eg. React or web component libraries like lit, you can refresh a part of the page without refreshing the whole e.g. list when one of the values changes.
