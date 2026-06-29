import { mdiTableQuestion } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableQuestion(props: IconComponentProps) {
  return <Icon path={mdiTableQuestion} {...props} />;
}

export { mdiTableQuestion as path };
