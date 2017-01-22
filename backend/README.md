
# node-starter

Le Node Starter Pack utilise [express](http://expressjs.com/) comme framework. Il offre un serveur roulant par défaut
sur le port 3000. Il est également intégré avec le SDK de AWS, ainsi que [Bookshelf](http://bookshelfjs.org/) pour la
communication avec la base de données et [Node Redis](http://redis.js.org/) pour la communication avec Redis.
De plus, un exemple de projet de test est offert incluant [Mocha](https://mochajs.org/), [Chail](http://chaijs.com/) et [Istanbul](http://gotwarlost.github.io/istanbul/). Évidemment, vous devrez avoir Node 6.9.1 LTS (ou plus récent) d'installé sur votre ordinateur.

Finalement, le logging est configuré pour utiliser AWS CloudWatch logs avec [Winston](https://github.com/lazywithclass/winston-cloudwatch).

# Tutoriels recommandés
- [Getting started with Bookshelf](https://www.sitepoint.com/getting-started-bookshelf-js/)
- [Getting started with Express](https://expressjs.com/en/starter/installing.html)

# Exécuter

Lancer la commande:
```sh
npm start
```

# Exécuter les tests

Lancer la commande:
```sh
npm test
```

Pour afficher la couverture de test en détails, lancer la commande:
```sh
npm run coverage
```
