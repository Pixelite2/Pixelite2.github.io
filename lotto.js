// Add JavaScript code for your web site here and call it from index.html.
const form = document.getElementById('LottoCalculator')

const lottotime = (event) => {
    event.preventDefault();

    let v1 = parseInt(document.getElementById('v1').value) * 50 || 0;
    let v2 = parseInt(document.getElementById('v2').value) * 50 || 0;
    let v3 = parseInt(document.getElementById('v3').value) * 50 || 0;
    let v4 = parseInt(document.getElementById('v4').value) * 30 || 0;
    let v5 = parseInt(document.getElementById('v5').value) * 30 || 0;
    let v6 = parseInt(document.getElementById('v6').value) * 20 || 0;
    let v7 = parseInt(document.getElementById('v7').value) * 20 || 0;
    let v8 = parseInt(document.getElementById('v8').value) * 20 || 0;
    let v9 = parseInt(document.getElementById('v9').value) * 20 || 0;
    let v10 = parseInt(document.getElementById('v10').value) * 10 || 0;
    let v11 = parseInt(document.getElementById('v11').value) * 10 || 0;
    let v12 = parseInt(document.getElementById('v12').value) * 10 || 0;
    let v13 = parseInt(document.getElementById('v13').value) * 10 || 0;
    let v14 = parseInt(document.getElementById('v14').value) * 5 || 0;
    let v15 = parseInt(document.getElementById('v15').value) * 5 || 0;
    let v16 = parseInt(document.getElementById('v16').value) * 5 || 0;
    let v17 = parseInt(document.getElementById('v17').value) * 5 || 0;
    let v18 = parseInt(document.getElementById('v18').value) * 3 || 0;
    let v19 = parseInt(document.getElementById('v19').value) * 2 || 0;
    let v20 = parseInt(document.getElementById('v20').value) * 2 || 0;
    let v21 = parseInt(document.getElementById('v21').value) * 2 || 0;
    let v22 = parseInt(document.getElementById('v22').value) || 0;
    let v23 = parseInt(document.getElementById('v23').value) || 0;
    let v24 = parseInt(document.getElementById('v24').value) || 0;

    let vso = v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9 + v10 + v11 + v12 + v13 + v14 + v15 + v16 + v17 + v18 + v19 + v20 + v21 + v22 + v23 + v24;

    let b100 = parseInt(document.getElementById('b100').value) || 0;
    let b50 = parseInt(document.getElementById('b50').value) || 0;
    let b20 = parseInt(document.getElementById('b20').value) || 0;
    let b10 = parseInt(document.getElementById('b10').value) || 0;
    let b5 = parseInt(document.getElementById('b5').value) || 0;
    let b1 = parseInt(document.getElementById('b1').value) || 0;
    let bc = parseFloat(document.getElementById('bc').value) || 0;
    let bmisc = parseFloat(document.getElementById('bmisc').value) || 0;
    let cash = b100 + b50 + b20 + b10 + b5 + b1 + bc + bmisc;

    let olns = parseFloat(document.getElementById('olns').value) || 0;
    let pays = parseFloat(document.getElementById('pays').value) || 0;
    let loan = parseFloat(document.getElementById('loan').value) || 0;
    let pick = parseFloat(document.getElementById('pick').value) || 0;

    let wtotal = parseFloat(document.getElementById('wtotal').value) || 0;
    let total = vso + cash - olns + pays - loan + pick;
    let off = total - wtotal;


    const outputlot = document.getElementById('output');
    outputlot.innerHTML = `
        <p>Here's the totals you need to write on the Lotto Form!</p>
        <p>Scratch-Off: ${vso}</p>
        <p>Cash: ${cash}</p>
        <p>Cash Balance from the bigger paper: ${olns}</p>
        <p>Pays from the Smaller Paper: ${pays}</p>
        <p>Loans: ${loan}</p>
        <p>Unaccounted Pickups: ${pick}</p>
        <p>Your total is: ${total}</p>
        <p>You are off a total of: ${off}</>
        `;

}

form.addEventListener('submit', lottotime);




