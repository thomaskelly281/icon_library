import { mdiCodeBlockParentheses } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CodeBlockParentheses(props: IconComponentProps) {
  return <Icon path={mdiCodeBlockParentheses} {...props} />;
}

export { mdiCodeBlockParentheses as path };
