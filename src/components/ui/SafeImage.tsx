import { useState, type ImgHTMLAttributes } from 'react'

export default function SafeImage({ onError, style, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        aria-hidden
        className={props.className}
        style={{ ...style, background: 'linear-gradient(135deg, var(--color-roast), var(--color-card))' }}
      />
    )
  }

  return (
    <img
      {...props}
      style={style}
      onError={(e) => {
        setFailed(true)
        onError?.(e)
      }}
    />
  )
}
