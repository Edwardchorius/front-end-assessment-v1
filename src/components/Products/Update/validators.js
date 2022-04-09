import {timestampToDays} from '../../../utils';
import moment from 'moment'

const MINIMUM_DAYS_TO_EXPIRATION = 30

export const isNameValid = (value) => {
	return value.trim().length > 0 && value.trim().length <= 200;
};

export const isCategoriesValid = (value) => {
	return value.length > 0 && value.length <= 5;
}

export const isExpirationDateValid = (dateValue) => {
	return moment(dateValue).isValid() &&
	moment().add(MINIMUM_DAYS_TO_EXPIRATION, 'days') <= moment(dateValue)
}