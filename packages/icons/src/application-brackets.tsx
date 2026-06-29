import { mdiApplicationBrackets } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ApplicationBrackets(props: IconComponentProps) {
  return <Icon path={mdiApplicationBrackets} {...props} />;
}

export { mdiApplicationBrackets as path };
