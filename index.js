let selectedPlayers = [];
 
function addToPlayer(element) {
  if (selectedPlayers.length === 5) {
    alert('You are already added maximum number of players')
    return selectedPlayers;
  }
   
const playerName = element.parentElement.parentElement.getAttribute("data-name");

  // add players in the card
   if (!selectedPlayers.includes(playerName)) {
    selectedPlayers.push(playerName);

    //disable button
    element.innerText = "Selected";
    element.disabled = true;

    // Display the updated list of selected players
    displaySelectedPlayers();
  } 
  else {
    alert(playerName + " is already selected!");
  }
}

function displaySelectedPlayers() {
  const selectedPlayersList = document.getElementById("players-cart");
  
  //count number of the players 
  const totalPlayer = document.getElementById("total-select");
  totalPlayer.innerText = selectedPlayers.length

  // Clear previous list
  selectedPlayersList.innerText = '';

  // display each selected player
  selectedPlayers.forEach((player, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    <li class='flex font-bold text-xl text-white justify-start'>${index + 1}. ${player}</li>                           
    `;
    selectedPlayersList.appendChild(listItem);

  });
}
//display player budget
  document.getElementById('btn-calculate').addEventListener('click',function(){
    const perPlayer = document.getElementById('per-player-field').value;
    const convertedPerPlayer = parseInt(perPlayer);
      const playerExpense = document.getElementById('player-expenses');
      const playerCost = selectedPlayers.length   * convertedPerPlayer;
      playerExpense.innerText = playerCost;
    
    document.getElementById('btn-calculate-total').addEventListener('click',function(){
      const managerField = document.getElementById('manager-field').value;
      const convertedManagerField = parseInt(managerField);
      const coachField = document.getElementById('coach-field').value;
      const convertedCoachField = parseInt(coachField);
  
      const playerExpenseTotal = document.getElementById('total')
      const playerCostTotal = playerCost + convertedManagerField + convertedCoachField;
      playerExpenseTotal.innerText = playerCostTotal;
    })
  
  })

 
  
