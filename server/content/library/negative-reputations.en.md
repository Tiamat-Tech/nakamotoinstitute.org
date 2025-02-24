---
title: Negative Reputations
authors:
  - nick-szabo
date: 1996
categories:
  - cryptography
doctype: essay
external: http://szabo.best.vwh.net/negative_rep.html
---

An important and general problem seems to be that of tagging a negative behavior source for future recognition. The tag might be used for negative information shared publically (eg, credit ratings) or kept private (eg, kill files). The behavior source might be non-human (eg, recognizing virus patterns for the purposes of virus scanning). Where the behavior source is adaptable and self-interested, it has an incentive to spoof the tagging: a debtor to change names to avoid paying his debt, a virus to scramble its pattern to avoid scanning, and so on. If the tag carries a greater positive reputation (where zero is the reputation of a newcomer) this incentive is lost and the negative side of the reputation — the disreputation — must be borne.

Can digital credentialling systems facilitate such negative reputation handling?

Service-specific, aka local, nym reputation may not be able to accomplish such tracking of negative reputation. If a local nym accumulates more negative than positive credentials, it can simply be replaced by a newcomer local nym for this service, without harming the positive reputation capital of the other behavior source local nyms. Hostile sources can continuously spoof innocent newcomers. Counterparties lose the ability to determine a history of previous hostile behavhior — kill files, virus scanning, credit ratings, etc. fail.

[Chaumian credentials](/library/security-without-identification/) also give the credential holder control over the transfer of credentials between his local nyms, creating an incentive to show positive credentials and hide negative ones. To remedy this, counterparties can demand "non-negative credentials" (in a form such as, "Alice in many transactions recorded by me in area X has never done bad things x,y,z"), Non-negative credentials are limited to areas that can be well-tracked. One such may be credit ratings, as long as one is doing the bulk of one's credit transactions through is-a-person linked local nyms.

Where Chaumian credentials are inapplicable, we might raise the cost of entry to be greater than that of a newcomer. This gives us two clearly defined reputation points to compare on an otherwise rather subjective scale: participation threshold and newcomer reputation. Both are subjective in the eye of the party choosing whether or not to participate in an activity with the nym.

A participation threshold greater than newcomer reputation clashes with the desirable goal, that one be able to make a fresh start. For that matter, unless previous nyms and their positive reputations are linked to their new nyms, the pioneers cannot make a start, so that the institution itself cannot be started. Ditto for for institutional growth.

Tags that bundle the results of a wide variety of transactions — global nyms, aka universal IDs, aka "True Names" — seem to provide the most incentive for parties to carry their negative credentials. Most people have accumulated enough positive reputation is some areas that it is well-nigh impossible for them to start over their entire lives as newcomers.

A big problem arises with negative credentials when they are used, not merely to avoid engaging in a particular activity with a party, but for retribution against that party. Retribution may take some nonviolent online form, such as slander, denial of service attack, and so on, but the most worrisome form of retribution is a violent physical attack. Could we have digital tags that, while tracking negative behavior sources through the digital world, remain strictly unlinked to any kind of physical location data? Alas, we have several important systems, such as cellular phones, shipping addresses, etc. that provide such linkage.

The question may become one of deciding what of these three dimensions are most important, and how they can be traded off:

- The gains to be had from tracking and thereby avoiding negative behavior sources
- The gains to be had from a nonviolent digital world (ie, a virtual realm within which any digital action can have no physically violent consequences).
- The inconvenience (and perhaps impracticality) of partitioning the physical and digital worlds into different ID systems (more realistically, some "pure" subset of the digital world completely partitioned from location devices, physical shipping information, etc.)

Keep in mind too, that in practice these are evaluated primarily by a market evolving from its current state, rather than by abstract ethical philosophies.

Robin Hanson has noted that in a world of global nyms, the use of a local nym may signal the hiding of negative credentials, so that the use of global nyms is in equilibrium. A further problem with local nyms is that our relationships are often not neatly compartmentalizable into standard service types, and even where they are we might like to expand them into new areas. I suggest that, at minimum, we will want to reveal progressively more local nyms to our counterparties as our relationships with them become closer and more co-exposed.

While the global nym equilibrium may hold for many of our relationships, there may be plenty of areas where the [privity](/smart-contracts-glossary/#privity) benefits of localizing nyms outweigh the costs of being less or unable to differentiate newcomers from hostiles. (By "privity" I refer the entire general task of protecting relationships from hostile third parties; confidentiality and protection of property from theft are two examples of privity). For example, the preference-tracking service at www.firefly.com increases participation via the use of pseudonyms, and suffers little exposure from hostiles. On the other hand, credit transactions typically demand identifying information, because the contractual exposure typically outweighs benefits of privity.

Global nym public keys, which have many drawbacks in terms of privity, may be the best way to track negative reputation, but they are no panacea. There is an important conundrum in an ID-based key system: the conflict between the ability to get a new key when the old one is or could be abused by another (key revocation), and the ability of another to be sure they are dealing with the same person again. This may also provide an opportunity for parties to selectively reveal positive credentials and hide negative ones. For example, a person with a bad credit rating could revoke the key under which that rating is distributed and create a new one, while selectively updating their positive credentials to the new key (eg, have their alma mater create a new diploma). Key revocation [authorities](/distributing-authorities-and-verifying-their-claims/) might combine forces with credit rating agencies to avoid such erasure of negative history, but this gives them even more centralized control — not merely over IDs but over important elements of reputation associated with those IDs. This further violates the principles of separation of powers and segregation of duties, providing added opportunity for fraudulent issue or revocation of IDs along with fraudulent communication of reputation information.

The current universal (non-cryptographic) key in the U.S., the SSN, is very difficult to revoke. Much easier to change your name. This policy is probably no accident, since the biggest economic win of global nym identification is the tracking of negative reputations, which revocation can defeat. As long as the SSN is a shared database key, not used for the purpose of securely identifying a faceless transaction, there is little need for revocation beyond the undesired erasure of negative history. Combining a secret authentication key, which must be revocable, with a public universal ID is quite problematic.

---

Please send your comments to nszabo (at) law (dot) gwu (dot) edu

Copyright &copy; 1996 by Nick Szabo\
Permission to redistribute without alteration hereby granted
