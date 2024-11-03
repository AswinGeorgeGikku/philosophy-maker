const paradoxes = [
    "The Barber Paradox: In a village, the barber shaves all those who do not shave themselves; does he shave himself?",
    "The Paradox of the Unexpected Hanging: If a prisoner is told he will be hanged on a weekday but that the day will be a surprise, can he ever predict the day?",
    "The Sorites Paradox: If one grain of sand does not make a heap, how many grains are needed to form one?",
    "The Ship of Theseus: If every part of a ship is replaced over time, is it still the same ship?",
    "The Omnipotence Paradox: Can an all-powerful being create a stone so heavy that it cannot lift it?",
    "The Paradox of Time Travel: If you travel back in time and prevent your own existence, how could you have traveled back at all?",
    "The Paradox of Free Will: If every decision is determined by prior events, can we truly be said to make free choices?",
    "The Liar Paradox: If someone says 'I am lying,' is the statement true or false?",
    "Hilbert's Hotel: If a hotel with infinitely many rooms is full, how can it accommodate one more guest?",
    "The Tortoise and Achilles: If Achilles gives the tortoise a head start in a race, how can he ever catch up?",
    "The Paradox of the Prefect: In a perfectly just society, what happens to the concept of justice?",
    "The Paradox of Confirmation: Does confirming a theory with evidence strengthen it, or does the evidence merely reflect a bias?",
    "The Paradox of the Two Envelopes: If one envelope contains twice the amount of money as the other, which should you choose?",
    "The Paradox of Personal Identity: If all my cells are replaced over time, am I still the same person I was years ago?",
    "The Paradox of Vagueness: If a person can be 'tall,' at what exact height does one become 'tall'?",
    "The Paradox of Tolerance: Should a tolerant society tolerate intolerance, or does doing so undermine tolerance itself?",
    "The Paradox of the Great Filter: If intelligent life is rare, does that mean we are the first or the last?",
    "The Paradox of Knowledge: If knowledge is power, is ignorance truly bliss?",
        "The Paradox of the Tractatus: If a representation can depict a state of affairs, how can it represent the world while remaining external to it?",
        "The Bootstrap Paradox: If a time traveler presents Shakespeare with his own works, who truly authored the text?",
        "The Trolley Problem: Is one ethically justified in diverting a runaway trolley to kill one person rather than five?",
        "The Paradox of the Omniscient Observer: If an all-knowing entity can foresee every human decision, does true free will exist?",
        "The Paradox of Epistemic Closure: If knowing requires an awareness of one’s knowledge, how can certainty be attained?",
        "The Revisited Ship of Theseus: If a vessel comprises entirely of the original parts of the Ship of Theseus, does it retain the essence of the original?",
        "The Paradox of Infinite Regress: If every answer provokes further inquiry, can one ever arrive at a conclusive truth?",
        "The Experience Machine Paradox: If one could engage with a machine delivering all pleasures devoid of authentic experience, would one choose illusion over reality?",
        "The Paradox of the Unexpected Event: If an individual predicts an unforeseen event, does this not negate its unexpected nature?",
        "The Paradox of Self-Reference: When a statement says, 'This sentence is false,' what is its truth value?"
    ];    
document.getElementById('generate-btn').onclick = function() {
    const randomIndex = Math.floor(Math.random() * paradoxes.length);
    document.getElementById('philosophy').innerText = paradoxes[randomIndex];
};
