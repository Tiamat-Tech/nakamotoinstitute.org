---
title: The Killer App of Liberty
authors:
  - daniel-krawisz
date: 2013-05-29
excerpt: "If Bitcoin becomes money, the government’s control of money will have\
  \ ended."
image: bitcoincarebears.gif
image_alt: Bitcoin Carebears
series: crypto-anarchy-and-libertarian-entrepreneurship
series_index: 3
---

[_Chapter 1: The Strategy_](/mempool/crypto-anarchy-and-libertarian-entrepreneurship-1/ "Crypto-Anarchy and Libertarian Entrepreneurship – Chapter 1: The Strategy")

[_Chapter 2: Public-Key Cryptography_](/mempool/crypto-anarchy-and-libertarian-entrepreneurship-2/ "Crypto-Anarchy and Libertarian Entrepreneurship – Chapter 2: Public-Key Cryptography")

---

## How Bitcoin Works

Unquestionably the greatest example of the kind of free community that can be created using cryptography is [Bitcoin](http://bitcoin.org/), the system of digital cash invented by Satoshi Nakamoto, whose real identity remains unknown. Bitcoin uses all the principles I have described in the previous chapters. It is built upon free software and it uses public-key cryptography to establish identities and to ensure the validity of the messages relayed upon it.

Bitcoin is a peer-to-peer digital cash that is independent of banks and government. For a detailed explanation of how Bitcoin works, Satoshi's [original paper](/bitcoin/) is very readable,[^1] but it works exactly along the lines I [outlined above](/mempool/crypto-anarchy-and-libertarian-entrepreneurship-2/). Each person has one or more wallet files which contain a public and private key. Bitcoin software can construct messages signed by the private key of a wallet which state that the title to a given amount of bitcoin is transferred to another wallet.

The history of all Bitcoin transactions are stored in a publicly available database called the block chain. The block chain is duplicated across many computers. The amount of bitcoin that a wallet contains is known by reading the block chain. This is how Bitcoin uses the system of reputation I descrbed above. The wallet's prior history determines what it is capable of. If it has spent all the bitcoin that have been sent to it, than it can spend no more.

Thus, cryptography ensures that bitcoin behave like physically scarce commodities even though they are simply magnitudes in a computer. No new bitcoin can be created because it cannot be traced to any valid history in the block chain. Transactions cannot be spoofed because they require a digital signature by the wallet which spends them.

<figure>
  <img src="/static/img/library/bitcoin/transactions.svg" alt="" />
</figure>

The block chain is generated by a process engineered to ensure that there is always a consensus as to the transaction history. The reason this is a concern is that it is possible to make two or more transactions which individually are valid, but which are incompatible with one another. For example, suppose someone has at least one bitcoin but less than two, and he makes two transactions that each spend one bitcoin at the same time. Everyone must agree on which transaction is accepted and which is rejected.

This is done by making blocks difficult to generate by requiring that they satisfy certain arbitrary rules. In return for transaction fees and unowned bitcoin, people run their computers to try to generate new blocks. Once one is created, it has priority and it is difficult to produce a competing block. The creator of the block decides which transactions go in it. As the block chain grows, it becomes exponentially more difficult to produce a rival chain that branches off at a given time in the past.

Bitcoin is not as anonymous as one might want. Although there is nothing to prove who owns a given wallet, it is possible to scan the block chain for clues that could link a wallet to a person. This is Bitcoin's most significant disadvantage. However, a possible bitcoin upgrade called [Zerocoin](http://blog.cryptographyengineering.com/2013/04/zerocoin-making-bitcoin-anonymous.html) in the works would allow for greatly improved anonymity.[^2]

There is dispute among Austrian economists as to whether Bitcoin is actually suitable or even possible as money. However, the critics of Bitcoin are simply ignorant. Their love of gold exceeds their objectivity.[^3] I will not attempt an economic analysis of Bitcoin here, but Austrian writers such as Peter Šurda and Konrad Graf have demonstrated with great clarity that Bitcoin is perfectly good as a currency and that no economic law would be violated if it should become money.[^4]

## Thinking Ahead

Bitcoin is an enormous improvement over PayPal, credit cards, banks, and it is even superior to gold in many ways. It can be teleported instantly anywhere in the world without relying on any institution other than a distributed network of computers. A Bitcoin wallet, properly secured, cannot be stolen. Banks are obsolete. It is more difficult to create new bitcoin than to create gold. It would be possible to create a machine that makes gold with nuclear reactions. It would be much more difficult to convince the Bitcoin community to accept a change to their software that would allow their currency to be inflated. Bitcoin is potentially, and I believe very probably, one of the greatest inventions in history. It fights squarely on the side of libertarians.

If Bitcoin becomes money, the government's control of money will have ended. There will be no more banks for governments to collude with. The dark age of inflation will be over. Though Bitcoin is only four years old, it has already shaken world markets. Almost anything that is sold online can be bought with it. Argentinians and Iranians use it to escape capital controls. US regulators are [openly mocked on television](http://video.cnbc.com/gallery/?video=3000166533 "CFTC Explores Bitcoin") for expressing the possibility of regulating it. Its growth is already astonishing, and as it grows, it only becomes more useful. It is like [the Blob](http://www.youtube.com/watch?v=HCtcgI4BcIQ). No one can stop it.

The black market is flowering to a degree that would have seemed impossible a few years ago. By relying on Bitcoin and [Tor](https://www.torproject.org/ "Tor Project"), [the Silk Road website](<http://en.wikipedia.org/wiki/Silk_Road_(marketplace)> "The Silk Road") hosts a market for contraband. It does not have to hide its existence. This supreme website remains open to all in self-assured defiance of the war on drugs. The State cannot discover where it is hosted. Its bank account cannot be shut off.

This is the world we live in. Bitcoin is a game-changer. It challenges the status quo around the world. That is what is possible with cryptography. Yet Bitcoin is only an application of what I have described in [chapter 1](/mempool/crypto-anarchy-and-libertarian-entrepreneurship-1/ "Crypto-Anarchy and Libertarian Entrepreneurship – Chapter 1: The Strategy"). Bitcoin is not just an online forum with secret emoticon signals or something. It is a real-life community and a real-life commodity, though it is built only upon a cryptographic protocol and some software that implements it. Vastly more is possible. Any community that is founded upon cryptography might be as powerful as Bitcoin. All that is needed is a new application.

The Bitcoin network provides us with an example of libertarian legislation. The Bitcoin protocol is a law that anyone who interacts with the Bitcoin network must adhere to. Otherwise, the network will not accept him. Its author is not an elected representative, but an anonymous genius who simply left his proposal for us to adopt.

<figure>
  <img src="/static/img/mempool/crypto-anarchy-and-libertarian-entrepreneurship-3/blockchain.png" alt="The Blockchain" />
</figure>

As a matter of libertarian strategy, we should convince people to use cryptography more generally. We can do this by making new cryptographic products and making them so that people will love them. The more that people are used to the idea of a cryptographic community, the more that they will demand it. The more they get, the less powerful the oppressors become. We need a cryptographic stock market. We need a cryptographic system of contract resolution. We need a cryptographic credit-rating system. We need a cryptographic social network.[^5] All of these dreams are possible, and much more that is still beyond my imagination. None require winning an election, but each could change the world.

---

[_Chapter 4: The Risk From the Software Industry_](/mempool/crypto-anarchy-and-libertarian-entrepreneurship-4/ "Crypto-Anarchy and Libertarian Entrepreneurship – Chapter 4: The Risk From the Software Industry")

[^1]: Nakamoto, S., ["Bitcoin: A Peer-to-Peer Electronic Cash System"](/bitcoin/), 2008\.

[^2]: Miers, I., Garman, C., Green, M., Rubin, A., ["Zerocoin: Anonymous Distributed E-Cash from Bitcoin"](http://spar.isi.jhu.edu/~mgreen/ZerocoinOakland.pdf), 9 Apr 2013.

[^3]: See Gertchev, N., ["The Moneyness of Bitcoin"](http://mises.org/daily/6399/The-Moneyness-of-Bitcoins), Mises Daily, 14 Apr 2013 for an article that substitutes subjective preference for economic theory. See Korda, P., ["Bitcoin: Money of the Future or Old-Fashioned Bubble?"](http://mises.org/daily/6401/Bitcoin-Money-of-the-Future-or-OldFashioned-Bubble), Mises Daily, 9 Apr 2013 for a lot of irrelevant non sequiturs. See Shostak, F., ["The Bitcoin Money Myth"](http://mises.org/daily/6411/The-Bitcoin-Money-Myth), Mises Daily, 17 Apr 2013 for the most absurd Bitcoin article I have ever seen.

[^4]: See Šurda, P., ["Economics of Bitcoin: is Bitcoin an Alternative to Fiat Currencies and Gold?"](/static/docs/economics-of-bitcoin.pdf), 2012 for an excellent and detailed analysis of Bitcoin. Also see the author's [blog](http://www.economicsofbitcoin.com/). See Graf, K., ["Bitcoins, the Regression Theorem, and that Curious but Unthreatening Empirical World"](http://konradsgraf.com/blog1/2013/2/27/in-depth-bitcoins-the-regression-theorem-and-that-curious-bu.html), 23 Feb 2013 for a wonderful discussion of Bitcoin and the regression theorem. Also see that author's [blog](http://konradsgraf.com/).

[^5]: There is a wonderful program called [RetroShare](http://retroshare.sourceforge.net/) that replicates many of Facebook's features over an encrypted, distributed network with no central server. However, this program still needs a lot of work before it has a chance of becoming popular.
