import { mdiMessageQuestionOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageQuestionOutline(props: IconComponentProps) {
  return <Icon path={mdiMessageQuestionOutline} {...props} />;
}

export { mdiMessageQuestionOutline as path };
