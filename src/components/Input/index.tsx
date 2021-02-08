import * as S from './styled'

type InputProps = {
  label: string
  type: string
  id: string
  placeholder: string
  onChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void
  value: string | number
}

const Input = ({
  label,
  type,
  id,
  placeholder,
  onChange,
  value
}: InputProps) => {
  if (type === 'text') {
    return (
      <S.FormControl>
        <S.Label htmlFor={id}>{label}</S.Label>
        <S.InputField
          type={type}
          placeholder={placeholder}
          name={id}
          id={id}
          onChange={onChange}
          value={value}
        />
      </S.FormControl>
    )
  }
  if (type === 'textarea') {
    return (
      <S.FormControl>
        <S.Label htmlFor={id}>{label}</S.Label>
        <S.TextField
          placeholder={placeholder}
          name={id}
          id={id}
          onChange={onChange}
          value={value}
        ></S.TextField>
      </S.FormControl>
    )
  }
}

export default Input
