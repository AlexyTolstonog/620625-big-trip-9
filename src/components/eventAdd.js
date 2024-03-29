import {AbstractComponent} from './abstractClass.js';
export class CardAdd extends AbstractComponent {
  constructor({photos, type, dueDate, cost, isFavorite, additionalOptions, description, cities, allOptions}) {
    super();
    this._photos = photos;
    this._type = type;
    this._dueDate = new Date(dueDate);
    this._cost = cost;
    this._isFavorite = isFavorite;
    this._additionalOptions = additionalOptions;
    this._description = description;
    this._cities = cities;
    this._allOptions = allOptions;
  }
  getTemplate() {
    return `<li class="trip-events__item">
   <form class="event  event--edit" action="#" method="post">
      <header class="event__header">
         <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src=${this._type.src} alt=${this._type.title}>
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
            <div class="event__type-list">
               <fieldset class="event__type-group">
                  <legend class="visually-hidden">Transfer</legend>
                  <div class="event__type-item">
                     <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
                     <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
                  </div>
                  <div class="event__type-item">
                     <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
                     <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
                  </div>
                  <div class="event__type-item">
                     <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
                     <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
                  </div>
                  <div class="event__type-item">
                     <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
                     <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
                  </div>
                  <div class="event__type-item">
                     <input id="event-type-transport-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="transport">
                     <label class="event__type-label  event__type-label--transport" for="event-type-transport-1">Transport</label>
                  </div>
                  <div class="event__type-item">
                     <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
                     <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
                  </div>
                  <div class="event__type-item">
                     <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked="">
                     <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
                  </div>
               </fieldset>
               <fieldset class="event__type-group">
                  <legend class="visually-hidden">Activity</legend>
                  <div class="event__type-item">
                     <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
                     <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
                  </div>
                  <div class="event__type-item">
                     <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
                     <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
                  </div>
                  <div class="event__type-item">
                     <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
                     <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
                  </div>
               </fieldset>
            </div>
         </div>
         <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
            ${this._type.description}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value=${this._cities[0]} list="destination-list-1">
            <datalist id="destination-list-1">
               ${this._cities.map((city) => `
               <option value=${city}></option>
               `).join(` `)}
            </datalist>
         </div>
         <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">
            From
            </label>
            <input class="event__input  event__input--time"
               id="event-start-time-1" type="text" name="event-start-time"
               value="${new Date(this._dueDate).getDate()}/${new Date(this._dueDate).getMonth()}/${new Date(this._dueDate).getFullYear()} ${new Date(this._dueDate).getHours()}:${new Date(this._dueDate).getMinutes()}">
            —
            <label class="visually-hidden" for="event-end-time-1">
            To
            </label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time"
            value="${new Date(this._dueDate).getDate()}/${new Date(this._dueDate).getMonth()}/${new Date(this._dueDate).getFullYear()} ${new Date(this._dueDate).getHours()}:${new Date(this._dueDate).getMinutes()}">
         </div>
         <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            €
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value=${this._cost}>
         </div>
         <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
         <button class="event__reset-btn" type="reset">Delete</button>
         <input id="event-favorite-1" class="event__favorite-checkbox  visually-hidden" type="checkbox" name="event-favorite" ${this._isFavorite ? `checked=""` : `" "`}>
         <label class="event__favorite-btn" for="event-favorite-1">
            <span class="visually-hidden">Add to favorite</span>
            <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
               <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
            </svg>
         </label>
         <button class="event__rollup-btn" type="button">
         <span class="visually-hidden">Open event</span>
         </button>
      </header>
      <section class="event__details">
         <section class="event__section  event__section--offers">
            <h3 class="event__section-title  event__section-title--offers">Offers</h3>
            <div class="event__available-offers">
               ${this._allOptions.map((option) => `
               <div class="event__offer-selector">
                  <input class="event__offer-checkbox  visually-hidden"

                   id="event-offer-luggage-${this._allOptions.indexOf(option)}"

                    type="checkbox" name="event-offer-luggage" ${this._additionalOptions.includes(option) && option.isTrue ? `checked=" "` : ``}>

                  <label class="event__offer-label" for="event-offer-luggage-${this._allOptions.indexOf(option)}">

                  <span class="event__offer-title">${option.title}</span>
                  +
                  €&nbsp;<span class="event__offer-price">${option.coast}</span>
                  </label>
               </div>
               `).join(` `)}
            </div>
         </section>
         <section class="event__section  event__section--destination">
            <h3 class="event__section-title  event__section-title--destination">Destination</h3>
            <p class="event__destination-description">${this._description}</p>
            <div class="event__photos-container">
               <div class="event__photos-tape">
                  ${this._photos.map((photo) => `
                  <img class="event__photo" src=${photo} alt="Event photo">
                  `).join(` `)}
               </div>
            </div>
         </section>
      </section>
   </form>
</li>`;
  }
}
