const artistGame =
  `<h2 class="title main-title">Кто исполняет эту песню?</h2>
  <div class="player-wrapper">
    <div class="player">
      <audio></audio>
      <button class="player-control player-control--pause"></button>
      <div class="player-track">
        <span class="player-status"></span>
      </div>
    </div>
  </div>
  <form class="main-list">
    <div class="main-answer-wrapper">
      <input class="main-answer-r" type="radio" id="answer-1" name="answer" value="val-1"/>
      <label class="main-answer" for="answer-1">
        <img class="main-answer-preview" src="http://placehold.it/134x134"
             alt="Пелагея" width="134" height="134">
        Пелагея
      </label>
    </div>

    <div class="main-answer-wrapper">
      <input class="main-answer-r" type="radio" id="answer-2" name="answer" value="val-2"/>
      <label class="main-answer" for="answer-2">
        <img class="main-answer-preview" src="http://placehold.it/134x134"
             alt="Краснознаменная дивизия имени моей бабушки" width="134" height="134">
        Краснознаменная дивизия имени моей бабушки
      </label>
    </div>

    <div class="main-answer-wrapper">
      <input class="main-answer-r" type="radio" id="answer-3" name="answer" value="val-3"/>
      <label class="main-answer" for="answer-3">
        <img class="main-answer-preview" src="http://placehold.it/134x134"
             alt="Lorde" width="134" height="134">
        Lorde
      </label>
    </div>
  </form>`;

const genreGame =
  `<h2 class="title">Выберите инди-рок треки</h2>
  <form class="genre">
    <div class="genre-answer">
      <div class="player-wrapper">
        <div class="player">
          <audio></audio>
          <button class="player-control player-control--pause"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <input type="checkbox" name="answer" value="answer-1" id="a-1">
      <label class="genre-answer-check" for="a-1"></label>
    </div>

    <div class="genre-answer">
      <div class="player-wrapper">
        <div class="player">
          <audio></audio>
          <button class="player-control player-control--play"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <input type="checkbox" name="answer" value="answer-1" id="a-2">
      <label class="genre-answer-check" for="a-2"></label>
    </div>

    <div class="genre-answer">
      <div class="player-wrapper">
        <div class="player">
          <audio></audio>
          <button class="player-control player-control--play"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <input type="checkbox" name="answer" value="answer-1" id="a-3">
      <label class="genre-answer-check" for="a-3"></label>
    </div>

    <div class="genre-answer">
      <div class="player-wrapper">
        <div class="player">
          <audio></audio>
          <button class="player-control player-control--play"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <input type="checkbox" name="answer" value="answer-1" id="a-4">
      <label class="genre-answer-check" for="a-4"></label>
    </div>

    <button class="genre-answer-send" type="submit">Ответить</button>
  </form>`;

export {artistGame, genreGame};