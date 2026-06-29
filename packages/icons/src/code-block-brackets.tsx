import { mdiCodeBlockBrackets } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CodeBlockBrackets(props: IconComponentProps) {
  return <Icon path={mdiCodeBlockBrackets} {...props} />;
}

export { mdiCodeBlockBrackets as path };
