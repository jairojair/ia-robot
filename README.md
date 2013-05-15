ia-robot
========

Projeto da disciplina de Inteligência Artificial.


O Problema do labirinto
=======================

Considere um labirinto, onde um robô deve caminhar da entrada, até encontrar o ponto de recarga de sua bateria
(Ponto Final). O labirinto é representado como uma matriz de 10x10.

A entrada do labirinto está na posição (1,1) da matriz (Estado Inicial), e o ponto final está em uma posição qualquer 
(aleatória) da matriz. 

Os possíveis movimentos do robô são: 

- Posição atual ---> (x,y) 
- Cima ------------> (x+1,y) 
- Baixo -----------> (x-1,y)
- Direita ---------> (x,y+1)
- Esquerda --------> (x,y-1)

O robô somente enxerga a posição imediatamente cima, baixo, direita e esquerda.

Definir uma heurística que faça o robô, caminhar da posição (1,1) até o ponto final, considerando as seguintes situações.

--
**a. As posições da matriz podem ser divididas em dois tipos:**

- Posições com obstáculos, pelos quais o robô nao poderá passar (posições obscuras).
 
- Posições sem obstáculos ( Posições claras) pelas quais o robô pode caminhar. 

*Obs.* A posição dos estados inicial e final nao podem ser posições obscuras.

--
**b. O robô inicia sua caminhada pelo labirinto com 50 "pontos" de energia, e a cada movimento, perde 1 ponto, o jogo pode terminar de duas formas:**

- Quando chega a zero ele "morre" e o jogo termina ( perdeu ).

- Quando chega a posição final p jogo também termina ( ganhou).

--
**c. Considerar duas opções que o sistema deverá ter:**

- O estado final está na posição (10,10) e o estado final está em uma posição aleatória.

- As posições obscuras são aleatórias, e o numero delas são entre 10 e 30 posições, isto significa que o labirinto é aleatório.

- Todas as posições claras são idênticas, ou podem existir posições de recuperação de energia ( 5 posições onde recupera 5 pontos em cada uma e 3 onde recupera 10 pontos, estas posições são aleatórias.

Exemplo de Labirinto:
![image](assets/img/repo/labirinto.png)

