export function setInputValue(str) {
  return {
    type: 'SET_INPUT_VALUE',
    payload: str,
  }
}