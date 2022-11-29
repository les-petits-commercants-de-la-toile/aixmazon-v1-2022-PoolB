# Module e-commerce Licence Pro ECUE41 - Front Store Next.js

# Objectif

Module e-commerce Licence Pro ECUE41 - Front Store Next.js
L'objectif est de réaliser un `storefront` (ou vitrine) basé sur [NextJS](https://nextjs.org/) en utilisant [l'API de WooCommerce](https://woocommerce.com/document/woocommerce-rest-api/)

## Mise en route

:zap: Cette année pour la 1ère fois vous allez gagner du temps en utilisant [devcontainers](https://containers.dev/), que ce soit en local sur votre machine dans vscode ou via [Github Codespaces](https://github.com/features/codespaces).

Pour donner suite au TD2, je vous invite à parcourir le dépôt, en particulier les fichiers suivants:
1. [devcontainer.json](.devcontainer/devcontainer.json) : en particulier ce que déclenchent `updateContentCommand` et `postAttachCommand`
1. [Makefile](Makefile) : il permet facilement d'initialiser et réinitialiser en un instant (j'ai opté pour composer pour initialiser Wordpress notamment)
1. [setupWordPress.sh](.scripts/setupWordPress.sh) : il permet d'automatiser la configuration Wordpress à l'aide de [wp-cli](https://wp-cli.org/fr/). Beaucoup plus rapide et reproductible que de cliquer partout dans le wp-admin :zap:
1. [generateEnv.sh](.scripts/generateEnv.sh) : il permet de notamment gérer le côté dynamique du de l'identifiant POSIX de votre utilisateur/groupe ainsi que du host exposé en fonction d'une exécution en local ou via codespaces.

Veuillez noter que j'ai essayé de respecter au mieux les [12 factors](https://12factor.net/fr/), que nous aurons l'occasion de revoir pendant le module docker.

> **Note**
> Si vous avez bien parcouru ces fichiers, alors vous savez quels identifiants utiliser pour vous connecter sur /wp-admin du wordpress :wink:


## Règles


### Équipes

Vous formez des équipes de 3 à 4, ces équipes font partie d'un Pool.

### Pair programming en équipe

Chaque équipe doit fonctionner selon le principe de [pair](https://en.wikipedia.org/wiki/Pair_programming) ou [mob](https://en.wikipedia.org/wiki/Mob_programming) programming. Cela consiste à ce qu'une seule personne à la fois - par tranche de 15 à 20 minutes - code. Les autres personnes du groupe doivent alors remplir ces rôles en parallèle :
1. **Relecteur/ice** : suggérer des meilleures façons de faire, corriger des erreurs.
2. **Se documenter** : aller chercher la connaissance et revenir avec des solutions pour faire gagner du temps à celui/celle qui code.
3. **Testeur/ice** : à minima, faute d'écrire des tests automatisés, tester la fonctionnalité en parallèle sur un autre ordinateur
4. **Planificateur** : lire la prochaine issue, la comprendre et se renseigner pour aider à la démarrer le plus vite possible (il est possible d'ajouter des commentaires à une issue, c'est idéal pour la compléter avec des informations utiles à sa réalisation)

Vous devrez successivement vous relayer sur chacun de ces rôles.

### Pull requests

chaque équipe qui prendra une issue devra la soumettre sur Github par système de [pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests), afin que je puisse relire et apprécier le travail. Chaque équipe devra soumettre ses pull requests à destination de la branche qui porte le nom de son Pool (`PoolA` ou `PoolB`).

### Pools

Enfin, les équipes seront réparties dans 2 pools. Chaque pool sera en concurrence et devra réaliser exactement les mêmes issues par équipe.

À la fin du TD, un pool sera désigné vainqueur sur l'ensemble du travail réalisé. Chaque équipe sera également évaluée pour son travail au sein de chaque pool.

:trophy: Le Pool qui obtiendra la meilleure réalisation aura droit à une bonnification. :trophy:


# Paiement carte de test Stripe

```
4111 1111 1111 1111
03/30 737
```
