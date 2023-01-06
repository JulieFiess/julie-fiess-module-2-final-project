const textElement = document.getElementById('text') /*Create variable for class text*/
const optionButtonsElement = document.getElementById('option-buttons') /*Create variable for class option-buttons*/

function startGame() { /* Start the game*/
    showTextNode(1)
}

function showTextNode(textNodeIndex) { /* Create the function which displays the text and receives one argument*/ 
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex) /* Create variable which takes a text node for each one in the array and finds the text node with the current id */
    textElement.innerText = textNode.text /* Set inner next equal to the current text node */
    while (optionButtonsElement.firstChild) { /* While it has a first child, remove that child */
        optionButtonsElement.removeChild(optionButtonsElement.firstChild) 
    }

    textNode.options.forEach(option => { /* Loop through all the options with for each */
        if (showOption(option)) { /* If we can show it, we will execute the following code */
            const button = document.createElement('button') /* Create a button */
            button.innerText = option.text /* Set text */
            button.classList.add('btn') /* Add the button class so it's styled propertly */
            button.addEventListener('click', () => selectOption(option)) /* This will call the option we're on */
            optionButtonsElement.appendChild(button) /* Add the button */
        }
    })
}

function showOption(option) { /* Create the function */
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) { /* Create the function */
    const nextTextNodeID = option.nextText
    if (nextTextNodeID <= 0) {
        return startGame()
    }
    showTextNode(nextTextNodeID)
}

const textNodes = [
    {
        id: 1,
        text: 'Life gives you a seemingly insurmountable challenge. There is no known solution. You are desperate and experiencing a "dark night of the soul". (-Joseph Campbell)',
        options: [
            {
                text: 'Choice 1: Read a self-development book',
                nextText: 2
            },
            {
                text: 'Choice 2: Meditate',
                nextText: 3
            },
            {
                text: 'Choice 3: List your gratitudes',
                nextText: 4
            },
            {
                text: 'Choice 4: Journal',
                nextText: 5
            },
            {
                text: 'Choice 5: Practice visualization',
                nextText: 6
            },
            {
                text: 'Choice 6: Give up and run away in denial, refusing to grow.',
                nextText: 7
            } 
        ]
    },
    {
        id: 2, 
        text: 'Three book choices spontaneously appear in the air in front of you:',
        options: [
            {
                text: 'Man\'s Search for Meaning by Viktor Frankl ',
                nextText: 8
            },
            {
                text: 'The Power of Now by Eckhart Tolle',
                nextText: 9
            },
            {
                text: 'Mindset by Dr. Carol Dweck',
                nextText: 10
            }
        ]
    },
    {
        id: 3,
        text: 'You sit down to meditate...',
        options: [
            {
                text: 'Meditation technique 1: Become the witness and observe your thoughts, emotions, and anything that passes through your mind without identifying with them.',
                nextText: 11
            },
            {
                text: 'Meditation technique 2: Focus on your breathing.',
                nextText: 12
            }
        ]
    },
    {
        id: 4,
        text: 'As you begin to list all of your gratitudes, you notice the whole world change as you see it from a new perspective.',
        options: [
            {
                text: 'Continue with life, experiencing a whole different world through the lens of gratitude.',
                nextText: -1
            }
        ]
    },
    {
        id: 5,
        text: 'You glance around and find a journal and pen have conveniently been provided. As you deliver all your worries, distractions, and perseverations through your writing, you are able to process your thoughts and emotions and release them.',
        options: [
            {
                text: 'The overwhelming burden of your Life Challenge has been lifted! Continue your life as a liberated person.',
                nextText: -1
            }
        ]
    },
    {
        id: 6,
        text: 'As you clearly visualize your goal, including every step towards achieving it, you find that are able to progress in life, step by step, moving in the right direction toward your goal with continued improvement.',
        options: [
            {
                text: 'Continue the cycle of life challenges...',
                nextText: -1
            }
        ]
    },
    {
        id: 7,
        text: 'As you run away, denying the call of your life, you seem to be stuck in an endless loop...',
        options: [
            {
                text: 'Keep returning to your Life Challenge until you are able to face it.',
                nextText: -1
            }
        ]
    },
    {
        id: 8,
        text: 'You learn from Viktor Frankl that "Everything can be taken from a man but one thing: the last of the human freedoms - to choose one\'s attitude in any given set of circumstances, to choose one\'s own way".',
        options: [
            {
                text: 'Continue life\'s cycle of challenges with this newfound knowledge.',
                nextText: -1
            }
        ]
    },
    {
        id: 9,
        text: 'Eckhart Tolle teaches you that thinking is the cause of your problems!',
        options: [
            {
                text: 'Restart the cycle as NEW YOU as you incorporate this lesson in your life.',
                nextText: -1
            }
        ]
    },
    {
        id: 10,
        text: 'Dr. Carol Dweck\'s research is compellingly complete, proving that the way you think changes everything.',
        options: [
            {
                text: 'You are able to move past this challenge, ready to meet the next challenge of life!',
                nextText: -1
            }
        ]
    },
    {
        id: 11,
        text: 'As you observe everything that passes through your mind, you accept your thoughts and emotions (all of them!) and learn acceptance of yourself - the most difficult of all acceptances.',
        options: [
            {
                text: 'You are better prepared for the next round of challenges with this new life tool.',
                nextText: -1
            }
        ]
    },
    {
        id: 12,
        text: 'Focusing on your breathing results in emptying your mind and a profound peace.',
        options: [
            {
                text: 'You learned an important, replicable method of achieving peacefulness in times of stress!',
                nextText: -1
            }
        ]
    }
]

startGame()

/* Reference: Edited from "Build a Text Adventure Game with JavaScript" by Web Dev Simplified https://youtu.be/R1S_NhKkvGA  accessed 12/26/22*/