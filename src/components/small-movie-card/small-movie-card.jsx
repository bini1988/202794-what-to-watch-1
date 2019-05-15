import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this._playerRef = React.createRef();
    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
    this._timeout = null;
  }

  render() {
    const {card} = this.props;
    const {id, title, img, trailer} = card;

    return (
      <article
        id={id}
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}>
        <div className="small-movie-card__image">
          <VideoPlayer
            ref={this._playerRef}
            src={trailer}
            poster={img}
            width={280}
            height={175}
            muted={true}/>
        </div>
        <h3 className="small-movie-card__title">
          <a
            className="small-movie-card__link"
            href={`/film/${id}`}>
            {title}
          </a>
        </h3>
      </article>
    );
  }

  componentWillUnmount() {
    this._handleTimeoutReset();
  }

  _handleMouseEnter(event) {
    const {card, autoPlayTimeout, onMouseEnter} = this.props;

    this._timeout = setTimeout(() => {
      if (this._timeout && this._playerRef.current) {
        this._playerRef.current.play();
      }
    }, autoPlayTimeout);

    onMouseEnter(card, event);
  }

  _handleMouseLeave(event) {
    const {card, onMouseLeave} = this.props;

    this._handleTimeoutReset();
    if (this._playerRef.current) {
      this._playerRef.current.stop();
    }

    onMouseLeave(card, event);
  }

  _handleTimeoutReset() {
    clearTimeout(this._timeout);
  }
}

SmallMovieCard.defaultProps = {
  autoPlayTimeout: 500,
  onMouseEnter: () => {},
  onMouseLeave: () => {},
};

SmallMovieCard.propTypes = {
  /** Карточка фильма */
  card: PropTypes.shape({
    /** id фильма */
    id: PropTypes.string.isRequired,
    /** Название фильма */
    title: PropTypes.string.isRequired,
    /** Путь к постеру фильма */
    img: PropTypes.string,
    /** Путь к трейлеру фильма */
    trailer: PropTypes.string,
  }).isRequired,
  /** Таймаут автовоспроизведения трейлера фильма, мс */
  autoPlayTimeout: PropTypes.number,
  /** Обрабочик события курсор мыши на элементе */
  onMouseEnter: PropTypes.func,
  /** Обрабочик события курсор мыши покинул элемент */
  onMouseLeave: PropTypes.func,
};

export default SmallMovieCard;
