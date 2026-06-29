/**
 * Light validations for user registration and itinerary creations.
 * Replaces standard schema validators (like Zod) with lightweight, customized validation methods.
 */

export interface ValidationResult {
  success: boolean;
  errors?: Record<string, string>;
}

export function validateRegisterInput(data: any): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.password || data.password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }

  return {
    success: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateItineraryInput(data: any): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.title || data.title.trim().length < 5) {
    errors.title = "Title must be at least 5 characters.";
  }

  if (!data.destination || data.destination.trim().length < 2) {
    errors.destination = "Destination must be at least 2 characters.";
  }

  if (!data.description || data.description.trim().length < 10) {
    errors.description = "Description must be at least 10 characters.";
  }

  if (!data.duration || Number(data.duration) <= 0) {
    errors.duration = "Duration must be at least 1 day.";
  }

  if (!data.budget || Number(data.budget) < 0) {
    errors.budget = "Budget must be a non-negative number.";
  }

  if (!data.travelStyle) {
    errors.travelStyle = "Please select a travel style.";
  }

  return {
    success: Object.keys(errors).length === 0,
    errors,
  };
}
