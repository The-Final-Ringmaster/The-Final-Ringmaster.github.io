# Writing a Worthless Cryptocurrency with Python
###### _By Mj Minkus_
###### _Written on Aug 16 2020_
---
### ***Intro***
So. You've most likely already heard of the massive cryptocurrency boom from around two years ago(at time of writing). You might be wondering,
> How does all this work?

> Is it easy to do?

> Could _I_ make a cryptocurrency of my own?

My answers to those questions are I Don't Really Know, Probably Not and Yes. That last one actually depends on your programming skill and your goals with this, but the following tutorial assumes that you know how to do these things is Python:

1. Create Classes and methods
2. Create functions
3. Read and write files
4. Manipulate data in multiple ways
5. Use the following modules:
+ Datetime

From what I've done, those are the only things you need to know to create a worthless cryptocurrency.

---

### *Chapter 1*: **Defining your cryptocurrency**

First thing you need to know: what defines your new, amazing cryptocurrency. This includes things like:
* How much real money a single token of _your_ crypto is worth
* Your logo ( _really_ important )
* How many decimal points can you have
* Your symbol ( Bitcoin's is BTC )
* How much of the token can be in circulation at once

You might be wondering,
>But Mj, you said that this cryptocurrency would be worthless! why are we assigning a price to it?

Well, it's mostly for fun. Imagining that your crypto actually has value drives you to go on.

The currency that _we_ are going to make will have the following properties:
* 1 Of our crypto is the same as 10 GBP  
* Our crypto will have 7 decimal points  
* Our crypto symbol will be SHC ( Sheep Coin )
* There will be a maximum of 1 Million SheepCoins in circulation

---

### *Chapter 2*: **How our crypto will work**

So, you might have heard the word "Blockchain" thrown around a lot in the crypto business, and you might be wondering what one is. Well, simply explained, it's a publicly available chain of blocks of data like transactions and mining. This is what basically all cryptocurrencies are built on.  

Our cryptocurrency will consist of two of these blockchains: One for transactions, the other for mining.

###### _SUBCHAPTER 2.1:_ Mining
Now, some of you may be thinking,
> What is this "mining" that you keep talking about?

The answer to that is, well, complicated. I won't bother explaining since I don't want to get this chapter too long. [This link should do nicely though.](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjMsJ-z0Z_rAhUNQxUIHVzcAjwQFjACegQICxAF&url=https%3A%2F%2Fwww.webopedia.com%2FTERM%2FC%2Fcryptocurrency-mining.html&usg=AOvVaw06xX2QWcZ7gGe6aY-ShSA_)

Anyway, when a miner receives a request for calculating a bunch of important data for the economy of the crypto, we will have a one in twenty chance of them receiving 0.5 SheepCoin ( £5 ).

###### _SUBCHAPTER 2.2:_ Chain Optimization
Since we are coding this in Python, which is interpreted, we have to take in account how slow this will really be if it becomes successful. This program would have to do hundreds of server-client connections to send blocks back and forth. Python isn't particularly quick compared to compiled languages like C. So we're going to need to keep a limit for how many blocks can be in a blockchain at once. **_Our crypto will have a limit of 200 blocks per chain._** Here's how our limiting system will work:
1. Server receives info for a block
2. Checks if block is transaction or mine
3. Appends block to required chain.
4. Checks if chain is now longer than 200.  
_If_ **True** :  
Deletes earliest block in chain.  
_If_ **False** :  
Continues as normal.

---

## *Chapter 3*: **Block Structure**

Now, you might be wondering what our blocks will consist of.
