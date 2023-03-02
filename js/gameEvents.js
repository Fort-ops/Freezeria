function cmgGameEvent(cm_game_evt, cm_game_lvl) {
  if (typeof parent.cmgGameEvent === "function" && parent != this) {
    try {
      parent.cmgGameEvent(cm_game_evt, cm_game_lvl);
    } catch (e) {
      console.log("cmgGameEvent failed in parent");
    }
  } else {
    gDate = new Date();
    console.log("cmgGameEvent: event=" + cm_game_evt + " | level=" + cm_game_lvl + " Time: " + gDate + " Timestamp: " + gDate.getTime());
  }
}
