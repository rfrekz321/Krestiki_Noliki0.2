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

var base = 60;
var clocktimer, dateObj, dh, dm, ds, ms;
var readout = '';
var h = 1,
    m = 1,
    tm = 1,
    s = 0,
    ts = 0,
    ms = 0,
    show = true,
    init = 0,
    ii = 0;

function startTIME() {
    var cdateObj = new Date();
    var t = (cdateObj.getTime() - dateObj.getTime()) - (s * 1000);
    if (t > 999) { s++; }
    if (s >= (m * base)) {
        ts = 0;
        m++;
    } else {
        ts = parseInt((ms / 100) + s);
        if (ts >= base) { ts = ts - ((m - 1) * base); }
    }
    if (m > (h * base)) {
        tm = 1;
        h++;
    } else {
        tm = parseInt((ms / 100) + m);
        if (tm >= base) { tm = tm - ((h - 1) * base); }
    }
    ms = Math.round(t / 10);
    if (ms > 99) { ms = 0; }
    if (ms == 0) { ms = '00'; }
    if (ms > 0 && ms <= 9) { ms = '0' + ms; }
    if (ts > 0) { ds = ts; if (ts < 10) { ds = '0' + ts; } } else { ds = '00'; }
    dm = tm - 1;
    if (dm > 0) { if (dm < 10) { dm = '0' + dm; } } else { dm = '00'; }
    dh = h - 1;
    if (dh > 0) { if (dh < 10) { dh = '0' + dh; } } else { dh = '00'; }
    readout = dh + ':' + dm + ':' + ds + '.' + ms;
    if (show == true) { document.TestForm.stopwatch.value = readout; }
    clocktimer = setTimeout("startTIME()", 1);
}