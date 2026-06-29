import { mdiCodeBrackets } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CodeBrackets(props: IconComponentProps) {
  return <Icon path={mdiCodeBrackets} {...props} />;
}

export { mdiCodeBrackets as path };
