import * as S from './styled'
import * as I from '../Input/styled'

type SelectProps = {
  label: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  id: string
  children: React.ReactNode
}

const Select = ({ label, value, onChange, id, children }: SelectProps) => {
  return (
    <I.FormControl>
      <I.Label htmlFor={id}>{label}</I.Label>
      <S.SelectField value={value} onChange={onChange} name={id} id={id}>
        {children}
      </S.SelectField>
    </I.FormControl>
  )
}

export default Select
