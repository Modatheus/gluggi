import {StyleSheet} from 'aphrodite'

const containerCommon = {
  color: 'white',
  display: 'flex',
  flexWrap: 'wrap',
  height: 150,
}

export const iconStyle = {
  height: 150,
  width: 150
}

export const smallIconStyle = {
  height: 75,
  width: 75
}

export default StyleSheet.create({
  container: {
    ...containerCommon,
    alignItems: 'center',
    width: 450
  },
  smallContainer: {
    ...containerCommon,
    width: 150,
    height: 75
  },
  metaContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    width: 300
  },
  metaRow: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  metaValue: {
    width: '50%',
    margin: '5px 0 0 0'
  }
})
