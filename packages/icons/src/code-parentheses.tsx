import { mdiCodeParentheses } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CodeParentheses(props: IconComponentProps) {
  return <Icon path={mdiCodeParentheses} {...props} />;
}

export { mdiCodeParentheses as path };
