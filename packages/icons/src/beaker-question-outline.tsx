import { mdiBeakerQuestionOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BeakerQuestionOutline(props: IconComponentProps) {
  return <Icon path={mdiBeakerQuestionOutline} {...props} />;
}

export { mdiBeakerQuestionOutline as path };
