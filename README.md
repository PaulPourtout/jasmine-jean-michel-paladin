Jean-Michel Paladin est prêt à partir à l’aventure mais son chemin est semé d’embûches. Il est cerné par ses ennemis, les affreux Balrog, Gobelin et Squelette qui l’empêchent d’avancer et d’arriver à destination. Jean-Michel Paladin doit faire preuve d’intelligence et de force pour venir à bout de ses ennemis avant d’être vaincu lui-même.

Vous devez donc créer le jeu qui permettra à Jean-Michel de triompher de ses ennemis.


# A FAIRE

1. écrire des tests unitaires petit à petit pour chaque fonction de la classe `Character`
2. en parallèle, coder les fonctions de la classe `Character` les unes après les autres et faire passer tous les tests au vert
3. répéter les deux premières étapes pour la classe `Player`, puis pour la classe `Enemy`,
4. coder la classe `World`
5. écrire des tests unitaires petit à petit pour les fonctions `_gameOver`, `_setActions` et `_enemiesTurn` de la classe `Game`
6. en parallèle, coder les fonctions de la classe `Game` les unes après les autres et faire passer tous les tests au vert


# Architecture

#### Avant de commencé la partie, il faut :
- initialiser le joueur
- initialiser chaque ennemi
- initialiser le monde

#### Lorsque le jeu débute :
- afficher "Ainsi débutent les aventures de `nom_du_joueur`"

#### Lorsque le jeu est fini :
- afficher "Game Over"
- afficher "Vous avez gagné!" ou "Vous avez perdu!"


## classe Character

#### Attributs
- `name`
- `healthPoints`
- `isAlive`
- `damageTable`, objet contenant les clés `min`, `max` et `bonus`

#### constructeur(name)
- Initialise `name` à la valeur de la variable `name`
- Initialise `healthPoints` à `100`
- Initialise `isAlive` à `true`
- Initialise les clés `min`, `max` et `bonus` du hash `damageTable` respectivement à `1`, `10` et `0`

#### méthode toString
- Renvoie le nom et les points de vie si le personnage est en vie
- Renvoie le nom et "vaincu" si le personnage est mort

#### méthode _calculateDamage(min, max, bonus)
- Renvoie une valeur au hasard contenue entre `min` et `max`, à laquelle on additionne un `bonus`

#### méthode _suffersAttack(damagePoints)
- Réduit les points de vie du personnage en fonction des dégats reçus
- Détermine si le personnage est toujours en vie ou non
- Accessoirement, affiche le nombre de points de vie perdus et si le personnage est mort

#### méthode attacks(character)
- Calcule les dégâts infligés au personnage ciblé
- Fait subir des dégats au personnage passé en paramètre
- Accessoirement, affiche le nombre de points de dégâts infligés au personnage ciblé


## classe Player (hérite de la classe Character)

#### constructeur(name)
- Initialise la clé `min` du hash `damageTable` à `10`
- Initialise la clé `max` du hash `damageTable` à `30`

#### méthode increaseDamageBonus
- Additionne une valeur au hasard contenue entre `2` et `12` à la clé `bonus` du hash `damageTable`
- Accessoirement, affiche le nombre de points bonus gagné

#### méthode heal
- Ajoute une valeur au hasard contenue entre `10` et `30` à `healthPoints`
- Les points de vie du joueur ne peuvent pas dépasser la valeur `100`
- Accessoirement, affiche le nombre de points de vie récupéré


## classe Enemy (hérite de la classe Character)

Rien de neuf sous le soleil


## classe World

#### Attributs
- `player`
- `enemies`

#### constructeur(player, enemies)
- Crée le joueur nommé `Jean-Michel Paladin`
- Crée 3 ennemis nommés `Ghost`, `Skeleton`, `Zombie` et les stocke dans le tableau `enemies`


## classe Game

#### Attributs
- `world`
- `turn`
- `actionsTable`

#### constructeur()
- Initialise `world` en créant un nouveau monde
- Initialise `turn` à 1
- Initialise `actionsTable` avec un tableau vide

#### méthode _gameOver(world)
- Renvoie vrai si le joueur est en vie et qu'il y a encore des ennemis en vie, sinon renvoie faux

#### méthode _setActions()
- Renvoie un tableau de hashes contenant les actions possibles pour le joueur et les stocke dans l'attribut `actionsTable`
- Une `action` est un hash composé d'un `texte` et d'une `function`

#### méthode _enemiesTurn()
- Joue le tour des ennemis. Chaque ennemi vivant attaque le joueur à chaque tour.

#### méthode _turn()
- Affiche le numéro du tour
- Affiche l'état du joueur (points de vie)
- Définit et affiche les actions possibles pour le joueur
- Demande au joueur l'action qu'il désire choisir
- Réalise l'action choisie par le joueur
- Génère le tour d'attaque des ennemis
- Incrémente `turn` de 1

#### méthode _gameLoop()
- Lance un nouveau tour tant que le jeu n'est pas fini
- Si le jeu est fini, affiche si le joueur a gagné ou perdu
