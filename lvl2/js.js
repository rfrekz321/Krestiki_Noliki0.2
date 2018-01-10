var t = new Array(9);

function ai() {
    var id = Math.floor(Math.random() * 9);
    t[id] ? ai() : move(id, 'ai');
}

function checkEnd() {
    if (t[0] == 'ai' && t[1] == 'ai' && t[2] == 'ai' || t[0] == 'player' && t[1] == 'player' && t[2] == 'player') return true;
    if (t[3] == 'ai' && t[4] == 'ai' && t[5] == 'ai' || t[3] == 'player' && t[4] == 'player' && t[5] == 'player') return true;
    if (t[6] == 'ai' && t[7] == 'ai' && t[8] == 'ai' || t[6] == 'player' && t[7] == 'player' && t[8] == 'player') return true;
    if (t[0] == 'ai' && t[3] == 'ai' && t[6] == 'ai' || t[0] == 'player' && t[3] == 'player' && t[6] == 'player') return true;
    if (t[1] == 'ai' && t[4] == 'ai' && t[7] == 'ai' || t[1] == 'player' && t[4] == 'player' && t[7] == 'player') return true;
    if (t[2] == 'ai' && t[5] == 'ai' && t[8] == 'ai' || t[2] == 'player' && t[5] == 'player' && t[8] == 'player') return true;
    if (t[0] == 'ai' && t[4] == 'ai' && t[8] == 'ai' || t[0] == 'player' && t[4] == 'player' && t[8] == 'player') return true;
    if (t[2] == 'ai' && t[4] == 'ai' && t[6] == 'ai' || t[2] == 'player' && t[4] == 'player' && t[6] == 'player') return true;
    if (t[0] && t[1] && t[2] && t[3] && t[4] && t[5] && t[6] && t[7] && t[8]) return true;
}

function move(id, role) {
    if (t[id]) return false;
    t[id] = role;
    document.getElementById(id).className = 'cell ' + role;
    !checkEnd() ? (role == 'player') ? ai() : null : reset()
}

function reset() {
    alert("Игра окончена!");
    location.reload();
}

function secudomer() {
    var chasov = 0;
    var minut = 0;
    var sekund = 0;
    var result = "";
    var stopwatch_value = 0;
    var interval;
    this.start = function(start_from) {
        stopwatch_value = start_from || 0;
        interval = setInterval(function() {
            stopwatch_value++;


            chasov = Math.floor(stopwatch_value / 3600);
            minut = Math.floor((stopwatch_value - chasov * 3600) / 60);
            sekund = stopwatch_value - (chasov * 3600 + minut * 60);

            result = "<b>" + chasov + " часов " + minut + " мин " + sekund + " cек</b>";

            var SummDok1 = document.getElementById('secudomer1');
            SummDok1.innerHTML = result;

        }, 1000);
    };

    this.stop = function() {
        clearInterval(interval);
    };



}

var Secudomer = new secudomer();
Secudomer.start(0);