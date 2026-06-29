import { mdiAccountQuestionOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountQuestionOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountQuestionOutline} {...props} />;
}

export { mdiAccountQuestionOutline as path };
