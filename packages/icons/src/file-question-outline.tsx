import { mdiFileQuestionOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileQuestionOutline(props: IconComponentProps) {
  return <Icon path={mdiFileQuestionOutline} {...props} />;
}

export { mdiFileQuestionOutline as path };
