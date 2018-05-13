1. Installare i pacchetti:
> npm install

2. Rinominare config.json.sample in config.json

3. Copiare nella cartella cert il certificato ptNetSuite_mqtt_ca.crt

4. Nel file config.json, nella sezione options, inserire username e password dell'utente del Network Server.

5. Nel file config.json, nella sezione topics, inserire tutti i topic di cui si vuole ricevere il payload:

  ...
  "topics": [
    "/sub/v1/users/aaa/shared/zzz/apps/1/devices/BBBBBBBBBBBBBBBB/uplink/+",
    "/sub/v1/users/aaa/shared/zzz/apps/1/devices/AAAAAAAAAAAAAAAA/uplink/+",
    "/sub/v1/users/aaa/shared/zzz/apps/1/devices/CCCCCCCCCCCCCCCC/uplink/+"
  ]
  ...
  
  6. Fare partire l'applicativo con il comando:
  
     node app.js
     
  7. Alla pagina localhost:3000 si troverà una pagina di esempio.
