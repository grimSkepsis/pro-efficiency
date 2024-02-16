/**
 * Route definitions for the API
 */
export const API_ROUTES = {
  PLAYER: "/api/player",
};

/**
 * Builder for absolute internal routes
 * @param path
 * @returns
 */
export function createInternalRoute(path: string) {
  return `${process.env.NEXT_PUBLIC_HOST_URL}${path}`;
}

/**
 * Builder for character service endpoint
 * @param path
 * @returns
 */
export function createCharacterServiceRoute(path: string) {
  return `${process.env.NEXT_PUBLIC_CHARACTER_SERVICE_URL}${path}`;
}

/**
 * Route definitions for the API
 */
export const CHARACTER_SERVICE_ROUTES = {
  CHARACTER: "/character-data",
};
