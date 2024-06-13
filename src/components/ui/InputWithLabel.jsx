import { Input } from "./input"
import { Label } from "./label"

export function InputWithLabel({textname}) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={textname}>{textname}</Label>
      <Input type={textname} id={textname} placeholder={textname} />
    </div>
  )
}