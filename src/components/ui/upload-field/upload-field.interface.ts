export interface IUploadField {
  onChange: (value: string) => void
  value?: string
  defaultValue?: string
  file?: boolean
}
