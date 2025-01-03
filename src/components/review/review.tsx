import { User } from '../../recources/types';
import { parseDateNumber, parseDateWord } from './date-parsers';

export type ReviewProps = {
  id: number;
  user: User;
  rating: number;
  comment: string;
  date: string;
}

function Review({ id, user, rating, comment, date }: ReviewProps): JSX.Element {
  return (
    <li id={id.toString()} className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={parseDateNumber(new Date(date))}>{parseDateWord(new Date(date))}</time>
      </div>
    </li>
  );
}

export default Review;
