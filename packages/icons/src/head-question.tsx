import { mdiHeadQuestion } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeadQuestion(props: IconComponentProps) {
  return <Icon path={mdiHeadQuestion} {...props} />;
}

export { mdiHeadQuestion as path };
