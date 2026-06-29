import { mdiHeadQuestionOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeadQuestionOutline(props: IconComponentProps) {
  return <Icon path={mdiHeadQuestionOutline} {...props} />;
}

export { mdiHeadQuestionOutline as path };
