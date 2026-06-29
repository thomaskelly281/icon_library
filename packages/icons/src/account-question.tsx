import { mdiAccountQuestion } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountQuestion(props: IconComponentProps) {
  return <Icon path={mdiAccountQuestion} {...props} />;
}

export { mdiAccountQuestion as path };
