export default {
  clockContainer: {
    backgroundColor: 'black',
    height: 100,
    width: 100,
    position: 'relative',
    borderRadius: '50%',
    border: '3px solid white'
  },
  pointerStyle: {
    height: 40,
    width: 3,
    borderRadius: 3,
    backgroundColor: 'white',
    transform: 'rotate(0deg)',
    transformOrigin: 'bottom',
    transition: 'all 1s',
    position: 'absolute',
    bottom: 50,
    left: 50
  },
  hourPointers: {
    height: 5,
    width: 3,
    backgroundColor: 'white'
  }
}
