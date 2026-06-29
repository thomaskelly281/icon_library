import { mdiCodeParenthesesBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CodeParenthesesBox(props: IconComponentProps) {
  return <Icon path={mdiCodeParenthesesBox} {...props} />;
}

export { mdiCodeParenthesesBox as path };
