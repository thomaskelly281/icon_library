import { mdiBeakerQuestion } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BeakerQuestion(props: IconComponentProps) {
  return <Icon path={mdiBeakerQuestion} {...props} />;
}

export { mdiBeakerQuestion as path };
