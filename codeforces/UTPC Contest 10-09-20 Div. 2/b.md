# Modern Gladiator

Alfonso is a little bit of an Ancient Rome history buff and he is particularly fascinated by the Roman gladiator fights of the time. In the hopes of sharing his passion with others, Alfonso started 'Modern Gladiator', a company which built replicas of armor and weaponry used by the ancient Roman gladiators. Unfortunately for Alfonso, demand for his products has been fairly low in the modern era so Alfonso has come up with a brilliant new idea. Utilizing the newly invented time machine, Alfonso travels back in time with all his constructed armor and weaponry to the year 81 AD, the year the gladiator fights started being held in the newly constructed Colosseum.

Alfonso sets up his shop at the base of the Colosseum and word quickly spreads of the new mason in town with his fancy armor and weapons. Due to the superior metallurgy technology available to Alfonso in the present, his products were kilometers ahead in terms of strength to his counter-parts in the past. After a successful demonstration, prospective buyers queued up to buy one of Alfonso's products. Alfonso looks around and realizes that one bronze coin is probably a fair price for each of his products. However, he also realizes since he has just come to this era from the future, he doesn't have any Roman change to give to his customers at the start.

Each customer, when they reach the front of the line, buys exactly one product (which costs one bronze coin) and hands Alfonso either one bronze coin, one silver coin, or one gold coin. Now, two bronze coins are equivalent in value to one silver coin and two silver coins are equivalent to a single gold coin (so four bronze coins are equivalent to a single gold coin). Given that Alfonso doesn't have any change to start with, figure out if Alfonso can successfully attend to all the 𝑛 customers (by giving each of them the appropriate amount of change when it is their turn to buy something) in the line.

Input
The first line will contain a single integer, 𝑛, representing the number of customers in the line (where 3≤𝑛≤105).

The following 𝑛 lines will each contain a string 𝑐𝑖 which will be one of three strings: 'gold', 'silver', and 'bronze' representing the coin that the 𝑖th customer pays with.

Output
'YES' if it is possible for Alfonso to attend to (aka give the appropriate amount of change to) all his 𝑛 customers and 'NO' otherwise.

Examples
## Input
4
bronze
bronze
silver
gold
## Ouput
YES

## Input
3
bronze
silver
gold
## Ouput
NO