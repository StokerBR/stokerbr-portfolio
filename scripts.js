//Cria o span de cada letra de um bubble-text e adiciona seus listeners
for (let bubbleText of document.getElementsByClassName('bubble-text')) {
    
    let characters = bubbleText.getAttribute('data-text').split('');
    
    for (let character of characters) {
        
        let bubbleHover = document.createElement('span');
        bubbleHover.classList.add('bubble-hover');
        bubbleHover.append(character);
        
        bubbleText.append(bubbleHover);
        
        bubbleHover.addEventListener('mouseover', handleBubbleHover);
        bubbleHover.addEventListener('mouseout', handleBubbleHoverOut);
        
    }
    
}

//Realiza o efeito do bubble-hover
function handleBubbleHover(e) {
    
    let bubbleHover = e.srcElement;
    let bubbleHovers = [...bubbleHover.parentNode.children];
    let index = bubbleHovers.indexOf(bubbleHover);
    
    handleBubbleHoverClass(bubbleHovers, index, 3)
    
}

//Adiciona as classes adequadas a cada span, baseado no tamanho do efeito e no index passados
function handleBubbleHoverClass(bubbleHovers, index, size) {
    
    for (let i = 0; i <= size; i++) {
        
        let bubbleClass = i == 0 ? 'main' : `adjacent-${i}`;
        
        addBubbleHoverClass(bubbleHovers, index-i, bubbleClass);
        addBubbleHoverClass(bubbleHovers, index+i, bubbleClass);
        
    }
    
}

//Adiciona uma classe a um index de um bubble-hover da lista, se existir
function addBubbleHoverClass(bubbleHovers, index, bubbleClass) {
    
    if (index >= 0 && index <= bubbleHovers.length-1) {
        bubbleHovers[index].classList.add('active');
        bubbleHovers[index].classList.add(bubbleClass);
    }
    
}

//Limpa as classes dos bubble hovers
function handleBubbleHoverOut(e) {
    
    [...e.srcElement.parentNode.children].forEach((bubbleHover) => {
        bubbleHover.className = 'bubble-hover';
    })
    
}