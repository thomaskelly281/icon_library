import { mdiCloudQuestionOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudQuestionOutline(props: IconComponentProps) {
  return <Icon path={mdiCloudQuestionOutline} {...props} />;
}

export { mdiCloudQuestionOutline as path };
