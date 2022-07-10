export interface IInput {
  title: string;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  invalid?: boolean;
  marginBottom?: number;
  editable: boolean
}
