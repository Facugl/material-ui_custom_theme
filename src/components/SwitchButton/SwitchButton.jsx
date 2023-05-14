import SwitchStyled from "./SwitchButtonStyles"
import { useSelector, useDispatch } from 'react-redux'
import { setThemeMode } from "../../redux/slices/theme"

const SwitchButton = () => {
  const { theme: { themeMode } } = useSelector(state => state)

  const dispatch = useDispatch()

  const handleChangeTheme = () => {
    dispatch(setThemeMode(themeMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <SwitchStyled onChange={handleChangeTheme} />
  )
}

export default SwitchButton