import './Button.css'

const Button = ({
  className = '',
  children,
  h = 'auto',
  w = 'auto',
  type = 'button',
  ...props
}) => {
  return (
    <>
      <button
        className={`button ${className}`}
        type={type}
        style={{ width: w, height: h }}
        {...props}
      >
        {children}
      </button>
    </>
  )
}

export default Button
