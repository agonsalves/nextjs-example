import { postTypeConfig } from '../variables/postTypes';

export const plural = postType =>
  postTypeConfig.find(item => item.name === postType).plural;

export const singular = postType =>
  postTypeConfig.find(item => item.name === postType).singular;

export const composePersonTitle = post =>
  post.alternate_title || post.position?.[0].term;

export const articlize = text => 
  (['a', 'e', 'i', 'o', 'u']
    .includes(text.toLowerCase().charAt(0)) ? 'an ' : 'a ') + text

export const decodeEntities = html => {
  let cache = {},
      character,
      e = document.createElement('div')

  return html?.replace(/([&][^&; ]+[;])/g, entity => {
      character = cache[entity]
      if (!character) {
          e.innerHTML = entity
          if (e.childNodes[0])
              character = cache[entity] = e.childNodes[0].nodeValue
          else
              character = ''
      }
      return character
  })
}

export const isString = a => typeof a === 'string' || a instanceof String