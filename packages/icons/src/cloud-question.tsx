import { mdiCloudQuestion } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudQuestion(props: IconComponentProps) {
  return <Icon path={mdiCloudQuestion} {...props} />;
}

export { mdiCloudQuestion as path };
