In the year 1928, Otto Frederick Rohwedder invented the first single loaf bread-slicing machine, a technological advancement which would propel America forward decades, nay, centuries into the future–an invention on par with that of the wheel. Ever since Rohwedder's incredible breakthrough, historians have utilized the invention of sliced bread as a reference point for greatness against which all subsequent inventions can be compared. For instance, the invention of FM radio by Edwin H. Armstrong in 1933 rates at about a 0.65 on the sliced bread scale, meaning that it was about 65% as great as the invention of sliced bread.

Given a list of 𝑁 historical inventions, with the dates that they were invented and their ratings on the sliced bread scale, determine once and for all what objectively is the greatest thing since sliced bread?

Input
The first line of input contains the integer 𝑁 (1≤𝑁≤104) which is the number of invention descriptions to follow. Then, each invention description consists of three lines. The first line gives the title of the invention. The second line gives the date that the invention was made, in the format 'MMM DD, YYYY' where the month is a three-letter abbreviation (Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec) and the day value (between 1 and 31) is one or two digits long. The third line of an invention description gives the invention's sliced bread score as a decimal value between 0 and 1 (clearly no invention could exceed the greatness of sliced bread).

Output
Print out the title of the greatest invention since sliced bread, which is the one with the highest sliced bread score. Consider sliced bread to have been invented on Jul 7, 1928, such that any invention made after that date was invented 'since sliced bread.' Note that there will always be at least one invention made since sliced bread, and there will never be ties for greatest invention.

Example
inputCopy
5
FM Radio
Dec 26, 1933
0.65
Ballpoint Pen
Oct 30, 1888
0.7442
Penicillin
Sep 28, 1928
0.0036
The Hovercraft
Dec 12, 1955
0.896
Fireworks
Apr 20, 960
0.99999
outputCopy
The Hovercraft