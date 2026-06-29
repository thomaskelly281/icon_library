import { mdiFileQuestion } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileQuestion(props: IconComponentProps) {
  return <Icon path={mdiFileQuestion} {...props} />;
}

export { mdiFileQuestion as path };
