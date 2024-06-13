import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"

export function InputFile() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 text-gray-800">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file"/>
    </div>
  )
}
