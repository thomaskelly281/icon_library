import { mdiLockQuestion } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockQuestion(props: IconComponentProps) {
  return <Icon path={mdiLockQuestion} {...props} />;
}

export { mdiLockQuestion as path };
