import { mdiApplicationParentheses } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ApplicationParentheses(props: IconComponentProps) {
  return <Icon path={mdiApplicationParentheses} {...props} />;
}

export { mdiApplicationParentheses as path };
