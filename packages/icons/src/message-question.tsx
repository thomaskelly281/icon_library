import { mdiMessageQuestion } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageQuestion(props: IconComponentProps) {
  return <Icon path={mdiMessageQuestion} {...props} />;
}

export { mdiMessageQuestion as path };
