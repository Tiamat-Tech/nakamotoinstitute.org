---
title: The Proof-of-Work Concept
authors:
  - daniel-krawisz
date: 2013-06-24
excerpt:
  Proof-of-work should not be seen as a mysterious or wasteful system, but
  as something functional, natural, and potentially of value for the design of any
  communication protocol.
image: peacock.jpg
image_alt: Peacock
---

## The Search

Perhaps the least intuitive aspect of the Bitcoin network is the [proof-of-work](https://en.bitcoin.it/wiki/Proof_of_work) concept it uses to define the requirement for the generation of a new set of transactions ("[block](https://en.bitcoin.it/wiki/Block)") to be added to the distributed transaction database ("[block chain](https://en.bitcoin.it/wiki/Block_chain)"). This concept, which grew out of ideas from the early cypherpunk movement[^1], is new to monetary theory and feels a little out of place in computer science too. I will show that biology gives us the most suitable framework for understanding it.

All the blocks in the Bitcoin block chain have a short string of meaningless data—called a [nonce](https://en.bitcoin.it/wiki/Nonce)—attached to them. The [mining](https://en.bitcoin.it/wiki/Mining) computers are required to search for the right meaningless string such that the block as a whole satisfies a certain arbitrary condition. Specifically, it is required that the SHA-256 hash of the block have a certain number of leading zeros.[^2] [Hashes](http://en.wikipedia.org/wiki/Cryptographic_hash_function) are one-way functions, so there is no easy way to find the right nonce or otherwise to engineer a block to be correct. The only known way to find a good nonce is to simply to try randomly until one turns out to work. Khan Academy provides a visual explanation of proof-of-work:

<p class="text-center">
	<iframe width="560" height="315" src="//www.youtube.com/embed/9V1bipPkCTU" frameborder="0" allowfullscreen></iframe>
</p>

The procedure, remember, is totally arbitrary. It is simply an added complication, like a ritual, so as to make blocks more difficult to generate. Really anything else would do, as long as it was computationally difficult. Other crypto-currencies use other hash algorithms. There is no special condition from number theory which only someone like [Shinichi Mochizuki](http://www.kurims.kyoto-u.ac.jp/~motizuki/top-english.html) could understand.[^3]

<figure>
  <img src="/static/img/mempool/the-proof-of-work-concept/mining.jpg" alt="" />
</figure>

Although the purpose of the mining computers is to do the accounting for the block chain, most of the work they actually do is to search for good nonces, rather than anything to do with accounting. The energy used to find the nonces is lost forever. The energy does not "back" the value of bitcoins in the way that gold backs an honest bank note, as some have supposed. Of the vast computing power that goes into bitcoin mining, all but a tiny fraction is apparently purposeless.

<figure>
  <img src="/static/img/mempool/the-proof-of-work-concept/asicminer.jpg" alt="" />
</figure>

When a person upgrades their mining computer, they mine at a faster rate and therefore earn more bitcoins. However, when everyone upgrades, the mining does not become more efficient as a whole. There is only supposed to be one new block every ten minutes regardless of how hard the network is working. Instead, the network [updates the difficulty](http://bitcoindifficulty.com/) to require more stringent conditions for future blocks. All miners may work harder, but none is better off. It is rather like a forest, in which every tree tries to grow as tall as possible so as to capture more light than its fellows, with the end result that most of the solar energy is used to grow long, dead trunks.

Why tie each bitcoin block to a difficult [Procrustean](http://en.wikipedia.org/wiki/Procrustes) bed? The correct way of thinking about the proof-of-work concept is as a means for a group of self-interested people, none of whom is subordinate to any other, to establish a consensus against a considerable incentive to resist it. Bitcoin could operate perfectly well without proof-of-work, as long as everyone was perfectly honest and altruistic. If they are not, then reaching a consensus is difficult.

Before a new block is generated, there might be many payments floating around the network and there is not yet any objective answer as to which payments should go through. Some might be invalid, so they all need to be checked. Some might not include any transaction fee, so there also must be a decision as to whether to be nice and allow these free riders to go through or whether to ignore them. Finally, there may be a set of two or more payments such that not all can be simultaneously valid, but certain subsets of it are valid. For example, one wallet might try to spend the same bitcoins twice at the same time. In that case, there is an arbitrary choice over which payments to allow.

Thus, for a given set of payments, there may be many possible blocks which can be constructed from them, none of which is objectively the most correct one. There will not necessarily be any agreement over which outcome is preferable because different possible blocks will have different benefits for different people. There is, first of all, the reward that comes from generating a block of a set of new bitcoins. This is necessary because without it there would be little incentive for anyone to do the accounting in the first place; but with a reward available, each miner naturally would prefer the new block to be his proposal rather than anyone else's.

There are other more subtle complications even without considering the reward. A miner might refuse to validate transactions which come from his enemy, or he might be more or less altruistic as to what kinds of fees he will accept. He might even wish to scam someone else by double spending: in this scenario, he would send a payment to a victim in exchange for a good, but would only validate a second conflicting payment he made at the same time to another wallet which he also owns. This would make his first payment invalid, and he would therefore end up with a good he did not pay for.

With so many reasons to want to manipulate the block chain for their own purposes, the miners might well agree in the abstract on the need for a consensus without ever agreeing on any concrete proposal. Bitcoin's solution is to add extra requirements to the protocol which greatly increase the cost of defection. If blocks are generated randomly by a difficult computation, there will be only one proposed new block at a time. Once a new block is proposed, the miners have the choice of continuing to search for an alternative more favorable to themselves or accepting the new proposal and searching for the next one. Everyone who accepts the latest block understands that he is following a natural consensus and that, if he is lucky enough to generate the next block, it will probably be accepted for the same reasons that he accepted the last one. On the other hand, to hold so as to try to produce a more favorable block is very risky because he would have to convince enough of the rest of the miners to go along with him that he can establish a new consensus.

The general rule is that the first block mined is not self-interested because no one can plan on being first. One can only be first by luck. Any hold-outs are suspect because to generate it, the miner had to make a choice to reject a perfectly good and presumably altruistic alternative. Not an easy thing to do.[^4]

## The Handicap Principle

<figure>
  <img src="/static/img/mempool/the-proof-of-work-concept/handicap.jpg" alt="" />
</figure>

There is an idea from biology called the [Handicap Principle](https://en.wikipedia.org/wiki/Handicap_principle) which sheds light on this process.[^5] It says that when two animals have an incentive to cooperate they must communicate good intentions to one another in a believable way. In order to make lying implausible, the signal must impose a cost on the signaler that would make it very costly to cheat. In other words, the signal itself must be a handicap.

This can be understood in terms of the [Prisoner's Dilemma](https://en.wikipedia.org/wiki/Prisoner%27s_dilemma), a famous idea from game theory which has applications to an enormous range of phenomena. The Prisoner's Dilemma has two players, each with two options: cooperate or defect. Ordinarily, the game is explained in terms of a story about two prisoners who each has the option of either keeping silent or ratting out the other. The essential features of the Prisoner's Dilemma are that each player is better off choosing to defect regardless of the other player's choice, and that the greatest benefit goes to him who defects when the other cooperates. The players might both be better off if they both cooperate rather than both defect, but since they have no way to ensure cooperation, they will both choose to defect.

The Handicap Principle solves the problem of the Prisoner's Dilemma by allowing an earlier step to the game in which each player has the option of doing something that convincingly removes the benefit of defection over cooperation. It is hard to think of how to make the Handicap Principle work with the story of the two prisoners, but suppose they have a moment together with the prosecutor and one of the prisoners with a particularly good understanding of game theory says to the prosecutor, "If the other prisoner is guilty, than I am equally guilty." This statement is a clear cost to himself because it removes his ability to defect when the other prisoner cooperates. The other prisoner then has the option of repeating the statement. If he does not, then he knows that the first prisoner's only viable option is to defect, but if he does, then both prisoners can be expected to cooperate. This is the Handicap Principle.

The Handicap Principle has been applied successfully to a diverse range of biological phenomena. To give a concrete example, suppose a prey animal notices a predator stalking it. Both animals would benefit if the prey could communicate to the predator that it is no longer unaware: the predator would not want to hunt further if it had lost the element of surprise and the prey would not be hunted. However, the prey could start randomly saying, "I see you!" even when it sees no predator, just to deter any which might happen to be there. As long as the prey might be lying, the predator cannot take its signal at face value and must ignore it.[^6]

Within a species, the handicap principle explains a lot about how animals compete with one another and interact with their mates. For example, among deer, the buck with the biggest antlers are the strongest and best specimens because any smaller deer who tried to grow larger ones would seriously risk using more energy and nutrients on them than they can handle. Thus, second-rate bucks end up with second-rate antlers and the third-rate bucks end up with third-rate antlers, and so on.[^7]

In a social species, the handicap principle explains much about ethics and altruism. Just as members of a species can differentiate themselves in strength and heath with a handicap like horns or antlers, members of a social species can use altruism as a handicap to distinguish one another. For example, The Handicap Principle describes a social bird called the Arabian Babbler that competes over altruism. The most powerful and dominant birds demonstrate their superiority by spending time on guard duty for the rest of the flock and by feeding nestlings and lower-ranking birds. Babblers do not like to be fed by other babblers of a similar rank because they do not like to feel inferior. The Handicap Principle even describes an observation in which one bird fed a worm to another bird only to have the same worm forced straight back down his own throat![^8]

Proof-of-work should not, therefore, be seen as a mysterious or wasteful system, but as something functional, natural, and potentially of value for the design of any communication protocol. If a distributed system of computers is owned by one person, he can assume that they will all cooperate because he controls their behavior. When this is not the case, there is a real need for different computers to prove that they are working toward the same goal. The universality of the Handicap Principle in biology should be enough to make one suspect that a protocol which does not impose costs on its users invite abuse. It is interesting to think of how many problems with the Internet can be ascribed to a failure to account for this principle. If proof-of-work had been understood when email was invented, there might never have been a [spam](<https://en.wikipedia.org/wiki/Spam_(electronic)>) problem. If the Internet Protocol could require proof-of-work for client requests, we might not have to worry about [Distributed Denial of Service](https://en.wikipedia.org/wiki/Denial-of-service_attack) (DDOS) attacks.[^9]

The Bitcoin proof-of-work system can be compared to both antlers and altruism. The ability to generate blocks is a show of computational strength, which is just what the Bitcoin network needs to help verify all the transactions. But it is also a show of community spirit because by agreeing to enter the contest for the next block, they show themselves to be willing to respect the interests of the community rather than manipulate the block chain for self-interested purposes. This is just the sort of thing that should be expected to hold a community together.

## Bitmessage

A more recent application of proof-of-work is [Bitmessage](https://bitmessage.org/wiki/Main_Page), which is an anonymous, distributed, encrypted message protocol which could one day be almost as important as Bitcoin.[^10] It was inspired by Bitcoin, but it works quite differently. There is no block chain in the Bitmessage protocol because there is no need to store all messages forever in a database. Instead, Bitmessage requires everyone who sends a message to perform some work before the network will relay it. This ensures that every message will be meaningful: no spammer could afford to let his computer run for a minute or so for every message he sends. Proof-of-work is essential because a distributed network that relies on computation donated by its users cannot afford to allow free-riders. It is in its early stages presently and it has not yet been studied sufficiently to be considered secure, but it has enormous potential as an alternative to e-mail.

## PPCoin and Proof-of-Stake

A discussion of proof-of-work would not be complete without a discussion of [PPCoin](http://ppcoin.org/), the third most popular crypto-currency after Bitcoin and Litecoin.[^11] PPCoin also uses proof-of-work so as to make defection unprofitable, but the costs are distributed very differently among the miners: those miners who have held a lot of PPCoin for a long time suffer much less stringent requirements for producing a block than those who have held few PPCoin and who have held them for a shorter time. This means that people will not tend to follow the consensus proposed by the person with the most powerful computer, but rather the person who has demonstrated the greatest investment in the currency. Miners are distinguished by something more like seniority than strength. When a miner creates a new block in the PPcoin block chain, he has to trade in some of his old coins to get the new ones—meaning that everyone who creates a block is less able to create the next one. This system is called proof-of-stake.

Proof-of-work and proof-of-stake have different costs and benefits under different circumstances. According to the Handicap Principle, the costs imposed to produce a signal must be related to the meaning of the message. A proof-of-stake system demonstrates investment in the coin itself whereas a proof-of-work system in the underlying network.

Thus, if there were a proof-of-work network and a proof-of-stake network which both had the same market cap, one would therefore expect the proof-of-work coin to have a bigger network with a higher capacity and to be more liquid than the proof-of-stake network whereas the proof-of-stake coin would have the greater price stability.

The proof-of-work system discourages an antisocial miners from manipulating the block chain by making it difficult to rely consistently on the network to accept his blocks. The proof-of-stake system, by contrast, discourages antisocial miners by accepting only blocks from miners who have an incentive to ensure that the commodity remains absolutely trustworthy. Because the proof-of-stake is used up as new blocks are generated, there is continual turnover in who is able to mine, and thus less incentive to specialize in maintaining the block chain.

In its early stages, a crypto-currency network requires long-term investment in the coin itself so as to gain credibility and value, whereas a larger, more mature network would be more likely to require specialization in the network infrastructure to ensure that it functioned properly.

This is an academic discussion. It is counterproductive to back any cryptocurrency other than Bitcoin. It is not to be expected that ordinary consumers would choose one currency over another because of obscure technical details that do not affect their use for it as a currency. They will be much more likely to choose whichever is more widely accepted. Someone who thinks PPCoin is more rational has little expectation of PPcoin beating Bitcoin, but he might have a chance of convincing the Bitcoin community to adapt a proof-of-stake system in some future version of Bitcoin. Although this is theoretically possible and might have benefits, the Bitcoin miners already form a vested interest in the present system and would therefore tend to oppose such an innovation.

[^1]: See Back, A., ["Hashcash - A Denial of Service Counter-Measure"](/static/docs/hashcash.pdf), 1 Aug 2002, for a description of the proof-of-work concept and its applications by its original inventor.

[^2]: See Nakamoto, S., ["Bitcoin: A Peer-to-Peer Electronic Cash System"](/bitcoin/), 2008.

[^3]:
    A world-class mathematician conjectured for superficial reasons to be the creator of Bitcoin by [Ted Nelson](https://www.youtube.com/watch?v=emDJTGTrEm0). He is known both for purported proof of the [abc/Oesterlé-Masser-Szpiro conjecture](https://en.wikipedia.org/wiki/Abc_conjecture) and for his reluctance to advertise his work or to explain it to anybody. The proof is over 500 pages long and so original that no other mathematician yet fully understands it; if it were true, it would be a much bigger deal than the proof of Fermat's Last Theorem. See his website Mochizuki, S., ["Inter-Universal Geometer: Shinichi Mochizuki"](http://www.kurims.kyoto-u.ac.jp/~motizuki/top-english.html), 2013.

    However, there is no reason to expect the creator of Bitcoin to be a math genius. Bitcoin is a brilliant work of engineering, not of logical deduction. The mathematics required to create it might be found in an introductory cryptography course. Satoshi did not come up with any fundamentally new ideas; he simply put some existing ideas together in an extraordinarily useful new way.

    The reclusiveness of the two figures is also superficial. Mochizuki is a typical eccentric asocial mathematician, only just a bit more so. Nakamoto, on the other hand, was secretive about his identity for very good reasons. He was also not asocial: he was very active in the Bitcoin community until he felt that it no longer needed his guidance.

[^4]: Although this has happened once before. On March 13, 2013, a bug in version 0.7 of bitcoin-qt resulted in a conflict with version 0.8. The block chain forked, with each version of the software recognizing a different branch as valid. The community of bitcoin miners settled upon the version 0.7 branch as the one they would recognize even though it was the shorter one.

[^5]: See Zahavi, A., Zahavi, A., _The Handicap Principle: A Missing Piece of Darwin's Puzzle, Oxford University Press_, 1997 for a delightful presentation of this idea, written by the biologist who originally proposed it. Although this is a popular presentation without mathematics, it is not dumbed-down and it uses sophisticated biological arguments to make its point. The Handicap Principle was originally proposed in 1975, but did not become mainstream until the 90's.

[^6]: Zahavi, Zahavi, 1997, pp. 3-13.

[^7]: Zahavi, Zahavi, 1997, pp. 55-57.

[^8]: Zahavi, Zahavi, 1997, pp. 125-150.

[^9]: [Back, 2002](/static/docs/hashcash.pdf).

[^10]: See Warren, J., ["Bitmessage: A Peer-to-Peer Message Authentication and Delivery System"](https://bitmessage.org/bitmessage.pdf), 27 Nov 2012.

[^11]: See King, S., Nadal, S., ["PPCoin: Peer-to-Peer Crypto-Currency with Proof-of-Stake"](http://www.ppcoin.org/static/ppcoin-paper.pdf), 19 Aug 2012. This paper is not well-written and I do not recommend it.
