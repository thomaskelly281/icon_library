import { mdiProgressQuestion } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ProgressQuestion(props: IconComponentProps) {
  return <Icon path={mdiProgressQuestion} {...props} />;
}

export { mdiProgressQuestion as path };
