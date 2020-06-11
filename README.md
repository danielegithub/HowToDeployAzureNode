# HowToDeployAzureNode

> url dei progetti [https://wwww.lollem.com]

Progetto per deploy di una app web Node.js su azure

In questa solution di visual studio code ho creato un progetto, con le configurazioni necessare per poter funzionare su Azure.

**WebConfig**

> La parte principale è la configurazione del web.config, senza la quale l'applicazione non potrebbe mai funzionare. Infatti sono stati configurati i moduli per IIS

> Altro elemento fondamentale per il corretto funzionamento dell'applicazione è la configurazione dei file process.json o package.json, nel definiamo le dipendenze e il file di startup

###Abbiamo due modi per configurare l'avvio dell'applicazione:

- **package.json**:
  ```ruby
  {
  "name": "lollem",
  "description": "Esempio di webapi node su azure",
  "version": "0.0.1",
  "private": true,
  "license": "MIT",
  "author": "Daniele",
  "scripts": {
  "start": "node index.js"
  },
  "dependencies": {
  "express": "^4.17.1"
  }
  }
  ```
- **process.json**

```ruby
{
  "name": "lollem",
  "description": "Esempio di webapi node su azure",
  "version": "0.0.1",
  "private": true,
  "license": "MIT",
  "author": "Daniele",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.17.1"
  }
}

```
